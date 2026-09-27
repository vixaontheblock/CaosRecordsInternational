import Link from 'next/link';
import {publicReleases} from '@/lib/public-releases';
import {latestReleaseForArtist} from '@/lib/latest-release';
export default async function ArtistReleaseBanner({slug,name}:{slug:string;name:string}){
 // La consulta editorial no debe impedir acceder al perfil o a contratación.
 let release;try{release=latestReleaseForArtist(await publicReleases(),slug);}catch{return null;}if(!release)return null;
 return <aside className="artist-release-banner" aria-label={`Último lanzamiento de ${name}`}><Link href={`/lanzamientos/${release.slug}`}><div className="banner-record" aria-hidden="true"><span/><img src={release.cover_url} alt="" width="170" height="170" loading="lazy"/></div><div className="banner-release-copy"><p className="eyebrow">LO ÚLTIMO DE {name.toUpperCase()}</p><h2>{release.title}</h2><p>Disponible en {release.links.length===1?'su plataforma oficial':'tus plataformas favoritas'}.</p></div><span className="banner-release-action">ESCUCHAR LANZAMIENTO</span></Link></aside>
}
