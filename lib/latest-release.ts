import type {Release} from './releases';
export function latestReleaseForArtist(releases:Release[],artistSlug:string){return releases.filter(r=>r.published&&r.artist_slug===artistSlug).sort((a,b)=>(b.created_at||'').localeCompare(a.created_at||'')||a.slug.localeCompare(b.slug))[0]||null;}
