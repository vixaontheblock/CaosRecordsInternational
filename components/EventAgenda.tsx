"use client";
import {useEffect,useState} from 'react';
import Link from 'next/link';
import {events} from '@/data/events';
import {artists} from '@/data/artists';
export default function EventAgenda({artistSlug}:{artistSlug?:string}){
 const [filter,setFilter]=useState(artistSlug||'all');const [now,setNow]=useState<number|null>(null);
 useEffect(()=>{setNow(Date.now());const id=setInterval(()=>setNow(Date.now()),60000);return()=>clearInterval(id);},[]);
 const upcoming=events.filter(e=>(filter==='all'||e.artistSlug===filter)&&(now===null||new Date(e.startsAt).getTime()>=now)).sort((a,b)=>Date.parse(a.startsAt)-Date.parse(b.startsAt));
 return <section className="event-agenda"><div className="gallery-heading"><div><p className="eyebrow">PRÓXIMAS ACTUACIONES</p><h2>Nos vemos en vivo.</h2></div>{!artistSlug&&<div className="gallery-filters">{[{slug:'all',name:'Todos'},...artists].map(a=><button key={a.slug} aria-pressed={filter===a.slug} onClick={()=>setFilter(a.slug)}>{a.name}</button>)}</div>}</div>
 {upcoming.length?<div className="event-list">{upcoming.map(e=><article key={e.id}><time dateTime={e.startsAt}>{new Intl.DateTimeFormat('es',{day:'2-digit',month:'short',year:'numeric',timeZone:'America/Panama'}).format(new Date(e.startsAt))}</time><div><h3>{e.title}</h3><p>{artists.find(a=>a.slug===e.artistSlug)?.name} · {e.venue} · {e.city}</p><p>{new Intl.DateTimeFormat('es',{hour:'2-digit',minute:'2-digit',timeZone:'America/Panama'}).format(new Date(e.startsAt))} · Hora de Panamá</p></div>{e.status==='cancelled'?<span>Cancelado</span>:e.status==='sold-out'?<span>Agotado</span>:e.ticketUrl?<a href={e.ticketUrl} target="_blank" rel="noopener noreferrer" className="text-link">ENTRADAS</a>:<span>Información próximamente</span>}</article>)}</div>:<div className="agenda-empty"><span className="ticket-outline" aria-hidden="true">EN<br/>VIVO</span><div><h3>La próxima fecha<br/>se anuncia aquí.</h3><p>Todavía no hay actuaciones confirmadas para mostrar. Si quieres llevar nuestra música a tu evento, cuéntanos tu propuesta.</p><Link className="text-link" href={artistSlug?`/booking?artist=${artistSlug}`:'/booking'}>PROPONER UNA ACTUACIÓN</Link></div></div>}
 </section>;
}
