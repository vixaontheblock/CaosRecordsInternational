import type {Metadata} from "next";
import Link from "next/link";
import InnerHero from "@/components/InnerHero";
import ArtistCard from "@/components/ArtistCard";
import {artists} from "@/data/artists";
export const metadata:Metadata={title:"Artistas",description:"Talento, relaciones y dirección artística. Conoce el universo de artistas de CAOS Records."};
export default function ArtistsPage(){return <><InnerHero label="ARTISTAS Y REPRESENTACIÓN" title="ARTISTAS" accent="" copy="Trabajamos con artistas en contratación de actuaciones, representación y proyectos discográficos. Cada relación se define según lo que necesita el proyecto."/>{artists.length>0?<section className="section-shell service-grid">{artists.map((artist,index)=><ArtistCard key={artist.slug} artist={artist} index={index}/>)}</section>:<section className="section-shell inner-split"><div><p className="eyebrow">NUESTRA SELECCIÓN DE ARTISTAS</p><h2>Próximamente,<br/>nuestros artistas.</h2><p className="editorial-copy">Las primeras incorporaciones se anunciarán aquí. Si eres artista, representante o parte de un equipo y compartes nuestra visión, queremos conocer tu proyecto.</p><Link href="/contact" className="button acid mt-8">CONECTA CON CAOS </Link></div><img src="/logo-white.png" alt="CAOS Records" width="380" height="380"/></section>}</>}
