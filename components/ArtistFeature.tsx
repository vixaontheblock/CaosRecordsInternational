import Link from "next/link";
import type {Artist} from "@/data/artists";
export default function ArtistFeature({artist}:{artist:Artist}){return <section className="artist-feature">
 <div className="artist-orb" aria-hidden="true"><div className="artist-orb-type">42</div><div className="artist-orb-line"/></div>
 <div className="artist-feature-copy"><p className="eyebrow">ARTISTAS</p><h2>{artist.name}</h2><p>{artist.genre || "Parte de CAOS Records."}</p><div className="artist-feature-links"><Link className="text-link" href={`/artists/${artist.slug}`}>CONOCER AL ARTISTA</Link><Link className="text-link" href={`/booking?artist=${artist.slug}`}>CONSULTAR DISPONIBILIDAD</Link></div></div>
 </section>}
