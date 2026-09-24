import { story } from "@/lib/site";

export default function StorySection() {
  return (
    <section className="bg-ink text-paper border-b border-white/10">
      <div className="max-w-content mx-auto px-5 sm:px-8 py-16 sm:py-20 lg:py-24 grid lg:grid-cols-[.34fr_.66fr] gap-10 lg:gap-16">
        <div>
          <p className="text-xs uppercase tracking-[.18em] text-smoke">The story / 2026</p>
          <p className="font-display uppercase text-[clamp(5rem,12vw,13rem)] leading-[.75] tracking-[-.04em] text-white/8 mt-8">CAOS</p>
        </div>
        <div>
          <h2 className="font-display uppercase text-display-lg tracking-[-.025em]">The beginning is part of the story.</h2>
          <div className="mt-9 grid md:grid-cols-2 gap-x-10 gap-y-5 text-paper/64 leading-relaxed">
            {story.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          </div>
        </div>
      </div>
    </section>
  );
}
