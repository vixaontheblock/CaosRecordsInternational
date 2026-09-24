"use client";
import {useState} from "react";
import type {Artist} from "@/data/artists";
export default function ArtistPortrait({artist,profile=false}:{artist:Artist;profile?:boolean}){
 const [failed,setFailed]=useState(false);
 const photo=artist.image&&!failed;
 return <div className={`${profile?'profile-disc':'artist-orb'} ${photo?'artist-portrait-photo':''}`}>
 {photo?<img className="artist-photo" src={artist.image} alt={`Retrato de ${artist.name}`} style={{objectPosition:artist.imagePosition||'center'}} loading={profile?'eager':'lazy'} onError={()=>setFailed(true)}/>:<><span className={profile?'':'artist-orb-type'} aria-hidden="true">{artist.monogram||artist.name}</span>{!profile&&<span className="artist-orb-line" aria-hidden="true"/>}</>}
 </div>;
}
