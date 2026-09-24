import { founders, foundedYear, location } from "@/lib/site";

export default function FounderSection() {
  return (
    <section className="bg-ink text-paper border-b border-white/10">
      <div className="max-w-content mx-auto px-5 sm:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-[.34fr_.66fr] gap-10 lg:gap-16 mb-12">
          <p className="text-xs uppercase tracking-[.18em] text-smoke">06 / Founders</p>
          <div>
            <h2 className="font-display uppercase text-display-lg tracking-[-.025em]">Two people. One thing to build.</h2>
            <p className="mt-5 max-w-2xl text-paper/60 text-lg leading-relaxed">
              CAOS RECORDS was founded in {location} in {foundedYear} by Rodolfo “Xavi” Martinez and Angel “Agm” Monterrey. The roles will evolve as the company grows; the foundation is shared.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {founders.map((f, i) => (
            <a key={f.alias} href={f.instagram} target="_blank" rel="noopener noreferrer" className="group bg-ink p-7 sm:p-10 min-h-[340px] flex flex-col justify-between">
              <div className="flex justify-between text-xs uppercase tracking-[.16em] text-smoke">
                <span>Founder 0{i + 1}</span><span>Instagram </span>
              </div>
              <div>
                <p className="font-display uppercase text-[clamp(4rem,8vw,8rem)] leading-[.8] tracking-[-.035em] group-hover:translate-x-1 transition-transform">{f.alias}</p>
                <div className="mt-6 flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <p className="text-lg">{f.name}</p>
                    <p className="text-sm text-smoke mt-1">Co-Founder / CAOS RECORDS</p>
                  </div>
                  <span className="text-sm text-paper/55">{f.handle}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
