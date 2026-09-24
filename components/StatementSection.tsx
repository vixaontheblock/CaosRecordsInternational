export default function StatementSection() {
  return (
    <section className="caos-paper text-ink border-b border-black/10">
      <div className="max-w-content mx-auto px-5 sm:px-8 py-16 sm:py-20 lg:py-24 grid lg:grid-cols-[.34fr_.66fr] gap-10 lg:gap-16">
        <div>
          <p className="text-xs uppercase tracking-[.18em] text-ink/50">01 / The beginning</p>
        </div>
        <div>
          <h2 className="font-display uppercase text-[clamp(3.3rem,7vw,7.6rem)] leading-[.86] tracking-[-.03em] max-w-5xl">
            New doesn&apos;t mean empty.
          </h2>
          <div className="mt-10 grid md:grid-cols-2 gap-7 text-base sm:text-lg leading-relaxed text-ink/72">
            <p>
              We are building CAOS in public — the roster, the relationships, the releases and the way we want to work. No invented legacy. No borrowed mythology.
            </p>
            <p>
              What exists now is a point of view: build closely with artists, choose opportunities with intention and create a structure that can grow without losing identity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
