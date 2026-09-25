"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { artists } from "@/data/artists";
import { officialEmail, phone } from "@/lib/site";

const fieldClass = "w-full bg-transparent border-b border-black/25 py-3 text-ink placeholder:text-ink/35 focus:border-ink outline-none transition-colors duration-200";
const labelClass = "block text-[11px] uppercase tracking-[.14em] text-ink/48 mb-1";

export default function BookingForm({directEnabled=false}:{directEnabled?:boolean}) {
  const formRef=useRef<HTMLFormElement>(null);const attempt=useRef<{payload:string;id:string}|null>(null);
  const [sending,setSending]=useState(false);const [status,setStatus]=useState('');
  const prepared=()=>{const form=formRef.current;if(!form||!form.reportValidity())return null;const data=Object.fromEntries(Array.from(new FormData(form).entries()).filter(([key])=>key!=='website').map(([key,value])=>[key,String(value).trim()]));return data;};
  function openAlternative(channel:'email'|'whatsapp') {const data=prepared();if(!data)return;const body=Object.entries(data).filter(([,v])=>v).map(([k,v])=>`${k}: ${v}`).join('\n');const subject=`CAOS — Contratación — ${data.Artista}`;const url=channel==='email'?`mailto:${officialEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`:`${phone.whatsapp}?text=${encodeURIComponent(subject+'\n\n'+body)}`;window.location.href=url;setStatus(channel==='email'?'Solicitud preparada. Envíala desde tu aplicación de correo.':'Solicitud preparada. Revisa el mensaje y envíalo en WhatsApp.');}

  const [selectedArtist,setSelectedArtist]=useState("General / artista por confirmar");
  useEffect(()=>{const slug=new URLSearchParams(window.location.search).get("artist");const artist=artists.find(a=>a.slug===slug);if(artist)setSelectedArtist(artist.name);},[]);
  async function handleSubmit(e:FormEvent<HTMLFormElement>){
    e.preventDefault();if(sending)return;if(!directEnabled){openAlternative('email');return;}
    const fields=prepared();if(!fields)return;const payload=JSON.stringify(fields);if(attempt.current?.payload!==payload)attempt.current={payload,id:crypto.randomUUID()};setSending(true);setStatus('');
    try{const response=await fetch('/api/booking',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({fields,id:attempt.current!.id,website:new FormData(formRef.current!).get('website')})});const result=await response.json();if(!response.ok||!result.ok)throw new Error(result.error||'No pudimos confirmar el envío.');setStatus('Solicitud enviada al equipo. Revisaremos tu propuesta; esto no confirma disponibilidad ni reserva.');}catch(error){setStatus(error instanceof Error?error.message:'No se pudo enviar. Puedes usar correo o WhatsApp.');}finally{setSending(false);}
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-10">
      <input className="form-honey" type="text" maxLength={300} name="website" tabIndex={-1} autoComplete="off" aria-hidden="true"/><fieldset className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
        <legend className="sr-only">Datos de contacto</legend>
        <div><label className={labelClass} htmlFor="fullName">Nombre completo</label><input className={fieldClass} id="fullName" name="Nombre completo" type="text" maxLength={300} required /></div>
        <div><label className={labelClass} htmlFor="company">Empresa / organización</label><input className={fieldClass} id="company" name="Empresa" type="text" maxLength={300} /></div>
        <div><label className={labelClass} htmlFor="email">Correo electrónico</label><input className={fieldClass} id="email" name="Correo electrónico" type="email" maxLength={300} required /></div>
        <div><label className={labelClass} htmlFor="phone">Teléfono / WhatsApp</label><input className={fieldClass} id="phone" name="Teléfono / WhatsApp" type="tel" maxLength={300} /></div>
      </fieldset>

      <fieldset className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
        <legend className="sr-only">Detalles del evento</legend>
        <div>
          <label className={labelClass} htmlFor="artist">Artista</label>
          <select className={fieldClass} id="artist" name="Artista" value={selectedArtist} onChange={e=>setSelectedArtist(e.target.value)}>
            {artists.map((a) => <option key={a.slug} value={a.name}>{a.name}</option>)}
            <option value="General / artista por confirmar">General / artista por confirmar</option>
          </select>
        </div>
        <div><label className={labelClass} htmlFor="eventName">Nombre del evento</label><input className={fieldClass} id="eventName" name="Nombre del evento" type="text" maxLength={300} /></div>
        <div><label className={labelClass} htmlFor="eventType">Tipo de evento</label><input className={fieldClass} id="eventType" name="Tipo de evento" type="text" maxLength={300} placeholder="Sala, festival, privado, marca..." /></div>
        <div><label className={labelClass} htmlFor="eventDate">Fecha del evento</label><input className={fieldClass} id="eventDate" name="Fecha del evento" type="date" /></div>
        <div><label className={labelClass} htmlFor="country">País</label><input className={fieldClass} id="country" name="País" type="text" maxLength={300} required /></div>
        <div><label className={labelClass} htmlFor="city">Ciudad</label><input className={fieldClass} id="city" name="Ciudad" type="text" maxLength={300} required /></div>
        <div><label className={labelClass} htmlFor="venue">Recinto</label><input className={fieldClass} id="venue" name="Recinto" type="text" maxLength={300} /></div>
        <div><label className={labelClass} htmlFor="attendance">Asistencia estimada</label><input className={fieldClass} id="attendance" name="Asistencia estimada" type="text" maxLength={300} /></div>
        <div><label className={labelClass} htmlFor="budget">Presupuesto estimado</label><input className={fieldClass} id="budget" name="Presupuesto estimado" type="text" maxLength={300} /></div>
      </fieldset>

      <div><label className={labelClass} htmlFor="message">Mensaje / detalles de producción</label><textarea className={fieldClass} id="message" name="Mensaje" rows={5} maxLength={5000} /></div>

      <div className="booking-actions"><p>{directEnabled?'Envía tu propuesta al equipo o continúa por correo o WhatsApp.':'Completa los datos y elige correo o WhatsApp. Abriremos la aplicación con tu propuesta preparada para que puedas revisarla y enviarla.'} La solicitud no confirma disponibilidad ni reserva.</p><div>{directEnabled&&<button type="submit" disabled={sending} className="button">{sending?'ENVIANDO…':'ENVIAR SOLICITUD'}</button>}<button type="button" disabled={sending} className="button" onClick={()=>openAlternative('email')}>CONTINUAR POR CORREO</button><button type="button" disabled={sending} className="button" onClick={()=>openAlternative('whatsapp')}>CONTINUAR POR WHATSAPP</button></div><p role="status" aria-live="polite">{status}</p></div>
    </form>
  );
}
