const now = [
  ["Roster", "Building selected artist relationships and preparing public announcements."],
  ["Booking", "Opening conversations with promoters, venues, events and private clients."],
  ["Records", "Developing the first projects that will begin the CAOS catalog."],
  ["Company", "Building the systems, identity and partnerships behind the work."],
];

export default function CurrentSection() {
  return (
    <section className="bg-paper text-ink border-b border-black/10">
      <div className="max-w-content mx-auto px-5 sm:px-8 py-16 sm:py-20">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[.18em] text-ink/45">05 / CAOS now</p>
            <h2 className="font-display uppercase text-display-lg tracking-[-.025em] mt-5">The work before the noise.</h2>
          </div>
          <p className="max-w-md text-ink/58 leading-relaxed">A new company should show what it is actually building — not fill the gaps with fake milestones.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-black/15">
          {now.map(([title, copy], i) => (
            <div key={title} className="py-7 sm:px-6 first:pl-0 border-b lg:border-b-0 lg:border-r last:border-r-0 border-black/15">
              <p className="text-xs text-ink/40">0{i + 1}</p>
              <h3 className="font-display uppercase text-3xl mt-10">{title}</h3>
              <p className="mt-3 text-sm text-ink/60 leading-relaxed max-w-xs">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
