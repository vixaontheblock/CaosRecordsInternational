import {artists} from "@/data/artists";
export const platforms=['Spotify','Apple Music','YouTube','YouTube Music','Deezer','Amazon Music','Tidal','SoundCloud'] as const;
export type Platform=typeof platforms[number];
export type Release={id:string;slug:string;title:string;artist_slug:string;description:string;cover_url:string;links:{platform:Platform;url:string}[];published:boolean;created_at?:string;updated_at?:string};
const hosts:Record<Platform,string[]>= {'Spotify':['open.spotify.com'],'Apple Music':['music.apple.com'],'YouTube':['youtube.com','www.youtube.com','youtu.be'],'YouTube Music':['music.youtube.com'],'Deezer':['deezer.com','www.deezer.com'],'Amazon Music':['music.amazon.com','music.amazon.es'],'Tidal':['tidal.com','www.tidal.com','listen.tidal.com'],'SoundCloud':['soundcloud.com','www.soundcloud.com']};
export function validateRelease(r:Release){
 if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(r.slug)||r.slug.length>80)throw Error('Usa una dirección de hasta 80 caracteres, con letras minúsculas, números y guiones.');
 if(!r.title.trim()||r.title.length>120||r.description.length>600)throw Error('Revisa el título (máximo 120) y la descripción (máximo 600 caracteres).');
 if(!artists.some(a=>a.slug===r.artist_slug))throw Error('Selecciona un artista.');
 if(!isPublicImageUrl(r.cover_url))throw Error('Añade un enlace HTTPS directo y público a una imagen JPG, PNG o WebP.');
 if(!r.cover_url||!r.links.length||r.links.length>8)throw Error('Añade una portada y al menos una plataforma.');
 const seen=new Set();for(const link of r.links){let u:URL;try{u=new URL(link.url);}catch{throw Error('Revisa el enlace de '+link.platform);}if(u.protocol!=='https:'||u.username||u.password||!hosts[link.platform]?.includes(u.hostname)||seen.has(link.platform))throw Error('Enlace o plataforma duplicada no válida: '+link.platform);seen.add(link.platform);}
}
export function coverUrl(url:string){return url;}
export function isPublicImageUrl(value:string){try{const u=new URL(value);return u.protocol==='https:'&&!u.username&&!u.password&&!u.port&&u.hostname.includes('.')&&!/^(localhost|127\.|10\.|192\.168\.|169\.254\.|172\.(1[6-9]|2[0-9]|3[01])\.)/.test(u.hostname)&&!u.hostname.endsWith('.local')&&/\.(png|jpe?g|webp)$/i.test(u.pathname);}catch{return false;}}
