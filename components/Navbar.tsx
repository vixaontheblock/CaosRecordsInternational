"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [["/artists","ARTISTAS"],["/records","SELLO"],["/about","NOSOTROS"],["/contact","CONTACTO"]];
export default function Navbar(){
 const [open,setOpen]=useState(false); const path=usePathname(); const toggle=useRef<HTMLButtonElement>(null); const menu=useRef<HTMLElement>(null);
 useEffect(()=>setOpen(false),[path]);
 useEffect(()=>{if(!open)return; const old=document.body.style.overflow; document.body.style.overflow='hidden'; const key=(e:KeyboardEvent)=>{if(e.key==='Escape'){setOpen(false);toggle.current?.focus();} if(e.key==='Tab'){const els=[toggle.current,...Array.from(menu.current?.querySelectorAll<HTMLAnchorElement>('a')||[])].filter(Boolean) as HTMLElement[];const first=els[0],last=els[els.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}};document.addEventListener('keydown',key);return()=>{document.body.style.overflow=old;document.removeEventListener('keydown',key);};},[open]);
 return <header className="site-header"><Link href="/" className="brand-link" aria-label="CAOS Records — inicio"><img src="/logo-white.png" width="76" height="76" alt="CAOS Records"/></Link><nav className="desktop-nav" aria-label="Navegación principal">{links.map(([href,label])=><Link href={href} key={href} aria-current={path===href?'page':undefined}>{label}</Link>)}</nav><Link href="/booking" className="nav-booking">CONTRATAR</Link><button ref={toggle} className="menu-toggle" aria-label={open?'Cerrar menú':'Abrir menú'} aria-expanded={open} aria-controls="mobile-nav" onClick={()=>setOpen(!open)}><span aria-hidden="true" className={`menu-bars ${open?"is-open":""}`}><i/><i/></span></button>{open&&<nav ref={menu} className="mobile-nav" id="mobile-nav" aria-label="Navegación móvil">{[...links,["/booking","CONTRATAR"]].map(([href,label])=><Link onClick={()=>setOpen(false)} key={href} href={href}>{label}</Link>)}</nav>}</header>;
}
