import Link from 'next/link';
import BrokenRecord from '@/components/BrokenRecord';
export default function NotFound(){return <section className="lost-track"><div className="lost-track-copy"><p className="eyebrow">ERROR 404 · PISTA NO ENCONTRADA</p><h1>Se rompió<br/>el silencio.</h1><p>Esta página no existe o cambió de dirección. El disco todavía tiene arreglo.</p><div className="lost-track-links"><Link className="button" href="/">VOLVER AL INICIO</Link><Link className="text-link" href="/lanzamientos">BUSCAR MÚSICA</Link></div></div><BrokenRecord/></section>}
