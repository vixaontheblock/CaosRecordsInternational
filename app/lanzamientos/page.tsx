import Link from 'next/link';
import {publicReleases} from '@/lib/public-releases';
import {coverUrl} from '@/lib/releases';
import {pageMetadata} from '@/lib/seo';
import {artists} from '@/data/artists';
export const dynamic='force-dynamic';
export const metadata=pageMetadata('Lanzamientos','Música de CAOS Records. Elige tu plataforma y escucha cada lanzamiento.','/lanzamientos');
export default async function Page(){const releases=await publicReleases();return <section className="release-index"><p className="eyebrow">EL CATÁLOGO</p><h1>Lanzamientos.</h1>{releases.length?<div className="release-grid">{releases.map(r=><Link key={r.id} href={`/lanzamientos/${r.slug}`}><img src={coverUrl(r.cover_url)} alt={`Portada de ${r.title}`} width="600" height="600" loading="lazy"/><h2>{r.title}</h2><p>{artists.find(a=>a.slug===r.artist_slug)?.name}</p><span>ESCUCHAR</span></Link>)}</div>:<p>Los próximos lanzamientos aparecerán aquí cuando sean anunciados.</p>}</section>}
