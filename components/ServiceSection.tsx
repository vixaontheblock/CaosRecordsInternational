import Link from "next/link";

const services = [
  { n: "01", name: "Booking", copy: "Live performances, appearances, private events, clubs, festivals and selected brand opportunities.", href: "/booking" },
  { n: "02", name: "Management", copy: "Direction, positioning, career strategy and the long-term decisions that shape an artist beyond one release or one show.", href: "/contact" },
  { n: "03", name: "Records", copy: "Selected releases and creative projects built around the identity of the music — not around a one-size-fits-all label formula.", href: "/records" },
  { n: "04", name: "Partnerships", copy: "The right connection between talent, brands, promoters, spaces and culture when the fit is real.", href: "/contact" },
];

export default function ServiceSection() {
  return (
    <section className="bg-ink text-paper border-b border-white/10">
      <div className="max-w-content mx-auto px-5 sm:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-[.34fr_.66fr] gap-10 lg:gap-16 mb-12">
          <p className="text-xs uppercase tracking-[.18em] text-smoke">02 / What we build</p>
          <div>
            <h2 className="font-display uppercase text-display-lg tracking-[-.025em]">One company. Different relationships.</h2>
            <p className="mt-5 text-paper/60 max-w-2xl text-lg">Not every artist needs the same thing. CAOS is designed to work differently depending on the project, stage and opportunity.</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 border-t border-white/12">
          {services.map((s, i) => (
            <Link key={s.name} href={s.href} className={`group p-6 sm:p-8 lg:p-10 min-h-[270px] flex flex-col justify-between border-b border-white/12 ${i % 2 === 0 ? "md:border-r" : ""}`}>
              <span className="text-xs text-smoke tracking-[.16em]">{s.n}</span>
              <div className="mt-12">
                <h3 className="font-display uppercase text-4xl sm:text-5xl tracking-[-.02em] group-hover:translate-x-1 transition-transform">{s.name}</h3>
                <p className="mt-4 max-w-lg text-paper/58 leading-relaxed">{s.copy}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
