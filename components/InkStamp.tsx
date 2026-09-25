"use client";
import {useEffect,useRef,useState,useId} from 'react';
export default function InkStamp(){
 const ref=useRef<HTMLButtonElement>(null);const [visible,setVisible]=useState(false);const [take,setTake]=useState(0);const id=useId().replace(/:/g,'');
 useEffect(()=>{const observer=new IntersectionObserver(([entry])=>{if(entry.isIntersecting){setVisible(true);observer.disconnect();}},{threshold:.35});if(ref.current)observer.observe(ref.current);return()=>observer.disconnect();},[]);
 return <button ref={ref} type="button" className={`ink-stamp stamp-interactive ${visible?'stamp-visible':''}`} aria-label="Volver a estampar el logo de CAOS Records" onClick={()=>setTake(take+1)}><svg key={take} viewBox="0 0 500 500" aria-hidden="true"><defs><filter id={id}><feTurbulence type="fractalNoise" baseFrequency=".48" numOctaves="3" seed="12" result="grain"/><feColorMatrix in="grain" type="luminanceToAlpha"/><feComponentTransfer><feFuncA type="discrete" tableValues="0 0 1 1 1"/></feComponentTransfer><feComposite in="SourceGraphic" operator="in"/></filter></defs><image href="/logo-black.png" x="20" y="20" width="460" height="460" filter={`url(#${id})`}/></svg></button>;
}
