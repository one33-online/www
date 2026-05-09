"use client";

import { Suspense } from "react";
import "./concept-toggle.css";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

const concepts = [
  { key: "a" },
  { key: "b" },
  { key: "c" },
  { key: "d" },
] as const;

function ConceptToggleInner() {
  const params = useSearchParams();
  const current = params.get("c") ?? "a";

  return (
    <nav aria-label="Switch concept" className="concept-toggle">
      <p className="concept-toggle__label">Review concept</p>
      <ul className="concept-toggle__buttons">
        {concepts.map(({ key }) => (
          <li key={key}>
            <a
              aria-current={current === key ? "page" : undefined}
              className={cn(
                "concept-toggle__btn",
                current === key && "concept-toggle__btn--active"
              )}
              href={`/v1/?c=${key}`}
            >
              <span className="concept-toggle__word">Concept </span>
              {key.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function ConceptToggle() {
  return (
    <Suspense>
      <ConceptToggleInner />
    </Suspense>
  );
}
