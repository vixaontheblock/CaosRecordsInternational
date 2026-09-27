"use client";
export default function ErrorPage({reset}:{reset:()=>void}){return <section className="release-index"><h1>No pudimos cargar la música.</h1><p>Inténtalo de nuevo en unos momentos.</p><button className="button" onClick={reset}>REINTENTAR</button></section>}
