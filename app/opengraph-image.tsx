import {ImageResponse} from 'next/og';
import {readFile} from 'node:fs/promises';
import path from 'node:path';
export const runtime='nodejs';
export const dynamic='force-static';
export const alt='CAOS Records — Sello discográfico, representación y contratación';
export const size={width:1200,height:630};
export const contentType='image/png';
export default async function Image(){
 const logo=await readFile(path.join(process.cwd(),'public/logo-white.png'));
 return new ImageResponse(<div style={{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',background:'#080808',color:'#fff',padding:'35px'}}><img src={`data:image/png;base64,${logo.toString('base64')}`} width={400} height={400} alt=""/><div style={{display:'flex',fontSize:28,marginTop:15,letterSpacing:2}}>Sello · Representación · Contratación</div><div style={{display:'flex',fontSize:20,color:'#aaa',marginTop:22}}>Música, identidad y proyectos que crecen con sus artistas.</div></div>,size);
}
