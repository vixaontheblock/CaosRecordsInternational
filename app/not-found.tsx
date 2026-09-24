import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-5 text-center">
      <p className="font-display uppercase text-display-lg tracking-tight">404</p>
      <p className="mt-4 text-paper/80">This page doesn&apos;t exist.</p>
      <Link href="/" className="mt-8 border border-paper/40 px-6 py-3 hover:bg-paper hover:text-ink transition-colors">
        Back home
      </Link>
    </section>
  );
}
