export default function InkStamp() {
  return <div className="ink-stamp" aria-label="Sello de tinta de CAOS Records" role="img">
    <svg viewBox="0 0 500 500" aria-hidden="true">
      <defs><filter id="caos-ink"><feTurbulence type="fractalNoise" baseFrequency=".48" numOctaves="3" seed="12" result="grain"/><feColorMatrix in="grain" type="luminanceToAlpha"/><feComponentTransfer><feFuncA type="discrete" tableValues="0 0 1 1 1"/></feComponentTransfer><feComposite in="SourceGraphic" operator="in"/></filter></defs>
      <image href="/logo-black.png" x="20" y="20" width="460" height="460" filter="url(#caos-ink)"/>
    </svg>
  </div>;
}
