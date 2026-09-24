import type {Metadata} from 'next';
export const siteUrl=(process.env.NEXT_PUBLIC_SITE_URL||'https://caosrecords.vercel.app').replace(/\/$/,'');
export const siteDescription='Sello discográfico independiente, representación artística y contratación de actuaciones. Música, identidad y proyectos que crecen con sus artistas.';
export function pageMetadata(title:string,description:string,path:string):Metadata{
 const socialTitle=path==='/'?'CAOS Records — Música, artistas y escenarios':`${title} — CAOS Records`;
 return {title,description,alternates:{canonical:path},openGraph:{title:socialTitle,description,url:path,siteName:'CAOS Records',locale:'es_PA',type:'website',images:[{url:'/opengraph-image',width:1200,height:630,alt:'CAOS Records — Sello, representación y contratación'}]},twitter:{card:'summary_large_image',title:socialTitle,description,images:['/opengraph-image']}};
}
