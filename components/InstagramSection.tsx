import Image from "next/image";
import { instagram } from "@/lib/site";

export default function InstagramSection() {
  return (
    <section className="bg-[#d8d5cc] text-ink border-b border-black/10 overflow-hidden">
      <div className="max-w-content mx-auto px-5 sm:px-8 py-12 sm:py-16 grid lg:grid-cols-[.7fr_.3fr] gap-10 items-center">
        <div>
          <p className="text-xs uppercase tracking-[.18em] text-ink/45">Follow the movement</p>
          <a href={instagram.url} target="_blank" rel="noreferrer" className="group inline-block mt-5">
            <h2 className="font-display uppercase text-[clamp(4rem,9vw,10rem)] leading-[.82] tracking-[-.035em] group-hover:translate-x-1 transition-transform">{instagram.handle}</h2>
            <p className="mt-6 text-ink/60 max-w-xl">Announcements, artists, releases, live moments and the process of building CAOS as it happens.</p>
          </a>
        </div>
        <div className="relative aspect-square max-w-[360px] justify-self-end w-full opacity-90">
          <Image src="/logo-black.png" alt="CAOS RECORDS" fill sizes="360px" className="object-contain" />
        </div>
      </div>
    </section>
  );
}
