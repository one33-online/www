"use client";

import "./nav.css";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const defaultNavLinks = [
  { label: "What We Do", href: "#what-we-do" },
  { label: "Partner With Us", href: "#partner" },
  { label: "Governance", href: "/governance" },
];

interface NavLink {
  href: string;
  label: string;
}

interface NavProps {
  cta?: { href: string; label: string };
  splitLeft?: NavLink[];
  splitRight?: NavLink[];
  variant?: "default" | "split-centre" | "dark-navy";
}

export default function Nav({
  cta,
  variant = "default",
  splitLeft = [
    { label: "What We Do", href: "#what-we-do" },
    { label: "Why We Exist", href: "#why-we-exist" },
  ],
  splitRight = [
    { label: "Partner With Us", href: "#partner" },
    { label: "Governance", href: "/governance" },
  ],
}: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  if (variant === "split-centre") {
    const allLinks = [...splitLeft, ...splitRight];
    return (
      <>
        <nav
          aria-label="Main navigation"
          className={cn(
            "nav-root nav-root--split",
            scrolled && "nav-root--split-scrolled"
          )}
        >
          {/* Left links */}
          <ul className="nav-split-links nav-split-links--left">
            {splitLeft.map((link) => (
              <li key={link.href}>
                <a className="nav-split-link" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Centre logo */}
          <a aria-label="One33 home" className="nav-split-logo" href="/">
            <span className="font-sans font-semibold text-current tracking-tight">
              ONE33
            </span>
          </a>

          {/* Right links */}
          <ul className="nav-split-links nav-split-links--right">
            {splitRight.map((link) => (
              <li key={link.href}>
                <a className="nav-split-link" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="nav-menu-toggle nav-menu-toggle--split"
            onClick={() => setMenuOpen((o) => !o)}
            type="button"
          >
            {menuOpen ? <X aria-hidden /> : <Menu aria-hidden />}
          </button>
        </nav>

        {/* Mobile overlay */}
        <div
          aria-hidden={!menuOpen}
          className={cn(
            "nav-overlay nav-overlay--split",
            menuOpen && "nav-overlay--open"
          )}
        >
          <ul className="nav-overlay__links">
            {allLinks.map((link) => (
              <li key={link.href}>
                <a
                  className="nav-overlay__link"
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }

  return (
    <>
      <nav
        aria-label="Main navigation"
        className={cn(
          "nav-root",
          variant === "dark-navy" && "nav-root--dark-navy",
          variant !== "dark-navy" && scrolled && "nav-root--scrolled"
        )}
      >
        <a aria-label="One33 home" className="nav-logo" href="/">
          <span className="font-sans font-semibold text-current tracking-tight">
            ONE33
          </span>
        </a>

        {/* Desktop links */}
        <ul className="nav-links">
          {defaultNavLinks.map((link) => (
            <li key={link.href}>
              <a className="nav-link" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {cta && (
          <a className="nav-cta-btn" href={cta.href}>
            {cta.label}
          </a>
        )}

        {/* Mobile toggle */}
        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="nav-menu-toggle"
          onClick={() => setMenuOpen((o) => !o)}
          type="button"
        >
          {menuOpen ? <X aria-hidden /> : <Menu aria-hidden />}
        </button>
      </nav>

      {/* Mobile overlay menu */}
      <div
        aria-hidden={!menuOpen}
        className={cn(
          "nav-overlay",
          menuOpen && "nav-overlay--open",
          variant === "dark-navy" && "nav-overlay--navy"
        )}
      >
        <ul className="nav-overlay__links">
          {defaultNavLinks.map((link) => (
            <li key={link.href}>
              <a
                className="nav-overlay__link"
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
