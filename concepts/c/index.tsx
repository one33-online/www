import "./concept-c.css";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import AnimateIn from "@/components/shared/animate-in";
import ConceptToggle from "@/components/shared/concept-toggle";
import Nav from "@/components/shared/nav";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function ConceptC() {
  return (
    <div className="concept-c">
      <Nav variant="dark-navy" />

      {/* ── Hero ──────────────────────────────────── */}
      <section aria-label="Hero" className="cc-hero">
        <div aria-hidden="true" className="cc-hero__image-slot">
          <Image
            alt=""
            className="object-cover"
            fill
            priority
            src="/placeholder-dark.svg"
            unoptimized
          />
        </div>
        <div aria-hidden="true" className="cc-hero__overlay" />
        <div className="cc-hero__content">
          <span className="cc-hero__kicker">
            ONE33 · South African Reconciliation Ministry
          </span>
          <h1 className="cc-hero__headline">
            Reconciliation is a harder thing than peace.
          </h1>
          <hr className="cc-hero__rule" role="none" />
          <p className="cc-hero__subline">
            One33 works where that harder thing is required.
          </p>
        </div>
        <div aria-hidden="true" className="cc-hero__chevron">
          <ChevronDown />
        </div>
      </section>

      {/* ── Why We Exist ──────────────────────────── */}
      <section
        aria-labelledby="why-heading"
        className="cc-why"
        id="why-we-exist"
      >
        <AnimateIn>
          <div className="cc-why__inner">
            <span className="cc-kicker" id="why-heading">
              Why We Exist
            </span>
            <div className="cc-why__grid">
              <div className="cc-why__heading-col">
                <h2 className="cc-why__heading">The division is still here.</h2>
              </div>
              <div className="cc-why__copy-col">
                <p className="cc-why__para">
                  One33 exists to build our nation through reconciliation.
                </p>
                <span className="cc-why__serif-moment font-serif-display">
                  Not surface-level peace. Not forced agreement.
                </span>
                <p className="cc-why__para">
                  But real reconciliation — the kind that requires the
                  courageous work of taking responsibility for what has been
                  done wrong and actively restoring what has been lost because
                  of it.
                </p>
                <p className="cc-why__para">
                  In a world marked by division, we are committed to seeing
                  people brought back together — with honesty, humility, and
                  purpose.
                </p>
              </div>
            </div>
            <div className="cc-why__closing">
              <p className="cc-why__closing-line">Restoring what was broken.</p>
              <p className="cc-why__closing-line">Rebuilding what matters.</p>
              <p className="cc-why__closing-line">Living in unity.</p>
            </div>
            <p className="cc-why__psalm">
              The name One33 comes from an ancient declaration: "How good and
              pleasing it is when brothers dwell together in unity."
            </p>
          </div>
        </AnimateIn>
      </section>

      {/* ── Interstitial serif moment ──────────────── */}
      <section aria-label="Interstitial" className="cc-interstitial">
        <AnimateIn>
          <p className="cc-interstitial__quote font-serif-display">
            In a world marked by division, we are committed to seeing people
            brought back together — with honesty, humility, and purpose.
          </p>
        </AnimateIn>
      </section>

      {/* ── What We Do ────────────────────────────── */}
      <section
        aria-labelledby="what-heading"
        className="cc-what"
        id="what-we-do"
      >
        <AnimateIn>
          <div className="cc-what__inner">
            <span className="cc-kicker" id="what-heading">
              What We Do
            </span>
            <div className="cc-what__grid">
              <div className="cc-what__col">
                <p className="cc-what__col-label">Relational</p>
                <hr className="cc-what__col-rule" role="none" />
                <p className="cc-what__col-body">
                  The relational work we do directly. We put trained people in
                  rooms with communities and hold the difficult conversations
                  that institutions can't, or won't. We show up consistently,
                  long enough to be trusted.
                </p>
              </div>
              <Separator
                className="cc-what__sep"
                decorative
                orientation="vertical"
              />
              <div className="cc-what__col">
                <p className="cc-what__col-label">Practical</p>
                <hr className="cc-what__col-rule" role="none" />
                <p className="cc-what__col-body">
                  The practical work we facilitate. We connect organisations,
                  government, skills, and communities to enable actual
                  restoration. We don't execute it — we make it possible.
                </p>
              </div>
            </div>
            <div className="cc-what__closing">
              <p className="cc-what__closing-line">
                We don't just repair relationships. We help rebuild communities.
              </p>
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* ── Partner With Us ───────────────────────── */}
      <section
        aria-labelledby="partner-heading"
        className="cc-partner"
        id="partner"
      >
        <AnimateIn>
          <div className="cc-partner__inner">
            <span className="cc-kicker" id="partner-heading">
              Partner With Us
            </span>
            <div className="cc-partner__opening">
              <span className="cc-partner__opening-line">
                Reconciliation takes time.
              </span>
              <span className="cc-partner__opening-line">
                It takes presence.
              </span>
              <span className="cc-partner__opening-line">It takes trust.</span>
            </div>
            <div className="cc-partner__cards">
              {/* Give */}
              <Card className="cc-card ring-0">
                <CardHeader>
                  <p aria-hidden="true" className="cc-card-label">
                    Give
                  </p>
                  <CardTitle className="sr-only">Donate to One33</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="cc-card-body">
                    Section 18A tax-deductible donations accepted by EFT or
                    Zapper.
                  </p>
                  <p className="cc-card-bank">
                    Bank: [Bank Name]
                    <br />
                    Account: [Account Number]
                    <br />
                    Branch: [Branch Code]
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="cc-cta-btn">Give via EFT</Button>
                </CardFooter>
              </Card>

              {/* Volunteer */}
              <Card className="cc-card ring-0">
                <CardHeader>
                  <p aria-hidden="true" className="cc-card-label">
                    Volunteer
                  </p>
                  <CardTitle className="sr-only">
                    Volunteer with One33
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="cc-card-body">
                    If you have skills in facilitation, law, education, or
                    community development, we want to hear from you.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="cc-cta-btn">
                    <a href="mailto:hello@one33.africa">Get in touch</a>
                  </Button>
                </CardFooter>
              </Card>

              {/* Connect */}
              <Card className="cc-card ring-0">
                <CardHeader>
                  <p aria-hidden="true" className="cc-card-label">
                    Connect
                  </p>
                  <CardTitle className="sr-only">Connect with One33</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="cc-card-body">
                    Organisations and government bodies working on restoration
                    can reach us directly.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="cc-cta-btn">
                    <a href="mailto:hello@one33.africa">Reach out</a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* ── Stories ───────────────────────────────── */}
      <section
        aria-labelledby="stories-heading"
        className="cc-stories"
        id="stories"
      >
        <AnimateIn>
          <div className="cc-stories__inner">
            <span className="cc-kicker" id="stories-heading">
              Stories
            </span>
            <p className="cc-stories__placeholder">
              Coming soon. Real stories from One33's reconciliation work.
            </p>
          </div>
        </AnimateIn>
      </section>

      {/* ── Footer ────────────────────────────────── */}
      <footer className="cc-footer">
        <hr className="cc-footer__rule" role="none" />
        <div className="cc-footer__inner">
          <div>
            <span className="cc-footer__wordmark font-sans font-semibold tracking-tight">
              ONE33
            </span>
            <span className="cc-footer__reg">
              One33 is a registered South African non-profit organisation.
              <br />
              NPO [TBD] · PBO [TBD] · Section 18A approved.
            </span>
          </div>
          <nav aria-label="Footer navigation" className="cc-footer__nav">
            <a className="cc-footer__nav-link" href="/governance">
              Governance
            </a>
            <a className="cc-footer__nav-link" href="/privacy">
              Privacy
            </a>
          </nav>
          <p className="cc-footer__copy">© 2025 One33</p>
        </div>
      </footer>

      <ConceptToggle />
    </div>
  );
}
