import type {Metadata} from "next";
import Link from "next/link";
import InnerHero from "@/components/InnerHero";
import {officialEmail,instagram} from "@/lib/site";
export const metadata:Metadata={title:"Contacto",description:"Hablemos de música, booking y colaboraciones. Conecta con CAOS Records."};
export default function ContactPage(){return <><InnerHero label="CONTACTO" title="CONTACTO" accent="" copy="Una propuesta, una colaboración o un sonido que tenemos que escuchar. Todo empieza con un mensaje."/><section className="section-shell"><p className="eyebrow">ESCRÍBENOS</p><a className="contact-link" href={`mailto:${officialEmail}`}>{officialEmail} ↗</a><a className="contact-link" href={instagram.url} target="_blank" rel="noreferrer">@caos.records ↗</a><div className="inner-split mt-16"><div><p className="eyebrow">PARA TU PRÓXIMO EVENTO</p><p className="editorial-copy mt-5">¿Tienes fecha, lugar y una idea? Comparte los detalles en nuestro formulario de booking.</p></div><div><Link className="button acid" href="/booking">SOLICITAR BOOKING ↗</Link></div></div></section></>}
