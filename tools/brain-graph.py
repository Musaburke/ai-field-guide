"""Draw the shape of a notes vault as a graph, like Obsidian's graph view.

Reads [[links]] between Markdown notes and writes only anonymous geometry
(positions, sizes, folder index) to src/data/brain-graph.json. No note names
or text leave the vault. Run: python3 -I tools/brain-graph.py ~/Brain
"""
import json, math, pathlib, random, re, sys

root = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else '~/Brain').expanduser()
notes = [p for p in root.rglob('*.md')
         if not any(x.startswith('.') for x in p.relative_to(root).parts) and 'Templates' not in p.parts]
idx = {p.stem: i for i, p in enumerate(notes)}
edges = set()
for p in notes:
    for m in re.findall(r'\[\[([^\]|#]+)', p.read_text(errors='ignore')):
        t = m.strip().split('/')[-1]
        if t in idx and t != p.stem:
            edges.add(tuple(sorted((idx[p.stem], idx[t]))))
folders = sorted({p.relative_to(root).parts[0] if len(p.relative_to(root).parts) > 1 else '' for p in notes})
group = [folders.index(p.relative_to(root).parts[0] if len(p.relative_to(root).parts) > 1 else '') for p in notes]
deg = [0] * len(notes)
for a, b in edges: deg[a] += 1; deg[b] += 1

# Unlinked notes would drift to the edges and shrink the picture, so leave them out.
keep = [i for i in range(len(notes)) if deg[i]]
remap = {old: new for new, old in enumerate(keep)}
notes = [notes[i] for i in keep]; group = [group[i] for i in keep]; deg = [deg[i] for i in keep]
edges = {(remap[a], remap[b]) for a, b in edges}

# Fruchterman-Reingold, seeded so the picture is the same each run.
random.seed(7)
n, W, H = len(notes), 640.0, 400.0
pos = [[random.uniform(0, W), random.uniform(0, H)] for _ in range(n)]
k = math.sqrt(W * H / n) * 0.55
t = W / 8
for step in range(600):
    disp = [[0.0, 0.0] for _ in range(n)]
    for i in range(n):
        for j in range(i + 1, n):
            dx, dy = pos[i][0] - pos[j][0], pos[i][1] - pos[j][1]
            d = math.hypot(dx, dy) or 0.01
            f = k * k / d
            disp[i][0] += dx / d * f; disp[i][1] += dy / d * f
            disp[j][0] -= dx / d * f; disp[j][1] -= dy / d * f
    for a, b in edges:
        dx, dy = pos[a][0] - pos[b][0], pos[a][1] - pos[b][1]
        d = math.hypot(dx, dy) or 0.01
        f = d * d / k * 0.35
        disp[a][0] -= dx / d * f; disp[a][1] -= dy / d * f
        disp[b][0] += dx / d * f; disp[b][1] += dy / d * f
    for i in range(n):
        # gentle pull to the centre keeps unlinked notes in frame
        disp[i][0] += (W / 2 - pos[i][0]) * 0.02 * k / 10
        disp[i][1] += (H / 2 - pos[i][1]) * 0.03 * k / 10
        d = math.hypot(*disp[i]) or 0.01
        pos[i][0] += disp[i][0] / d * min(d, t)
        pos[i][1] += disp[i][1] / d * min(d, t)
    t *= 0.985

xs, ys = [p[0] for p in pos], [p[1] for p in pos]
pad = 16
sx = (W - 2 * pad) / (max(xs) - min(xs)); sy = (H - 2 * pad) / (max(ys) - min(ys))
s = min(sx, sy)
ox = (W - (max(xs) - min(xs)) * s) / 2; oy = (H - (max(ys) - min(ys)) * s) / 2
out = {
    'width': int(W), 'height': int(H), 'folders': [f or 'Top level' for f in folders],
    'nodes': [{'x': round((p[0] - min(xs)) * s + ox, 1), 'y': round((p[1] - min(ys)) * s + oy, 1),
               'r': round(2.4 + math.sqrt(deg[i]) * 1.25, 1), 'g': group[i]} for i, p in enumerate(pos)],
    'edges': sorted(edges),
}
dest = pathlib.Path(__file__).resolve().parent.parent / 'src/data/brain-graph.json'
dest.write_text(json.dumps(out, separators=(',', ':')))
print(f'{n} notes, {len(edges)} links -> {dest}')
