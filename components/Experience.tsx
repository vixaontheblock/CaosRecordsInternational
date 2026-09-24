"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function Experience() {
  const path = usePathname();
  useEffect(() => {
    document.documentElement.classList.add("reveal-ready");
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
    }), { threshold: .12 });
    document.querySelectorAll("[data-reveal]").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [path]);
  return null;
}
export function BrandSculpture() {
  const ref = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  useEffect(() => { setPaused(document.documentElement.classList.contains("motion-paused")); }, []);
  return <div className={`brand-stage ${paused ? "paused" : ""}`} ref={ref} onPointerMove={e => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || e.pointerType !== 'mouse') return;
    const box = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--rx', `${-(e.clientY-box.top-box.height/2)/35}deg`);
    e.currentTarget.style.setProperty('--ry', `${(e.clientX-box.left-box.width/2)/35}deg`);
  }} onPointerLeave={e => { e.currentTarget.style.setProperty('--rx','0deg'); e.currentTarget.style.setProperty('--ry','0deg'); }}>
    <div className="brand-object"><img src="/logo-white.png" width="1080" height="1080" alt="CAOS Records" /></div>
    <button className="motion-toggle" onClick={() => {setPaused(!paused); document.documentElement.classList.toggle('motion-paused', !paused);}} aria-pressed={paused} aria-label={paused ? 'Activar animaciones' : 'Pausar animaciones'}>{paused ? '▶' : 'Ⅱ'} <span>{paused ? 'Activar' : 'Pausar'} movimiento</span></button>
  </div>;
}
