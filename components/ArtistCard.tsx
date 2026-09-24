import Image from "next/image";
import Link from "next/link";
import type { Artist } from "@/data/artists";

export default function ArtistCard({ artist, index }: { artist: Artist; index: number }) {
  return (
    <Link href={`/artists/${artist.slug}`} className="group bg-[#11110f] p-6 sm:p-8">
      <div className="flex justify-between text-xs text-smoke mb-6">
        <span>{String(index + 1).padStart(2, "0")}</span>
        {artist.availableForBooking && <span>Disponible para actuaciones</span>}
      </div>
      <div className="relative aspect-[4/5] overflow-hidden bg-white/5">
        {artist.image ? <Image src={artist.image} alt={artist.name} fill className="object-cover group-hover:scale-[1.02] transition-transform duration-500" /> : null}
      </div>
      <div className="mt-5 flex justify-between items-end gap-4">
        <h3 className="font-display uppercase text-4xl sm:text-5xl tracking-[-.02em]">{artist.name}</h3>
        <span className="text-xs text-smoke text-right">{artist.location}{artist.genre ? ` / ${artist.genre}` : ""}</span>
      </div>
    </Link>
  );
}
