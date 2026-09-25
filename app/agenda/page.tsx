import {pageMetadata} from '@/lib/seo';
import InnerHero from '@/components/InnerHero';
import EventAgenda from '@/components/EventAgenda';
export const metadata=pageMetadata('Agenda','Actuaciones confirmadas de los artistas de CAOS Records. Fechas, recintos y enlaces de entradas.','/agenda');
export default function AgendaPage(){return <><InnerHero label="EN VIVO" title="AGENDA" accent="" copy="Las próximas fechas, los lugares donde encontrarnos y toda la información para venir."/><EventAgenda/></>}
