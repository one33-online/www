"use client";

import "./animate-in.css";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  /** Base delay before the reveal begins, in milliseconds. */
  delay?: number;
  /** When true, direct children reveal one after another instead of as one block. */
  stagger?: boolean;
  /** Gap between each child's reveal in stagger mode, in milliseconds. */
  staggerStep?: number;
}

export default function AnimateIn({
  children,
  className,
  delay = 0,
  stagger = false,
  staggerStep = 90,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      return;
    }

    if (stagger) {
      for (const [index, child] of Array.from(el.children).entries()) {
        (child as HTMLElement).style.transitionDelay =
          `${delay + index * staggerStep}ms`;
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.setAttribute("data-visible", "true");
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, stagger, staggerStep]);

  return (
    <div
      className={cn("animate-in-wrap", className)}
      data-stagger={stagger ? "true" : undefined}
      ref={ref}
      style={stagger ? undefined : { transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
