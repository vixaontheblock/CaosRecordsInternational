import {NextResponse} from 'next/server';
import {officialEmail} from '@/lib/site';
import {artists} from '@/data/artists';
import {siteUrl} from '@/lib/seo';
export const runtime='nodejs';
const allowed=['Nombre completo','Empresa','Correo electrónico','Teléfono / WhatsApp','Artista','Nombre del evento','Tipo de evento','Fecha del evento','País','Ciudad','Recinto','Asistencia estimada','Presupuesto estimado','Mensaje'];
// Protección por instancia; un despliegue con mucho tráfico debe usar un límite compartido.
const attempts=new Map<string,{count:number;until:number}>();
export async function POST(request:Request){
 const origin=request.headers.get('origin');const own=new URL(request.url);let allowedOrigin=false;
 try{const source=new URL(origin||'');allowedOrigin=source.origin===new URL(siteUrl).origin||source.origin===own.origin||(source.host===request.headers.get('host')&&source.protocol===own.protocol);}catch{}
 if(!allowedOrigin)return NextResponse.json({error:'Solicitud no permitida.'},{status:403});
 if(!request.headers.get('content-type')?.includes('application/json'))return NextResponse.json({error:'Formato no válido.'},{status:415});
 const raw=await request.text();if(raw.length>16000)return NextResponse.json({error:'La solicitud es demasiado extensa.'},{status:413});
 let body:Record<string,unknown>;try{body=JSON.parse(raw);}catch{return NextResponse.json({error:'Solicitud no válida.'},{status:400});}
 if(!body||typeof body!=='object'||Array.isArray(body)||body.website)return NextResponse.json({error:'No se pudo validar la solicitud.'},{status:400});
 const fields=body.fields;if(!fields||typeof fields!=='object'||Array.isArray(fields))return NextResponse.json({error:'Faltan los datos de la solicitud.'},{status:400});
 const data:Record<string,string>={};for(const [key,value] of Object.entries(fields)){if(!allowed.includes(key)||typeof value!=='string'||value.length>(key==='Mensaje'?5000:300))return NextResponse.json({error:'Revisa la extensión de los campos.'},{status:400});data[key]=value.trim();}
 for(const key of ['Nombre completo','Correo electrónico','País','Ciudad'])if(!data[key])return NextResponse.json({error:'Completa nombre, correo, país y ciudad.'},{status:400});
 if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data['Correo electrónico'])||/[\r\n]/.test(data['Correo electrónico']))return NextResponse.json({error:'Revisa el correo electrónico.'},{status:400});
 if(![...artists.map(a=>a.name),'General / artista por confirmar'].includes(data.Artista))return NextResponse.json({error:'Selecciona un artista válido.'},{status:400});
 if(typeof body.id!=='string'||!/^[a-f0-9-]{36}$/.test(body.id))return NextResponse.json({error:'Identificador no válido.'},{status:400});
 if(!process.env.RESEND_API_KEY||!process.env.BOOKING_FROM_EMAIL)return NextResponse.json({error:'El envío directo no está disponible. Puedes usar correo o WhatsApp.'},{status:503});
 const now=Date.now();for(const [key,value]of attempts)if(value.until<now)attempts.delete(key);
 const ip=request.headers.get('x-forwarded-for')?.split(',')[0].trim()||'unknown';const limit=attempts.get(ip)||{count:0,until:now+600000};if(limit.count>=5)return NextResponse.json({error:'Espera unos minutos antes de volver a enviar.'},{status:429});if(attempts.size>1000)attempts.delete(attempts.keys().next().value!);limit.count++;attempts.set(ip,limit);
 try{const response=await fetch('https://api.resend.com/emails',{method:'POST',headers:{Authorization:`Bearer ${process.env.RESEND_API_KEY}`,'Content-Type':'application/json','Idempotency-Key':`booking/${body.id}`},body:JSON.stringify({from:process.env.BOOKING_FROM_EMAIL,to:[officialEmail],reply_to:data['Correo electrónico'],subject:`CAOS — Contratación — ${data.Artista}`,text:allowed.filter(k=>data[k]).map(k=>`${k}: ${data[k]}`).join('\n\n')}),signal:AbortSignal.timeout(12000)});if(!response.ok)throw new Error('delivery');const result=await response.json();if(!result.id)throw new Error('delivery');return NextResponse.json({ok:true});}catch{return NextResponse.json({error:'No pudimos confirmar el envío. Conservamos tus datos en el formulario; puedes reintentar o usar correo o WhatsApp.'},{status:502});}
}
