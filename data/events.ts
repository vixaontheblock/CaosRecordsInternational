export type LiveEvent={id:string;title:string;artistSlug:string;startsAt:string;venue:string;city:string;ticketUrl?:string;status:'confirmed'|'sold-out'|'cancelled'};
// Añadir solo actuaciones confirmadas. startsAt debe incluir zona horaria.
// Ejemplo de formato (sin publicar): 2026-12-12T20:00:00-05:00
export const events:LiveEvent[]=[];
