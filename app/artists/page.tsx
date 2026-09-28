import Link from "next/link";
import {pageMetadata} from "@/lib/seo";
import type {Metadata} from "next";
import InnerHero from "@/components/InnerHero";
import ArtistRoster from "@/components/ArtistRoster";
import {artists} from "@/data/artists";
export const metadata:Metadata=pageMetadata('Artistas','Conoce a Forty2, A.X TOKYO y Zendo, artistas de CAOS Records. Propuestas, actuaciones y contacto con el equipo.',"/artists");
export default function ArtistsPage(){return <div className="artists-index"><InnerHero label="ARTISTAS Y REPRESENTACIÓN" title="ARTISTAS" accent="" copy="Voces y proyectos con identidad propia. Explora los artistas y el nuevo espacio para DJs; habla con el equipo sobre actuaciones y colaboraciones."/><ArtistRoster/><div className="artists-more"><Link href="/gallery" className="text-link">EXPLORAR LA GALERÍA</Link><Link href="/agenda" className="text-link">VER AGENDA</Link></div></div>}
