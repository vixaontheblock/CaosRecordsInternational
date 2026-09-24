import Link from "next/link";
import { officialEmail } from "@/lib/site";

export default function BookingCTA({ heading = "Hablemos de tu proyecto.", copy = "Escríbenos para consultas sobre contratación, representación, lanzamientos o colaboraciones.", buttonLabel = "Contactar", href = "/contact" }: { heading?: string; copy?: string; buttonLabel?: string; href?: string }) {
  return (
    <section className="bg-paper text-ink">
      <div className="max-w-content mx-auto px-5 sm:px-8 py-16 sm:py-20 lg:py-24 grid lg:grid-cols-[.72fr_.28fr] gap-12 items-end">
        <div>
          <p className="text-xs uppercase tracking-[.18em] text-ink/45">Contacto</p>
          <h2 className="font-display uppercase text-[clamp(3.7rem,8vw,9rem)] leading-[.83] tracking-[-.035em] mt-6 max-w-6xl">{heading}</h2>
          <p className="mt-7 text-ink/62 max-w-2xl text-lg leading-relaxed">{copy}</p>
        </div>
        <div className="lg:text-right">
          <Link href={href} className="inline-block border border-ink px-7 py-4 text-xs uppercase tracking-[.16em] hover:bg-ink hover:text-paper transition-colors">{buttonLabel}</Link>
          <a href={`mailto:${officialEmail}`} className="block mt-5 text-sm text-ink/55 hover:text-ink break-all">{officialEmail}</a>
        </div>
      </div>
    </section>
  );
}
