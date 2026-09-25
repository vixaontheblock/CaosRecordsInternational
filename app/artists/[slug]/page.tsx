import {pageMetadata} from "@/lib/seo";
import type {Metadata} from "next";
import Link from "next/link";
import {notFound} from "next/navigation";
import {artists} from "@/data/artists";
import ArtistPortrait from "@/components/ArtistPortrait";
import PhotoGallery from "@/components/PhotoGallery";
import EventAgenda from "@/components/EventAgenda";
import ArtistMusic from "@/components/ArtistMusic";
export function generateStaticParams(){return artists.map(a=>({slug:a.slug}));}
export function generateMetadata({params}:{params:{slug:string}}):Metadata{const artist=artists.find(a=>a.slug===params.slug);return artist?pageMetadata(artist.name,`Conoce a ${artist.name}, artista de CAOS Records. Escucha sus canciones, descubre sus colaboraciones y consulta propuestas de actuaciones.`, `/artists/${artist.slug}`):{};}
const labels:Record<string,string>={spotify:'Spotify',appleMusic:'Apple Music',youtube:'YouTube',instagram:'Instagram'};
export default function ArtistPage({params}:{params:{slug:string}}){const artist=artists.find(a=>a.slug===params.slug);if(!artist)notFound();const links=Object.entries(artist.links??{}).filter(([,value])=>Boolean(value));return <>
 <section className={`artist-profile-hero ${artist.name.length>8?"artist-profile-long":""}`}><Link href="/artists" className="text-link">ARTISTAS</Link><div className="artist-profile-title"><h1>{artist.name}</h1><ArtistPortrait artist={artist} profile/></div><p>{artist.genre?`${artist.genre} · `:""}Artista de CAOS Records.</p></section>
 <section className="artist-profile-info"><div><p className="eyebrow">EL ARTISTA</p><h2>{artist.name}.</h2><p>{artist.bio}</p>{links.length>0?<div className="artist-socials">{links.map(([key,url])=><a href={url} key={key} target="_blank" rel="noreferrer" className="text-link">{labels[key]}</a>)}</div>:null}</div><div><p className="eyebrow">ACTUACIONES Y COLABORACIONES</p><h2>Contacta<br/>con el equipo.</h2><p>Para proponer una actuación, comparte la fecha, el lugar, el formato del evento y el presupuesto. Para colaboraciones, cuéntanos la idea y los participantes.</p><Link href={`/booking?artist=${artist.slug}`} className="text-link">CONSULTAR DISPONIBILIDAD</Link></div></section>
 <ArtistMusic artist={artist}/><PhotoGallery artistSlug={artist.slug}/><section className="press-section"><div><p className="eyebrow">PRENSA Y PROMOTORES</p><h2>El proyecto,<br/>a mano.</h2><p>Presentación, fotografía original, canciones y contacto en un dossier descargable. Incluye una versión lista para imprimir o guardar como PDF desde el navegador.</p></div><div><a className="text-link" href={`/dossiers/${artist.slug}.zip`} download>DESCARGAR DOSSIER</a><a className="text-link" href={`/dossiers/${artist.slug}.html`} target="_blank" rel="noreferrer">VER DOSSIER</a></div></section><EventAgenda artistSlug={artist.slug}/></>}
