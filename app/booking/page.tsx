import type { Metadata } from "next";
import InnerHero from "@/components/InnerHero";
import BookingForm from "@/components/BookingForm";
import { officialEmail } from "@/lib/site";
export const metadata: Metadata = {title:"Contratación",description:"Conecta tu próximo evento con CAOS Records. Solicitudes de contratación, festivales y experiencias en vivo."};
export default function BookingPage(){return <><InnerHero label="CONTRATACIÓN" title="EN VIVO" accent="" copy="Para presentaciones, festivales, eventos privados y colaboraciones con marcas. Envíanos los detalles de tu propuesta."/><section className="section-shell light-section"><div className="booking-form-grid"><aside><h2>Cuéntanos<br/>sobre tu evento.</h2><p>Comparte la fecha, el lugar y el contexto de tu evento. Con esa información podemos conversar sobre disponibilidad, producción y presupuesto.</p><a href={`mailto:${officialEmail}`}>{officialEmail} </a></aside><BookingForm/></div></section></>}
