export const PRIVACY_VERSION='2026-09-26';
export const STORAGE_KEY='caos-privacy-v1';
export const MAX_AGE=180*24*60*60*1000;
export function readPreference(raw:string|null,now=Date.now()):boolean|null {
 try {const value=JSON.parse(raw||'null');return value?.version===PRIVACY_VERSION && typeof value.media==='boolean' && typeof value.savedAt==='number' && value.savedAt<=now && now-value.savedAt<MAX_AGE ? value.media:null;}catch{return null;}
}
