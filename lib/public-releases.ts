import 'server-only';
import {cache} from 'react';
import {listReleases,sheetsConfigured} from './sheets';
export const publicReleases=cache(async()=>{if(!sheetsConfigured())return [];return (await listReleases()).filter(r=>r.published).sort((a,b)=>(b.created_at||'').localeCompare(a.created_at||''));});
export const publicRelease=cache(async(slug:string)=>(await publicReleases()).find(r=>r.slug===slug)||null);
