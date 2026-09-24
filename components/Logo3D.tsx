"use client";
import { useEffect, useRef, useState } from "react";
export default function Logo3D(){
 const host=useRef<HTMLDivElement>(null);
 const [ready,setReady]=useState(false);
 const reset=useRef<()=>void>(()=>{});
 const turn=useRef<(x:number,y:number)=>void>(()=>{});
 useEffect(()=>{
  const element=host.current;if(!element)return;
  let disposed=false, cleanup=()=>{};
  const controller=new AbortController();
  async function setup(element:HTMLDivElement){
   const [THREE, { GLTFLoader }] = await Promise.all([import('three'), import('three/examples/jsm/loaders/GLTFLoader.js')]);
   const response=await fetch('/CAOSRECORDS.glb',{signal:controller.signal});
   if(!response.ok)throw new Error('No se pudo cargar el modelo');
   const buffer=await response.arrayBuffer();if(disposed)return;
   const gltf=await new GLTFLoader().parseAsync(buffer,'');
   const model=gltf.scene;
   const releaseModel=()=>{
    const geometries=new Set<import('three').BufferGeometry>();
    const materials=new Set<import('three').Material>();
    const textures=new Set<import('three').Texture>();
    model.traverse(object=>{if(object instanceof THREE.Mesh){geometries.add(object.geometry);for(const material of Array.isArray(object.material)?object.material:[object.material])materials.add(material);}});
    materials.forEach(material=>{Object.values(material).forEach(value=>{if(value instanceof THREE.Texture)textures.add(value);});material.dispose();});
    textures.forEach(texture=>texture.dispose());geometries.forEach(geometry=>geometry.dispose());
   };
   if(disposed){releaseModel();return;}cleanup=releaseModel;
   // Align the exported face before adding an opaque interior backing.
   model.traverse(object=>{if(object instanceof THREE.Mesh){object.rotation.set(Math.PI/2,0,0);object.scale.y*=.28;for(const material of Array.isArray(object.material)?object.material:[object.material]){if(material instanceof THREE.MeshStandardMaterial){material.color.set(0xf2f2f2);material.metalness=.22;material.roughness=.36;material.side=THREE.FrontSide;}}}});
   model.updateMatrixWorld(true);
   const bounds=new THREE.Box3().setFromObject(model);
   const size=bounds.getSize(new THREE.Vector3());const center=bounds.getCenter(new THREE.Vector3());
   const scale=5.8/Math.max(size.x,size.y,size.z);
   const centered=new THREE.Group();centered.add(model);model.position.sub(center);centered.scale.setScalar(scale);
   // A dark solid core prevents the rear lettering showing through the front.
   const points:import('three').Vector2[]=[];
   centered.updateMatrixWorld(true);
   model.traverse(object=>{if(object instanceof THREE.Mesh){const positions=object.geometry.getAttribute('position');for(let i=0;i<positions.count;i++){const point=new THREE.Vector3().fromBufferAttribute(positions,i).applyMatrix4(object.matrixWorld);points.push(new THREE.Vector2(point.x,point.y));}}});
   points.sort((a,b)=>a.x-b.x||a.y-b.y);
   const cross=(a:import('three').Vector2,b:import('three').Vector2,c:import('three').Vector2)=>(b.x-a.x)*(c.y-a.y)-(b.y-a.y)*(c.x-a.x);
   const half=(list:import('three').Vector2[])=>{const hull:import('three').Vector2[]=[];for(const p of list){while(hull.length>1&&cross(hull[hull.length-2],hull[hull.length-1],p)<=0)hull.pop();hull.push(p);}return hull;};
   const lower=half(points),upper=half([...points].reverse());lower.pop();upper.pop();
   const backingGeometry=new THREE.ExtrudeGeometry(new THREE.Shape([...lower,...upper]),{depth:.09,bevelEnabled:false});
   const backingMaterial=new THREE.MeshStandardMaterial({color:0x080808,roughness:.7,metalness:.1});
   const backing=new THREE.Mesh(backingGeometry,backingMaterial);backing.position.z=-.045;
   const renderer=new THREE.WebGLRenderer({alpha:true,antialias:true,powerPreference:'low-power'});
   renderer.setPixelRatio(Math.min(devicePixelRatio,1.75));renderer.setClearColor(0x080808,0);
   renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1;
   renderer.domElement.setAttribute('aria-hidden','true');renderer.domElement.dataset.model='/CAOSRECORDS.glb';element.appendChild(renderer.domElement);
   const scene=new THREE.Scene();const camera=new THREE.PerspectiveCamera(38,1,.1,50);camera.position.z=9.8;
   const group=new THREE.Group();group.add(centered,backing);scene.add(group);
   scene.add(new THREE.AmbientLight(0xffffff,.45));
   const key=new THREE.DirectionalLight(0xffffff,2.4);key.position.set(-3,4,6);scene.add(key);
   const rim=new THREE.DirectionalLight(0xffffff,1.5);rim.position.set(4,0,-2);scene.add(rim);
   const fill=new THREE.DirectionalLight(0xffffff,.45);fill.position.set(2,-3,4);scene.add(fill);
   const media=matchMedia('(prefers-reduced-motion: reduce)');let reduced=media.matches;
   let targetX=.08,targetY=-.32,dragging=false,lastX=0,lastY=0,visible=true,frame=0,last=0,time=0;
   const resize=()=>{const {width,height}=element.getBoundingClientRect();renderer.setSize(width,height);camera.aspect=width/height;camera.position.z=camera.aspect<1?10.4/camera.aspect:9.8;camera.updateProjectionMatrix();renderer.render(scene,camera);};
   const ro=new ResizeObserver(resize);ro.observe(element);
   const io=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(visible)draw();});io.observe(element);
   const preference=()=>{reduced=media.matches;draw();};media.addEventListener('change',preference);
   const down=(e:PointerEvent)=>{if(reduced)return;dragging=true;lastX=e.clientX;lastY=e.clientY;element.setPointerCapture(e.pointerId);};
   const move=(e:PointerEvent)=>{if(reduced)return;if(dragging){targetY+=(e.clientX-lastX)*.008;targetX+=(e.clientY-lastY)*.006;targetX=Math.max(-.6,Math.min(.6,targetX));lastX=e.clientX;lastY=e.clientY;}else if(e.pointerType==='mouse'){const r=element.getBoundingClientRect();targetY=-.32+(e.clientX-r.left-r.width/2)/r.width*.5;targetX=.08+(e.clientY-r.top-r.height/2)/r.height*.2;}};
   turn.current=(x,y)=>{targetY+=x;targetX=Math.max(-.6,Math.min(.6,targetX+y));group.rotation.set(targetX,targetY,0);renderer.render(scene,camera);};
   const up=()=>{dragging=false;};const leave=()=>{if(!dragging){targetX=.08;targetY=-.32;}};
   element.addEventListener('pointerdown',down);element.addEventListener('pointermove',move);element.addEventListener('pointerup',up);element.addEventListener('pointercancel',up);element.addEventListener('pointerleave',leave);
   reset.current=()=>{targetX=.08;targetY=-.32;group.rotation.set(.08,-.32,0);renderer.render(scene,camera);};
   const contextLost=(e:Event)=>{e.preventDefault();setReady(false);};element.addEventListener('webglcontextlost',contextLost,true);
   function draw(now=0){cancelAnimationFrame(frame);if(disposed||!visible||document.hidden)return;
    const dt=Math.min((now-last)/1000,.05);last=now;
    if(!reduced){time+=dt;group.rotation.x+=(targetX-group.rotation.x)*.07;group.rotation.y+=(targetY+Math.sin(time*.35)*.08-group.rotation.y)*.07;group.position.y=Math.sin(time*.6)*.055;}else if(reduced){group.rotation.set(0,0,0);group.position.y=0;}
    renderer.render(scene,camera);if(!reduced)frame=requestAnimationFrame(draw);
   }
   const visibility=()=>{if(!document.hidden)draw();};document.addEventListener('visibilitychange',visibility);
   group.rotation.set(.08,-.32,0);resize();draw();setReady(true);
   cleanup=()=>{cancelAnimationFrame(frame);ro.disconnect();io.disconnect();media.removeEventListener('change',preference);document.removeEventListener('visibilitychange',visibility);element.removeEventListener('pointerdown',down);element.removeEventListener('pointermove',move);element.removeEventListener('pointerup',up);element.removeEventListener('pointercancel',up);element.removeEventListener('pointerleave',leave);element.removeEventListener('webglcontextlost',contextLost,true);releaseModel();backingGeometry.dispose();backingMaterial.dispose();renderer.dispose();renderer.domElement.remove();};
  }
  setup(element).catch(()=>{if(!disposed)setReady(false);});
  return()=>{disposed=true;controller.abort();cleanup();};
 },[]);
 return <div className="logo-sculpture"><div className="logo-canvas" ref={host} tabIndex={0} onKeyDown={e=>{const keys:Record<string,[number,number]>={ArrowLeft:[-.15,0],ArrowRight:[.15,0],ArrowUp:[0,-.1],ArrowDown:[0,.1]};if(keys[e.key]){e.preventDefault();turn.current(...keys[e.key]);}else if(e.key==="Home"){e.preventDefault();reset.current();}}} role="img" aria-label="Logo de CAOS Records en tres dimensiones."/><img className={`logo-fallback ${ready?'logo-loaded':''}`} src="/logo-white.png" alt={ready?'':'CAOS Records'} width="1080" height="1080"/></div>;
}
