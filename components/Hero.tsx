import Image from "next/image";
import Link from "next/link";
import { foundedYear, instagram, location } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden caos-spotlight border-b border-white/10 pt-20">
      <div className="max-w-content mx-auto min-h-[88svh] px-5 sm:px-8 grid lg:grid-cols-[.82fr_1.18fr] gap-8 lg:gap-0 items-center">
        <div className="relative z-10 py-14 lg:py-24 max-w-2xl">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs uppercase tracking-[0.2em] text-smoke mb-8">
            <span>{location}</span><span className="w-10 h-px bg-white/20"/><span>{foundedYear}</span>
          </div>
          <p className="font-display uppercase text-[clamp(3.7rem,8vw,8.8rem)] leading-[.82] tracking-[-.035em] text-balance">
            Built around artists. Built to move.
          </p>
          <p className="mt-8 max-w-xl text-lg sm:text-xl text-paper/72 leading-relaxed">
            CAOS RECORDS is an independent music company developing relationships across booking, management, records and culture — from Panama outward.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/about" className="border border-paper px-6 py-3 text-xs uppercase tracking-[.16em] hover:bg-paper hover:text-ink transition-colors">Enter CAOS</Link>
            <Link href="/booking" className="border border-white/20 px-6 py-3 text-xs uppercase tracking-[.16em] text-paper/75 hover:border-paper hover:text-paper transition-colors">Booking inquiry</Link>
          </div>
        </div>

        <div className="relative min-h-[48vh] lg:min-h-[88svh] flex items-center justify-center lg:justify-end">
          <div className="absolute inset-y-[8%] -right-[24%] lg:-right-[16%] w-[128%] lg:w-[112%] opacity-95">
            <Image src="/logo-white.png" alt="CAOS RECORDS globe logo" fill priority sizes="(max-width: 1024px) 120vw, 62vw" className="object-contain object-center logo-ghost" />
          </div>
          <div className="absolute left-0 bottom-8 lg:bottom-12 text-[11px] uppercase tracking-[.2em] text-paper/45 hidden sm:block">
            Music / Artists / Culture / Live
          </div>
        </div>
      </div>
      <div className="max-w-content mx-auto px-5 sm:px-8 py-5 border-t border-white/10 flex items-center justify-between text-[11px] uppercase tracking-[.16em] text-smoke">
        <span>Independent music company</span>
        <a href={instagram.url} target="_blank" rel="noreferrer" className="hover:text-paper transition-colors">{instagram.handle}</a>
      </div>
    </section>
  );
}
