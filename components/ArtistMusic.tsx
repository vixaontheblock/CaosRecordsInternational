"use client";
import {useState} from "react";
import Link from "next/link";
import type {Artist} from "@/data/artists";
export default function ArtistMusic({artist,compact=false}:{artist:Artist;compact?:boolean}){
 const tracks=compact?artist.releases?.slice(0,3):artist.releases;
 const [active,setActive]=useState(0);if(!tracks?.length)return null;const selected=tracks[active];
 return <section className="artist-music"><div className="music-intro"><p className="eyebrow">LA MÚSICA DE {artist.name.toUpperCase()}</p><h2>Escucha<br/>a Forty2.</h2><p>Canciones y colaboraciones publicadas en su canal oficial.</p><a className="text-link" href={artist.links?.youtube} target="_blank" rel="noreferrer">CANAL OFICIAL</a></div><div className="music-selection"><div className="music-feature"><a className="music-art" href={`https://www.youtube.com/watch?v=${selected.videoId}`} target="_blank" rel="noreferrer" aria-label={`Escuchar ${selected.title} en YouTube`}>{selected.artwork?<img src={selected.artwork} alt={`Imagen de ${selected.title} publicada por Forty2`} loading="lazy"/>:<span className="music-art-fallback">42</span>}<span className="music-art-label">ESCUCHAR</span></a><div><p className="eyebrow">{selected.credit}</p><h3>{selected.title}</h3><p>{selected.duration}</p></div></div><div className="track-list">{tracks.map((track,i)=><button key={track.videoId} type="button" className={i===active?'active':''} onClick={()=>setActive(i)} aria-pressed={i===active}><span>{track.title}<small>{track.credit}</small></span><span>{track.duration}</span></button>)}</div>{compact&&<Link className="text-link all-music" href={`/artists/${artist.slug}`}>MÁS DE FORTY2</Link>}</div></section>
}
