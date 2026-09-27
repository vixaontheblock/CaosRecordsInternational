import 'server-only';
import {createHmac,timingSafeEqual,createHash,randomBytes} from 'node:crypto';
import {cookies} from 'next/headers';
export const cookieName='caos-admin';
export function adminConfigured(){return (process.env.ADMIN_PASSWORD?.length||0)>=16&&(process.env.ADMIN_SESSION_SECRET?.length||0)>=32;}
export function matchesPassword(value:string){const digest=(v:string)=>createHash('sha256').update(v).digest();return adminConfigured()&&timingSafeEqual(digest(value),digest(process.env.ADMIN_PASSWORD!));}
function sign(value:string){return createHmac('sha256',process.env.ADMIN_SESSION_SECRET!).update(value).digest('base64url');}
export function sessionToken(){const payload=Buffer.from(JSON.stringify({expires:Date.now()+8*3600000,nonce:randomBytes(16).toString('hex')})).toString('base64url');return payload+'.'+sign(payload);}
export function validSession(value:string){if(!adminConfigured())return false;try{const [payload,signature]=value.split('.');const expected=sign(payload);return signature.length===expected.length&&timingSafeEqual(Buffer.from(signature),Buffer.from(expected))&&JSON.parse(Buffer.from(payload,'base64url').toString()).expires>Date.now();}catch{return false;}}
export function isAdmin(){return validSession(cookies().get(cookieName)?.value||'');}
export function sameOrigin(request:Request){try{return new URL(request.headers.get('origin')||'').origin===new URL(request.url).origin;}catch{return false;}}
