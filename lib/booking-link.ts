import {phone} from './site';
export function artistBookingUrl(name:string){
 const message=`Hola, equipo de CAOS Records. Me gustaría consultar la disponibilidad de ${name} para una actuación.\n\nFecha del evento:\nCiudad y país:\nRecinto:\nTipo de evento:\nAsistencia estimada:\nPresupuesto previsto:\n\nMi nombre y organización:`;
 return `${phone.whatsapp}?text=${encodeURIComponent(message)}`;
}
