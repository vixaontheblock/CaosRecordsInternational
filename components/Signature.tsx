"use client";
import {useEffect,useRef,useState} from "react";
export default function Signature(){
 const ref=useRef<HTMLDivElement>(null);const [visible,setVisible]=useState(false);
 useEffect(()=>{const observer=new IntersectionObserver(([entry])=>{if(entry.isIntersecting){setVisible(true);observer.disconnect();}},{threshold:.35});if(ref.current)observer.observe(ref.current);return()=>observer.disconnect();},[]);
 return <div ref={ref} className={`signature-mark ${visible?"signature-visible":""}`} aria-hidden="true"><svg viewBox="0 0 640 230" fill="none"><path className="signature-stroke" pathLength="1" d="M160 68C204 5 80 28 57 105C31 195 150 167 217 90C167 137 172 178 208 155L275 72C245 102 225 163 264 150C300 139 349 81 326 89C297 105 293 147 319 146C349 145 382 105 394 89C365 136 390 138 414 120C466 80 506 57 492 82C479 104 446 128 432 148C473 133 522 123 573 128"/><path className="signature-underline" pathLength="1" d="M98 195C226 163 407 158 579 167M440 181L531 184"/></svg><span>El equipo de CAOS Records</span></div>;
}
