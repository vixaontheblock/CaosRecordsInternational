"use client";
import {useEffect,useRef,useState} from "react";
export default function Signature(){
 const ref=useRef<HTMLButtonElement>(null);const [visible,setVisible]=useState(false);const [take,setTake]=useState(0);
 useEffect(()=>{const observer=new IntersectionObserver(([entry])=>{if(entry.isIntersecting){setVisible(true);observer.disconnect();}},{threshold:.35});if(ref.current)observer.observe(ref.current);return()=>observer.disconnect();},[]);
 return <button type="button" ref={ref} className={`signature-mark handwritten ${visible?"signature-visible":""}`} aria-label="Volver a dibujar la firma caos con estrella" onClick={()=>setTake(take+1)}><svg key={take} viewBox="0 0 650 240" fill="none" aria-hidden="true">
 <path className="sig-letter sig-c" pathLength="1" d="M149 103C165 64 105 73 82 112C49 166 71 191 109 172C129 163 149 146 167 123"/>
 <path className="sig-letter sig-a" pathLength="1" d="M229 108C223 81 184 104 166 134C146 169 165 181 189 162C204 151 219 129 231 103C214 139 205 171 225 165C242 161 252 145 268 129"/>
 <path className="sig-letter sig-o" pathLength="1" d="M299 104C285 84 257 116 250 140C239 182 270 174 292 143C308 120 311 90 292 98C278 104 294 131 328 115"/>
 <path className="sig-letter sig-s" pathLength="1" d="M389 91C374 73 348 94 329 116C314 134 326 143 349 143C384 144 351 181 320 174C296 167 340 150 378 147C418 143 449 140 478 128"/>
 <path className="sig-star" pathLength="1" d="M478 128L534 114L547 62L560 112L610 108L571 142L588 191L542 164L502 190L512 144L478 128"/>
 <path className="sig-swish" pathLength="1" d="M89 210C205 189 334 186 434 191"/>
 </svg><span>El equipo de CAOS Records</span></button>;
}
