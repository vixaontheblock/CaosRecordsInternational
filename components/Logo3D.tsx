"use client";
import { useEffect, useRef, useState } from "react";
type Contour = { outer: [number,number][]; holes: [number,number][][] };
export default function Logo3D(){
 const host=useRef<HTMLDivElement>(null);
 const paused=useRef(false);
 const [stopped,setStopped]=useState(false);
 const [ready,setReady]=useState(false);
 const reset=useRef<()=>void>(()=>{});
 const wake=useRef<()=>void>(()=>{});
 const turn=useRef<(x:number,y:number)=>void>(()=>{});
 useEffect(()=>{
  const element=host.current;if(!element)return;
  let disposed=false, cleanup=()=>{};
  const controller=new AbortController();
  async function setup(element:HTMLDivElement){
   const THREE=await import('three');
   const response=await fetch('/logo-shape.json',{signal:controller.signal});
   if(!response.ok)throw new Error('Logo unavailable');
   const outlines:Contour[]=await response.json();if(disposed)return;
   const renderer=new THREE.WebGLRenderer({alpha:true,antialias:true,powerPreference:'low-power'});
   renderer.setPixelRatio(Math.min(devicePixelRatio,1.75));renderer.setClearColor(0x080808,0);
   renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.3;
   renderer.domElement.setAttribute('aria-hidden','true');element.appendChild(renderer.domElement);
   const scene=new THREE.Scene();const camera=new THREE.PerspectiveCamera(38,1,.1,50);camera.position.z=9.8;
   const group=new THREE.Group();scene.add(group);
   const front=new THREE.MeshStandardMaterial({color:0xffffff,metalness:.25,roughness:.32});
   const side=new THREE.MeshStandardMaterial({color:0x999999,metalness:.65,roughness:.27});
   const geometry=new THREE.ExtrudeGeometry(outlines.map(o=>{
    const shape=new THREE.Shape(o.outer.map(([x,y])=>new THREE.Vector2(x,y)));
    for(const hole of o.holes)shape.holes.push(new THREE.Path(hole.map(([x,y])=>new THREE.Vector2(x,y))));
    return shape;
   }),{depth:.24,bevelEnabled:true,bevelSegments:2,steps:1,bevelSize:.009,bevelThickness:.012,curveSegments:2});
   geometry.translate(0,0,-.12);const mesh=new THREE.Mesh(geometry,[front,side]);group.add(mesh);
   scene.add(new THREE.AmbientLight(0xffffff,1.7));
   const key=new THREE.DirectionalLight(0xffffff,4);key.position.set(-3,4,6);scene.add(key);
   const rim=new THREE.DirectionalLight(0xffffff,3);rim.position.set(4,0,-2);scene.add(rim);
   const fill=new THREE.DirectionalLight(0xffffff,1.2);fill.position.set(2,-3,4);scene.add(fill);
   const media=matchMedia('(prefers-reduced-motion: reduce)');let reduced=media.matches;
   let targetX=.08,targetY=-.24,dragging=false,lastX=0,lastY=0,visible=true,frame=0,last=0,time=0;
   const resize=()=>{const {width,height}=element.getBoundingClientRect();renderer.setSize(width,height);camera.aspect=width/height;camera.position.z=camera.aspect<1?10.4/camera.aspect:9.8;camera.updateProjectionMatrix();renderer.render(scene,camera);};
   const ro=new ResizeObserver(resize);ro.observe(element);
   const io=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(visible)draw();});io.observe(element);
   const preference=()=>{reduced=media.matches;draw();};media.addEventListener('change',preference);
   const down=(e:PointerEvent)=>{if(reduced)return;dragging=true;lastX=e.clientX;lastY=e.clientY;element.setPointerCapture(e.pointerId);};
   const move=(e:PointerEvent)=>{if(reduced||paused.current)return;if(dragging){targetY+=(e.clientX-lastX)*.008;targetX+=(e.clientY-lastY)*.006;targetX=Math.max(-.6,Math.min(.6,targetX));lastX=e.clientX;lastY=e.clientY;}else if(e.pointerType==='mouse'){const r=element.getBoundingClientRect();targetY=-.24+(e.clientX-r.left-r.width/2)/r.width*.5;targetX=.08+(e.clientY-r.top-r.height/2)/r.height*.2;}};
   turn.current=(x,y)=>{targetY+=x;targetX=Math.max(-.6,Math.min(.6,targetX+y));group.rotation.set(targetX,targetY,0);renderer.render(scene,camera);};
   const up=()=>{dragging=false;};const leave=()=>{if(!dragging){targetX=.08;targetY=-.24;}};
   element.addEventListener('pointerdown',down);element.addEventListener('pointermove',move);element.addEventListener('pointerup',up);element.addEventListener('pointercancel',up);element.addEventListener('pointerleave',leave);
   reset.current=()=>{targetX=.08;targetY=-.24;group.rotation.set(.08,-.24,0);renderer.render(scene,camera);};
   const contextLost=(e:Event)=>{e.preventDefault();setReady(false);};element.addEventListener('webglcontextlost',contextLost,true);
   function draw(now=0){cancelAnimationFrame(frame);if(disposed||!visible||document.hidden)return;
    const dt=Math.min((now-last)/1000,.05);last=now;
    if(!paused.current&&!reduced){time+=dt;group.rotation.x+=(targetX-group.rotation.x)*.07;group.rotation.y+=(targetY-group.rotation.y)*.07;group.position.y=Math.sin(time*.6)*.055;}else if(reduced){group.rotation.set(0,0,0);group.position.y=0;}
    renderer.render(scene,camera);if(!paused.current&&!reduced)frame=requestAnimationFrame(draw);
   }
   wake.current=()=>draw();
   const visibility=()=>{if(!document.hidden)draw();};document.addEventListener('visibilitychange',visibility);
   group.rotation.set(.08,-.24,0);resize();draw();setReady(true);
   cleanup=()=>{cancelAnimationFrame(frame);ro.disconnect();io.disconnect();media.removeEventListener('change',preference);document.removeEventListener('visibilitychange',visibility);element.removeEventListener('pointerdown',down);element.removeEventListener('pointermove',move);element.removeEventListener('pointerup',up);element.removeEventListener('pointercancel',up);element.removeEventListener('pointerleave',leave);element.removeEventListener('webglcontextlost',contextLost,true);geometry.dispose();front.dispose();side.dispose();renderer.dispose();renderer.domElement.remove();};
  }
  setup(element).catch(()=>{if(!disposed)setReady(false);});
  return()=>{disposed=true;controller.abort();cleanup();};
 },[]);
 return <div className="logo-sculpture"><div className="logo-canvas" ref={host} tabIndex={0} onKeyDown={e=>{const keys:Record<string,[number,number]>={ArrowLeft:[-.15,0],ArrowRight:[.15,0],ArrowUp:[0,-.1],ArrowDown:[0,.1]};if(keys[e.key]){e.preventDefault();turn.current(...keys[e.key]);}else if(e.key==="Home"){e.preventDefault();reset.current();}}} role="img" aria-label="Logo de CAOS Records en tres dimensiones. Arrastra o usa las flechas del teclado para girarlo."/><img className={`logo-fallback ${ready?'logo-loaded':''}`} src="/logo-white.png" alt={ready?'':'CAOS Records'} width="1080" height="1080"/>{ready&&<div className="sculpture-controls"><span>Arrastra para girar</span><button onClick={()=>{paused.current=!paused.current;setStopped(paused.current);wake.current();}} aria-pressed={stopped}>{stopped?'Activar movimiento':'Pausar'}</button><button onClick={()=>reset.current()}>Restablecer vista</button></div>}</div>;
}
