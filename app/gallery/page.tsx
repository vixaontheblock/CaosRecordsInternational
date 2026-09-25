import {pageMetadata} from '@/lib/seo';
import InnerHero from '@/components/InnerHero';
import PhotoGallery from '@/components/PhotoGallery';
export const metadata=pageMetadata('Galería','El archivo visual de CAOS Records. Fotografías y retratos de Forty2 y A.X TOKYO.','/gallery');
export default function GalleryPage(){return <><InnerHero label="ARCHIVO VISUAL" title="GALERÍA" accent="" copy="Una mirada a las personas detrás de la música."/><PhotoGallery/></>}
