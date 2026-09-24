"use client";
import { CSSProperties, useEffect, useRef, useState } from "react";
export default function RecordStack(){
 const ref=useRef<HTMLButtonElement>(null);const [spread,setSpread]=useState(false);
 useEffect(()=>{const el=ref.current;if(!el)return;const reduced=matchMedia('(prefers-reduced-motion: reduce)');let frame=0;
 const update=()=>{frame=0;if(reduced.matches)return;const rect=el.getBoundingClientRect();if(rect.bottom<0||rect.top>innerHeight)return;const progress=Math.max(-1,Math.min(1,(innerHeight/2-(rect.top+rect.height/2))/innerHeight));el.style.setProperty('--drift',`${progress*24}deg`);};
 const onScroll=()=>{if(!frame)frame=requestAnimationFrame(update);};update();addEventListener('scroll',onScroll,{passive:true});return()=>{removeEventListener('scroll',onScroll);cancelAnimationFrame(frame);};},[]);
 return <button ref={ref} type="button" className={`disc-stack ${spread?'spread':''}`} onClick={()=>setSpread(!spread)} aria-label={spread?'Juntar la pila de discos':'Separar la pila de discos'} aria-pressed={spread}>
  <span className="stack-shadow" aria-hidden="true"/>
  <span className="stack-assembly" aria-hidden="true">{Array.from({length:5},(_,i)=><span key={i} className="stack-disc" style={{'--i':i} as CSSProperties}><span className="disc-grooves"/><span className="stack-label"><img src={i%2?'/logo-white.png':'/logo-black.png'} alt="" width="100" height="100"/></span><span className="spindle-hole"/></span>)}</span>
 </button>;
}
