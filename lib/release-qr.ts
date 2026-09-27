import QRCode from 'qrcode';
import {siteUrl} from './seo';
export function releaseLink(slug:string){if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)||slug.length>80)throw Error('Dirección de lanzamiento no válida.');return `${siteUrl}/lanzamientos/${slug}`;}
export async function releaseQR(slug:string,format:'png'|'svg'){
 const url=releaseLink(slug);const options={errorCorrectionLevel:'M' as const,margin:4,width:1024,color:{dark:'#000000',light:'#ffffff'}};
 return format==='svg'?QRCode.toString(url,{...options,type:'svg'}):QRCode.toBuffer(url,{...options,type:'png'});
}
