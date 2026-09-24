"use client";

import { ReactNode } from "react";

/**
 * PageTransitionPlaceholder
 * --------------------------
 * Reserved wrapper for future route-to-route transitions (§19). Today it
 * just renders children directly, so pages can already be wrapped with it
 * without any visual change. Later, swap the pass-through for an animation
 * library (e.g. Framer Motion's AnimatePresence) keyed on the route.
 */
export default function PageTransitionPlaceholder({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
