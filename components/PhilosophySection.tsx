const steps = [
  ["Discover", "We look for identity before formula — what makes the artist worth paying attention to in the first place."],
  ["Build", "Direction comes before noise. We shape the structure around the artist, not the artist around the structure."],
  ["Move", "Shows, releases, collaborations and partnerships should feel like parts of one larger direction."],
];

export default function PhilosophySection() {
  return (
    <section className="bg-[#171715] text-paper border-b border-white/10">
      <div className="max-w-content mx-auto px-5 sm:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-[.34fr_.66fr] gap-10 lg:gap-16">
          <p className="text-xs uppercase tracking-[.18em] text-smoke">03 / How we think</p>
          <div>
            <p className="font-display uppercase text-[clamp(3rem,6.4vw,7rem)] leading-[.86] tracking-[-.03em]">
              Chaos is not the absence of direction.
            </p>
            <p className="font-display uppercase text-[clamp(3rem,6.4vw,7rem)] leading-[.86] tracking-[-.03em] text-paper/28 mt-2">
              It&apos;s where direction begins.
            </p>
          </div>
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {steps.map(([title, copy], i) => (
            <div key={title} className="bg-[#171715] p-7 sm:p-9 min-h-[260px]">
              <p className="text-xs tracking-[.18em] text-smoke">0{i + 1}</p>
              <h3 className="font-display uppercase text-4xl mt-12">{title}</h3>
              <p className="mt-4 text-paper/58 leading-relaxed">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
