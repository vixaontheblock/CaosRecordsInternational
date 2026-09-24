"use client";

import Image from "next/image";
import Link from "next/link";
import { instagram, navLinks, officialEmail } from "@/lib/site";

export default function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div className={`fixed inset-0 z-[60] bg-ink transition-opacity duration-300 lg:hidden ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} role="dialog" aria-modal="true" aria-hidden={!open}>
      <div className="h-20 px-5 flex items-center justify-between border-b border-white/10">
        <Image src="/logo-white.png" width={58} height={58} alt="CAOS RECORDS" />
        <button type="button" onClick={onClose} aria-label="Close menu" className="w-11 h-11 relative">
          <span className="absolute left-2 right-2 top-1/2 h-px bg-paper rotate-45" />
          <span className="absolute left-2 right-2 top-1/2 h-px bg-paper -rotate-45" />
        </button>
      </div>
      <nav className="px-5 pt-8" aria-label="Mobile navigation">
        {navLinks.map((link, i) => (
          <Link key={link.href} href={link.href} onClick={onClose} className="flex items-end justify-between py-4 border-b border-white/10 group">
            <span className="font-display uppercase text-[14vw] leading-[.82] tracking-[-.025em]">{link.label}</span>
            <span className="text-xs text-smoke pb-1">0{i + 1}</span>
          </Link>
        ))}
      </nav>
      <div className="absolute bottom-6 left-5 right-5 flex items-end justify-between gap-4 text-xs text-smoke">
        <a href={`mailto:${officialEmail}`} className="hover:text-paper">{officialEmail}</a>
        <a href={instagram.url} target="_blank" rel="noreferrer" className="hover:text-paper">{instagram.handle}</a>
      </div>
    </div>
  );
}
