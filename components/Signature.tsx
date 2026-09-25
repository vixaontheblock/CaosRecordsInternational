"use client";
import {useEffect,useRef,useState} from "react";
export default function Signature(){
 const ref=useRef<HTMLButtonElement>(null);const [visible,setVisible]=useState(false);const [take,setTake]=useState(0);
 useEffect(()=>{const observer=new IntersectionObserver(([entry])=>{if(entry.isIntersecting){setVisible(true);observer.disconnect();}},{threshold:.35});if(ref.current)observer.observe(ref.current);return()=>observer.disconnect();},[]);
 return <button type="button" ref={ref} className={`signature-mark handwritten ${visible?"signature-visible":""}`} aria-label="Volver a dibujar la firma caos con estrella" onClick={()=>setTake(take+1)}><svg key={take} viewBox="0 0 700 240" fill="none" aria-hidden="true">
 <path className="sig-letter sig-c" pathLength="1" d="M145 102C160 65 111  75 84 112C48 163 65 187 101 173C123 164 145 143 156 126C163 119 169 115 174 111"/>
 <path className="sig-letter sig-a" pathLength="1" d="M174 111C192 99 198 116 188 133C168 167 181 184 205 164C225 148 239 126 250 103C235 86 207 104 188 133M250 103C238 132 224 172 248 168C268 168 285 146 305 137"/>
 <path className="sig-letter sig-o" pathLength="1" d="M305 137C285 178 311 184 339 161C365 140 385 104 365 105C353 84 320 106 305 137M366 111C381 123 392 133 410 121"/>
 <path className="sig-letter sig-s" pathLength="1" d="M410 121C426 98 455 73 473 94M410 121C397 141 423 143 442 143C468 144 452 165 430 172C408 181 394 174 408 163C437 144 492 146 551 131"/>
 <path className="sig-star" pathLength="1" d="M551 131L591 119L603 77L616 117L660 115L628 143L640 183L604 159L571 180L579 143L551 131"/>
 <path className="sig-swish" pathLength="1" d="M86 207C216 190 381 190 493 195"/>
 </svg><span>El equipo de CAOS Records</span></button>;
}
