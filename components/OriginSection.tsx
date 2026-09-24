import Image from "next/image";

export default function OriginSection() {
  return (
    <section className="relative overflow-hidden caos-paper text-ink border-b border-black/10">
      <div className="max-w-content mx-auto px-5 sm:px-8 py-16 sm:py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative z-10">
          <p className="text-xs uppercase tracking-[.18em] text-ink/45">04 / Origin</p>
          <h2 className="font-display uppercase text-display-lg tracking-[-.025em] mt-8 max-w-3xl">Built in Panama. Designed to move.</h2>
          <div className="mt-8 space-y-5 max-w-xl text-ink/68 text-lg leading-relaxed">
            <p>Panama has always been a meeting point — people, sounds, routes and cultures crossing through the same place.</p>
            <p>CAOS starts here with a wider intention: build relationships that can travel without pretending we are already everywhere.</p>
          </div>
        </div>
        <div className="relative aspect-square lg:scale-110 lg:translate-x-[8%]">
          <Image src="/logo-black.png" alt="CAOS RECORDS logo" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain opacity-[.92]" />
        </div>
      </div>
    </section>
  );
}
