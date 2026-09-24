import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { artists } from "@/data/artists";
import BookingCTA from "@/components/BookingCTA";

export function generateStaticParams() {
  return artists.map((artist) => ({ slug: artist.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const artist = artists.find((item) => item.slug === params.slug);
  if (!artist) return {};
  return { title: artist.name, description: artist.bio ?? `${artist.name} — CAOS RECORDS.` };
}

const labels: Record<string, string> = { spotify: "Spotify", appleMusic: "Apple Music", youtube: "YouTube", instagram: "Instagram" };

export default function ArtistPage({ params }: { params: { slug: string } }) {
  const artist = artists.find((item) => item.slug === params.slug);
  if (!artist) notFound();
  const links = Object.entries(artist.links ?? {}).filter(([, value]) => Boolean(value));

  return (
    <>
      <section className="bg-ink text-paper pt-20 border-b border-white/10">
        <div className="max-w-content mx-auto px-5 sm:px-8 pt-10 pb-16 sm:pb-24">
          <Link href="/artists" className="text-xs uppercase tracking-[.16em] text-smoke hover:text-paper">Artistas</Link>
          <div className="mt-12 grid lg:grid-cols-[.62fr_.38fr] gap-12 items-end">
            <h1 className="font-display uppercase text-[clamp(5rem,12vw,13rem)] leading-[.76] tracking-[-.045em]">{artist.name}</h1>
            <div className="lg:pb-2 text-sm text-smoke"><p>{artist.location ?? ""}{artist.genre ? ` / ${artist.genre}` : ""}</p>{artist.availableForBooking && <p className="mt-2 text-paper/65">Disponible para actuaciones</p>}</div>
          </div>
          <div className="mt-12 relative aspect-[16/9] bg-white/5 overflow-hidden">
            {artist.image ? <Image src={artist.image} alt={artist.name} fill priority className="object-cover" /> : <div className="absolute inset-0 flex items-center justify-center text-smoke">Imagen del artista pendiente</div>}
          </div>
        </div>
      </section>

      <section className="caos-paper text-ink">
        <div className="max-w-content mx-auto px-5 sm:px-8 py-16 sm:py-20 grid lg:grid-cols-[.68fr_.32fr] gap-12">
          <div><p className="text-xs uppercase tracking-[.16em] text-ink/45">Biografía</p><p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink/68">{artist.bio}</p></div>
          <div><p className="text-xs uppercase tracking-[.16em] text-ink/45">Enlaces</p>{links.length > 0 ? <div className="mt-6 space-y-3">{links.map(([key, value]) => <a key={key} href={value as string} target="_blank" rel="noreferrer" className="block border-b border-black/15 pb-2 hover:opacity-50">{labels[key] ?? key} </a>)}</div> : <p className="mt-6 text-ink/45">Los enlaces se añadirán con el perfil del artista.</p>}</div>
        </div>
      </section>

      <BookingCTA heading={`Contrata a ${artist.name}.`} copy="Comparte el evento, la fecha, el lugar, el recinto y el presupuesto. Nuestro equipo revisará la propuesta." href="/booking" buttonLabel="Consultar disponibilidad" />
    </>
  );
}
