import {notFound} from 'next/navigation';
import {publicRelease} from '@/lib/public-releases';
import {coverUrl} from '@/lib/releases';
import {pageMetadata} from '@/lib/seo';
import {artists} from '@/data/artists';
import ReleaseCard from '@/components/ReleaseCard';
import ShareRelease from '@/components/ShareRelease';
export const dynamic='force-dynamic';
export async function generateMetadata({params}:{params:{slug:string}}){const r=await publicRelease(params.slug);if(!r)return {title:'Lanzamiento no disponible',robots:{index:false}};const artist=artists.find(a=>a.slug===r.artist_slug)?.name;const m=pageMetadata(`${r.title} · ${artist}`,r.description||`Escucha ${r.title} de ${artist} en tu plataforma favorita.`,`/lanzamientos/${r.slug}`);return {...m,openGraph:{...m.openGraph,images:[{url:coverUrl(r.cover_url),alt:`Portada de ${r.title}`}]},twitter:{...m.twitter,images:[coverUrl(r.cover_url)]}};}
export default async function Page({params}:{params:{slug:string}}){const r=await publicRelease(params.slug);if(!r)notFound();return <section className="release-landing"><ReleaseCard release={r}/><ShareRelease title={r.title}/></section>}
