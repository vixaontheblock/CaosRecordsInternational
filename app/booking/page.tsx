import {pageMetadata} from "@/lib/seo";
import type { Metadata } from "next";
import InnerHero from "@/components/InnerHero";
import BookingForm from "@/components/BookingForm";
import { officialEmail } from "@/lib/site";
export const metadata:Metadata=pageMetadata('Contratación','Conecta tu próximo evento con CAOS Records. Solicitudes de contratación, festivales y experiencias en vivo.',"/booking");
export const dynamic="force-dynamic";
export default function BookingPage(){return <><InnerHero label="CONTRATACIÓN" title="EN VIVO" accent="" copy="Una voz en el escenario o una propuesta para la cabina. Comparte el formato, el lugar y la producción que tienes en mente."/><section className="section-shell light-section"><div className="booking-form-grid"><aside><h2>Cuéntanos<br/>sobre tu evento.</h2><p>Comparte la fecha, el lugar y el contexto de tu evento. Con esa información podemos conversar sobre disponibilidad, producción y presupuesto. Para cabina recibimos consultas generales; todavía no hemos anunciado DJs.</p><a href={`mailto:${officialEmail}`}>{officialEmail} </a></aside><BookingForm directEnabled={Boolean(process.env.RESEND_API_KEY && process.env.BOOKING_FROM_EMAIL)}/></div></section></>}
