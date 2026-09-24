"use client";

import { FormEvent } from "react";
import { artists } from "@/data/artists";
import { officialEmail } from "@/lib/site";

const fieldClass = "w-full bg-transparent border-b border-black/25 py-3 text-ink placeholder:text-ink/35 focus:border-ink outline-none transition-colors duration-200";
const labelClass = "block text-[11px] uppercase tracking-[.14em] text-ink/48 mb-1";

export default function BookingForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const entries = Array.from(form.entries())
      .filter(([, value]) => String(value).trim())
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");

    const artist = String(form.get("Artista") || "Consulta general");
    const subject = `CAOS Booking — ${artist}`;
    window.location.href = `mailto:${officialEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(entries)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <fieldset className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
        <legend className="sr-only">Datos de contacto</legend>
        <div><label className={labelClass} htmlFor="fullName">Nombre completo</label><input className={fieldClass} id="fullName" name="Nombre completo" type="text" required /></div>
        <div><label className={labelClass} htmlFor="company">Empresa / organización</label><input className={fieldClass} id="company" name="Empresa" type="text" /></div>
        <div><label className={labelClass} htmlFor="email">Email</label><input className={fieldClass} id="email" name="Email" type="email" required /></div>
        <div><label className={labelClass} htmlFor="phone">Teléfono / WhatsApp</label><input className={fieldClass} id="phone" name="Teléfono / WhatsApp" type="tel" /></div>
      </fieldset>

      <fieldset className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
        <legend className="sr-only">Detalles del evento</legend>
        <div>
          <label className={labelClass} htmlFor="artist">Artista</label>
          <select className={fieldClass} id="artist" name="Artista" defaultValue="General / artista por confirmar">
            {artists.map((a) => <option key={a.slug} value={a.name}>{a.name}</option>)}
            <option value="General / artista por confirmar">General / artista por confirmar</option>
          </select>
        </div>
        <div><label className={labelClass} htmlFor="eventName">Nombre del evento</label><input className={fieldClass} id="eventName" name="Nombre del evento" type="text" /></div>
        <div><label className={labelClass} htmlFor="eventType">Tipo de evento</label><input className={fieldClass} id="eventType" name="Tipo de evento" type="text" placeholder="Club, festival, privado, marca..." /></div>
        <div><label className={labelClass} htmlFor="eventDate">Fecha del evento</label><input className={fieldClass} id="eventDate" name="Fecha del evento" type="date" /></div>
        <div><label className={labelClass} htmlFor="country">País</label><input className={fieldClass} id="country" name="País" type="text" required /></div>
        <div><label className={labelClass} htmlFor="city">Ciudad</label><input className={fieldClass} id="city" name="Ciudad" type="text" required /></div>
        <div><label className={labelClass} htmlFor="venue">Recinto</label><input className={fieldClass} id="venue" name="Recinto" type="text" /></div>
        <div><label className={labelClass} htmlFor="attendance">Asistencia estimada</label><input className={fieldClass} id="attendance" name="Asistencia estimada" type="text" /></div>
        <div><label className={labelClass} htmlFor="budget">Presupuesto estimado</label><input className={fieldClass} id="budget" name="Presupuesto estimado" type="text" /></div>
      </fieldset>

      <div><label className={labelClass} htmlFor="message">Mensaje / detalles de producción</label><textarea className={fieldClass} id="message" name="Mensaje" rows={5} /></div>

      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 border-t border-black/15 pt-7">
        <p className="text-xs text-ink/48 max-w-xl leading-relaxed">Este formulario abre tu aplicación de correo con la solicitud preparada para {officialEmail}. Debes enviarla desde tu correo. La solicitud no confirma disponibilidad ni reserva.</p>
        <button type="submit" className="shrink-0 border border-ink px-7 py-4 text-xs uppercase tracking-[.16em] hover:bg-ink hover:text-paper transition-colors">Preparar correo ↗</button>
      </div>
    </form>
  );
}
