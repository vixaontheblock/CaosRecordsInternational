import type { Metadata } from "next";
import { Big_Shoulders_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";

const display = Big_Shoulders_Display({ subsets: ["latin"], weight: ["600", "700", "800", "900"], variable: "--font-display", display: "swap" });
const body = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body", display: "swap" });

const siteUrl = "https://caosrecords.com";
const title = "CAOS RECORDS — Compañía musical independiente";
const description = "Compañía musical independiente desde Panamá. Artistas, contratación, representación, sello y cultura.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: "%s — CAOS RECORDS" },
  description,
  keywords: ["CAOS RECORDS", "Música en Panamá", "contratación de artistas", "representación artística", "sello independiente", "compañía musical"],
  openGraph: { title, description, url: siteUrl, siteName: "CAOS RECORDS", images: [{ url: "/logo-black.png", width: 1080, height: 1080, alt: "CAOS RECORDS" }], locale: "es_PA", type: "website" },
  twitter: { card: "summary_large_image", title, description, images: ["/logo-black.png"] },
  icons: { icon: "/logo-black.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="es" className={`${display.variable} ${body.variable}`}><body id="top" className="bg-ink text-paper font-body"><a className="skip-link" href="#main-content">Saltar al contenido</a><Navbar /><main id="main-content">{children}</main><Footer /><Experience /></body></html>;
}
