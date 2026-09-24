import type { Metadata } from "next";
import {siteUrl,siteDescription,pageMetadata} from "@/lib/seo";
import {officialEmail,phone,instagram} from "@/lib/site";
import { Big_Shoulders_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";

const display = Big_Shoulders_Display({ subsets: ["latin"], weight: ["600", "700", "800", "900"], variable: "--font-display", display: "swap" });
const body = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
 ...pageMetadata("CAOS Records",siteDescription,"/"),
 metadataBase:new URL(siteUrl),
 title:{default:"CAOS Records — Música, artistas y escenarios",template:"%s — CAOS Records"},
 applicationName:"CAOS Records",
 robots:{index:true,follow:true,googleBot:{index:true,follow:true,"max-image-preview":"large"}},
 icons:{icon:"/logo-black.png",apple:"/logo-black.png"},
};
const structuredData={"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":`${siteUrl}/#organization`,name:"CAOS Records",url:siteUrl,logo:`${siteUrl}/logo-black.png`,description:siteDescription,email:officialEmail,telephone:phone.call.replace("tel:",""),sameAs:[instagram.url],contactPoint:{"@type":"ContactPoint",telephone:phone.call.replace("tel:",""),contactType:"Atención al cliente",availableLanguage:"Español"}},{"@type":"WebSite","@id":`${siteUrl}/#website`,url:siteUrl,name:"CAOS Records",inLanguage:"es",publisher:{"@id":`${siteUrl}/#organization`}}]};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="es" className={`${display.variable} ${body.variable}`}><body id="top" className="bg-ink text-paper font-body"><a className="skip-link" href="#main-content">Saltar al contenido</a><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData).replace(/</g,"\\u003c")}}/><Navbar /><main id="main-content">{children}</main><Footer /><Experience /></body></html>;
}
