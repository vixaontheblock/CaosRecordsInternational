import Link from "next/link";
import Logo3D from "@/components/Logo3D";
import { instagram, officialEmail } from "@/lib/site";

export default function HomePage(){return <>
  <section className="label-cover">
    <div className="cover-meta"><span>Panamá</span><span>Booking / Management / Records</span></div>
    <h1 className="sr-only">CAOS Records — booking, management y sello discográfico</h1>
    <Logo3D/>
    <div className="label-cover-bottom"><p>Representación artística,<br/>música y presentaciones en vivo.</p><a href="#booking" className="text-link">EXPLORAR <span>↓</span></a></div>
  </section>

  <section id="booking" className="home-booking" data-reveal>
    <div className="booking-heading"><p className="eyebrow">PRESENTACIONES EN VIVO</p><h2>Booking.</h2><p className="service-intro">Para promotores, venues y equipos que están preparando su próximo evento.</p><Link href="/booking" className="text-link">ENVIAR UNA PROPUESTA <span>↗</span></Link></div>
    <div className="booking-detail"><h3>El evento empieza<br/>mucho antes del show.</h3><p>Atendemos propuestas de presentaciones, apariciones y colaboraciones con marcas. Cada conversación parte del contexto: el público, la ciudad, la fecha y lo que quieres hacer.</p><p>Con esa información podemos revisar el encaje del talento, la disponibilidad y las necesidades de producción. Las condiciones se acuerdan directamente con cada equipo.</p><div className="event-formats"><span>Clubs</span><span>Festivales</span><span>Eventos privados</span><span>Marcas</span></div><p className="booking-note">Si ya tienes fecha y lugar, inclúyelos junto al presupuesto estimado en tu solicitud.</p></div>
  </section>

  <section className="home-talent">
    <div className="talent-heading" data-reveal><p className="eyebrow">ARTISTAS & MANAGEMENT</p><h2>El proyecto<br/>marca la dirección.</h2></div>
    <div className="talent-details" data-reveal><p className="lead-copy">Booking, management y sello son relaciones distintas. Se pueden trabajar por separado, según el momento y las necesidades del artista.</p><div className="talent-text"><p>El management implica una conversación a largo plazo sobre la carrera, sus decisiones y los proyectos que se quieren desarrollar. Buscamos construir esa relación con el artista y su equipo.</p><p>El roster está en desarrollo. Las incorporaciones se publicarán cuando estén confirmadas, junto con sus perfiles y los servicios de representación correspondientes.</p></div><div className="talent-links"><Link className="text-link" href="/artists">ARTISTAS <span>↗</span></Link><a className="text-link" href={`mailto:${officialEmail}?subject=Proyecto%20art%C3%ADstico`}>PRESENTA TU PROYECTO <span>↗</span></a></div></div>
  </section>

  <section className="home-label">
    <div className="label-artwork" aria-hidden="true"><div className="record-disc"><div><img src="/logo-black.png" alt="" width="140" height="140"/></div></div><div className="record-sleeve"><img src="/logo-white.png" alt="" width="340" height="340"/></div></div>
    <div className="label-details" data-reveal><p className="eyebrow">EL SELLO</p><h2>Records.</h2><p>Un espacio para singles, EPs y colaboraciones. La música, el arte y la dirección del lanzamiento forman parte de la misma conversación.</p><p>No todos los artistas con los que trabajamos tienen que publicar bajo el sello. Cada lanzamiento se plantea según lo que tenga sentido para ese proyecto.</p><div className="catalog-status"><h3>Catálogo en desarrollo</h3><p>Los primeros lanzamientos todavía no están anunciados. Aquí aparecerán la música, las portadas y los enlaces para escucharla.</p></div><Link className="text-link" href="/records">CONOCE EL SELLO <span>↗</span></Link></div>
  </section>

  <section className="home-contact" data-reveal><div><p className="eyebrow">CONTACTO</p><h2>¿Qué estás<br/>preparando?</h2></div><div><p>Para proyectos artísticos, colaboraciones o consultas sobre el sello, escríbenos con el contexto y los enlaces que quieras compartir.</p><a className="contact-mail" href={`mailto:${officialEmail}`}>{officialEmail} ↗</a><a className="text-link" href={instagram.url} target="_blank" rel="noreferrer">@caos.records <span>↗</span></a></div></section>
</>}
