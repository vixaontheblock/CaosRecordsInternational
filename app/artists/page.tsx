import {pageMetadata} from "@/lib/seo";
import type {Metadata} from "next";
import InnerHero from "@/components/InnerHero";
import ArtistFeature from "@/components/ArtistFeature";
import {artists} from "@/data/artists";
export const metadata:Metadata=pageMetadata('Artistas','Conoce a Forty2 y A.X TOKYO, artistas de CAOS Records. Propuestas, actuaciones y contacto con el equipo.',"/artists");
export default function ArtistsPage(){return <div className="artists-index"><InnerHero label="ARTISTAS Y REPRESENTACIÓN" title="ARTISTAS" accent="" copy="Conoce a los artistas de CAOS y contacta con nuestro equipo para propuestas de actuaciones y colaboraciones."/>{artists.map(artist=><ArtistFeature key={artist.slug} artist={artist}/>)}</div>}
