from PIL import Image
from collections import defaultdict
import json, math
im=Image.open('public/logo-white.png').resize((540,540),Image.Resampling.LANCZOS)
a=im.getchannel('A'); pix=a.load(); n=540
on=lambda x,y: 0<=x<n and 0<=y<n and pix[x,y]>=128
edges=defaultdict(list)
for y in range(n):
 for x in range(n):
  if not on(x,y):continue
  if not on(x,y-1):edges[(x,y)].append((x+1,y))
  if not on(x+1,y):edges[(x+1,y)].append((x+1,y+1))
  if not on(x,y+1):edges[(x+1,y+1)].append((x,y+1))
  if not on(x-1,y):edges[(x,y+1)].append((x,y))
def rdp(p,eps):
 if len(p)<3:return p
 ax,ay=p[0]; bx,by=p[-1]; dx=bx-ax; dy=by-ay; d=dx*dx+dy*dy
 best,idx=0,0
 for i,(x,y) in enumerate(p[1:-1],1):
  t=max(0,min(1,((x-ax)*dx+(y-ay)*dy)/d)) if d else 0
  dist=(x-ax-t*dx)**2+(y-ay-t*dy)**2
  if dist>best:best,idx=dist,i
 if best>eps*eps:return rdp(p[:idx+1],eps)[:-1]+rdp(p[idx:],eps)
 return [p[0],p[-1]]
def area(p):return sum(p[i][0]*p[(i+1)%len(p)][1]-p[(i+1)%len(p)][0]*p[i][1] for i in range(len(p)))/2
def inside(pt,poly):
 x,y=pt; ok=False
 for i,(a,b) in enumerate(poly):
  c,d=poly[i-1]
  if (b>y)!=(d>y) and x<(c-a)*(y-b)/(d-b)+a:ok=not ok
 return ok
loops=[]
while edges:
 start=next(iter(edges)); p=[start]; cur=start
 while True:
  nxt=edges[cur].pop()
  if not edges[cur]:del edges[cur]
  p.append(nxt);cur=nxt
  if cur==start:break
 p=rdp(p,.65)[:-1]
 if len(p)>=3 and abs(area(p))>3:loops.append(p)
outer=[{'outer':p,'holes':[]} for p in loops if area(p)>0]
for h in [p for p in loops if area(p)<0]:
 candidates=[o for o in outer if inside(h[0],o['outer'])]
 if candidates:min(candidates,key=lambda o:abs(area(o['outer'])))['holes'].append(h)
def norm(p):return [[round((x/n-.5)*5.8,5),round((.5-y/n)*5.8,5)] for x,y in p]
out=[{'outer':norm(o['outer']),'holes':[norm(h) for h in o['holes']]} for o in outer]
with open('public/logo-shape.json','w') as f:json.dump(out,f,separators=(',',':'))
print(len(out),'shapes;',sum(len(o['outer'])+sum(map(len,o['holes'])) for o in out),'vertices')
