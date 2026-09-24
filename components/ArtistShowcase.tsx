import Link from "next/link";
import { artists } from "@/data/artists";
import ArtistCard from "./ArtistCard";

export default function ArtistShowcase({ limit, title = "Artists" }: { limit?: number; title?: string }) {
  const list = limit ? artists.slice(0, limit) : artists;

  return (
    <section className="bg-[#11110f] text-paper border-b border-white/10">
      <div className="max-w-content mx-auto px-5 sm:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-[.34fr_.66fr] gap-10 lg:gap-16 mb-12">
          <p className="text-xs uppercase tracking-[.18em] text-smoke">Roster / Selected talent</p>
          <div>
            <h2 className="font-display uppercase text-display-lg tracking-[-.025em]">{title}</h2>
            <p className="mt-5 max-w-2xl text-paper/60 text-lg leading-relaxed">
              CAOS is building a selective roster across booking, management and records. Public profiles will appear here only when each relationship and its assets are ready to announce.
            </p>
          </div>
        </div>

        {list.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {list.map((artist, i) => <ArtistCard artist={artist} index={i} key={artist.slug} />)}
          </div>
        ) : (
          <div className="border-y border-white/12 py-10 sm:py-14 grid md:grid-cols-[1.2fr_.8fr] gap-10 items-end">
            <p className="font-display uppercase text-[clamp(3.4rem,7vw,8rem)] leading-[.84] tracking-[-.03em] text-paper/95">
              Roster<br/><span className="text-paper/20">in motion.</span>
            </p>
            <div className="md:pb-2">
              <p className="text-paper/58 leading-relaxed max-w-md">We already have artist relationships in development. We are choosing not to publish placeholder names, fake profiles or unfinished material.</p>
              <Link href="/contact" className="inline-block mt-7 text-xs uppercase tracking-[.16em] border-b border-paper/60 pb-1 hover:border-paper">Artist / management inquiries </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
