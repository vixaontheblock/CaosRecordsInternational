"use client";

/**
 * IntroSequencePlaceholder
 * ------------------------
 * Not implemented yet, on purpose (see brief §18).
 *
 * This is the reserved slot for a future full-screen entry sequence:
 * black screen → logo appears → logo transforms/scales → wordmark reveal →
 * transition into the homepage. It currently renders nothing so it is safe
 * to mount from RootLayout or a route without affecting the site today.
 *
 * To build it later: turn this into a client component that renders on
 * first visit (e.g. gated by sessionStorage), animates the mark in
 * /public/logo-white.png, then unmounts itself into the Hero.
 */
export default function IntroSequencePlaceholder() {
  return null;
}
