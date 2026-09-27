import {publicRelease} from '@/lib/public-releases';
import {releaseQR} from '@/lib/release-qr';
export const runtime='nodejs';export const dynamic='force-dynamic';
export async function GET(request:Request,{params}:{params:{slug:string}}){
 const headers={'Cache-Control':'no-store','X-Content-Type-Options':'nosniff','X-Robots-Tag':'noindex'};
 if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(params.slug)||params.slug.length>80)return new Response('Lanzamiento no encontrado.',{status:404,headers});
 try{const release=await publicRelease(params.slug);if(!release)return new Response('Lanzamiento no encontrado.',{status:404,headers});const format=new URL(request.url).searchParams.get('format')==='svg'?'svg':'png';const qr=await releaseQR(release.slug,format);return new Response(typeof qr==='string'?qr:new Uint8Array(qr),{headers:{...headers,'Content-Type':format==='svg'?'image/svg+xml':'image/png','Content-Disposition':`${new URL(request.url).searchParams.has('download')?'attachment':'inline'}; filename="caos-${release.slug}-qr.${format}"`}});}catch{return new Response('No pudimos generar el QR. Inténtalo de nuevo.',{status:503,headers});}
}
