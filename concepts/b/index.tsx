import Image from "next/image";
import AnimateIn from "@/components/shared/animate-in";
import ConceptToggle from "@/components/shared/concept-toggle";
import Footer from "@/components/shared/footer";
import Nav from "@/components/shared/nav";
import { Button } from "@/components/ui/button";
import "./concept-b.css";

const splitLeft = [
  { label: "What We Do", href: "#what-we-do" },
  { label: "Why We Exist", href: "#why-we-exist" },
];

const splitRight = [
  { label: "Partner With Us", href: "#partner" },
  { label: "Governance", href: "/governance" },
];

export default function ConceptB() {
  return (
    <div className="concept-b">
      <Nav
        splitLeft={splitLeft}
        splitRight={splitRight}
        variant="split-centre"
      />

      {/* ── Hero ──────────────────────────────────── */}
      <section aria-label="Hero" className="cb-hero">
        <span aria-hidden="true" className="cb-hero__ghost">
          ONE33
        </span>

        {/* Left: typography block */}
        <div className="cb-hero__left">
          <div className="cb-hero__kicker">
            <span aria-hidden="true" className="cb-hero__kicker-line" />
            <span className="cb-hero__kicker-text">
              ONE33 · South African Reconciliation Ministry
            </span>
          </div>
          <h1 className="cb-hero__headline">The reconciliation that stays.</h1>
          <p className="cb-hero__serif font-serif-display">
            For the harder thing.
          </p>
          <div className="cb-hero__cta-row">
            <Button asChild className="cb-btn-primary">
              <a href="#why-we-exist">Our Work</a>
            </Button>
            <Button asChild className="cb-btn-outline" variant="outline">
              <a href="#partner">Partner With Us</a>
            </Button>
          </div>
        </div>

        {/* Right: photography placeholder */}
        <div className="cb-hero__right">
          <div aria-hidden="true" className="cb-hero__image-slot">
            <Image
              alt=""
              className="object-cover"
              fill
              priority
              src="/placeholder-dark.svg"
              unoptimized
            />
          </div>
          <div aria-hidden="true" className="cb-hero__overlay" />
        </div>
      </section>

      {/* ── Why We Exist ──────────────────────────── */}
      <section
        aria-labelledby="cb-why-heading"
        className="cb-why"
        id="why-we-exist"
      >
        <AnimateIn>
          <div className="cb-why__inner">
            <span className="cb-kicker" id="cb-why-heading">
              Why We Exist
            </span>
            <p className="cb-why__serif-intro font-serif-display">
              History built the divides. Habit maintains them.
            </p>
            <hr className="cb-why__rule" role="presentation" />
            <p className="cb-why__line">
              One33 exists to build our nation through reconciliation.
            </p>
            <p className="cb-why__serif-moment font-serif-display">
              Not surface-level peace. Not forced agreement.
            </p>
            <p className="cb-why__line">
              But real reconciliation — the kind that requires the courageous
              work of taking responsibility for what has been done wrong and
              actively restoring what has been lost because of it.
            </p>
            <p className="cb-why__line">
              We believe this is where true healing begins.
            </p>
            <p className="cb-why__line">
              Across race. Across culture. Across generations. Across gender.
            </p>
            <p className="cb-why__line">
              In a world marked by division, we are committed to seeing people
              brought back together — with honesty, humility, and purpose.
            </p>
            <div className="cb-why__closing">
              <p className="cb-why__closing-line">Restoring what was broken.</p>
              <p className="cb-why__closing-line">Rebuilding what matters.</p>
              <p className="cb-why__closing-line">Living in unity.</p>
            </div>
            <p className="cb-why__psalm">
              The name <em>One33</em> comes from an ancient declaration:{" "}
              &ldquo;How good and pleasing it is when brothers dwell together in
              unity.&rdquo;
            </p>
          </div>
        </AnimateIn>
      </section>

      {/* ── What We Do ────────────────────────────── */}
      <section
        aria-labelledby="cb-what-heading"
        className="cb-what"
        id="what-we-do"
      >
        <AnimateIn>
          <div className="cb-what__inner">
            <span className="cb-kicker" id="cb-what-heading">
              What We Do
            </span>
            <p className="cb-what__serif-intro font-serif-display">
              One33 does two things. The difference between them matters.
            </p>
            <div className="cb-what__panel">
              <p className="cb-what__panel-label">Relational</p>
              <p className="cb-what__panel-body">
                The relational work we do directly. We put trained people in
                rooms with communities and hold the difficult conversations that
                institutions can't, or won't. We show up consistently, long
                enough to be trusted.
              </p>
              <p className="cb-what__panel-detail">
                Direct. Sustained. Present.
              </p>
            </div>
            <div className="cb-what__panel">
              <p className="cb-what__panel-label">Practical</p>
              <p className="cb-what__panel-body">
                The practical work we facilitate. We connect organisations,
                government, skills, and communities to enable actual
                restoration. We don't execute it — we make it possible.
              </p>
              <p className="cb-what__panel-detail">
                Connector. Enabler. Catalyst.
              </p>
            </div>
            <div className="cb-what__closing">
              <p className="cb-what__closing-line">
                We don't just repair relationships. We help rebuild communities.
              </p>
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* ── Partner With Us ───────────────────────── */}
      <section
        aria-labelledby="cb-partner-heading"
        className="cb-partner"
        id="partner"
      >
        <AnimateIn>
          <div className="cb-partner__inner">
            <span className="cb-kicker" id="cb-partner-heading">
              Partner With Us
            </span>
            <div className="cb-partner__opening">
              <p className="cb-partner__opening-line">
                Reconciliation takes time.
              </p>
              <p className="cb-partner__opening-line">It takes presence.</p>
              <p className="cb-partner__opening-line">It takes trust.</p>
            </div>
            <div className="cb-partner__items">
              {/* 01 — Give */}
              <div className="cb-partner__item">
                <p aria-hidden="true" className="cb-partner__item-num">
                  01
                </p>
                <div className="cb-partner__item-content">
                  <p className="cb-partner__item-label">Give</p>
                  <p className="cb-partner__item-body">
                    Section 18A tax-deductible donations accepted by EFT or
                    Zapper.
                  </p>
                  <p className="cb-partner__item-bank">
                    Account Name: Lead One33 NPC
                    <br />
                    Account Number: 63141958299
                    <br />
                    Branch Code: 220629 (Umhlanga Crescent 501)
                    <br />
                    Swift: FIRNZAJJ
                  </p>
                  <Button className="cb-btn-rust">Give via EFT</Button>
                </div>
              </div>

              {/* 02 — Volunteer */}
              <div className="cb-partner__item">
                <p aria-hidden="true" className="cb-partner__item-num">
                  02
                </p>
                <div className="cb-partner__item-content">
                  <p className="cb-partner__item-label">Volunteer</p>
                  <p className="cb-partner__item-body">
                    If you have skills in facilitation, law, education, or
                    community development, we want to hear from you.
                  </p>
                  <Button asChild className="cb-btn-rust">
                    <a href="mailto:hello@one33.africa">Get in touch</a>
                  </Button>
                </div>
              </div>

              {/* 03 — Connect */}
              <div className="cb-partner__item">
                <p aria-hidden="true" className="cb-partner__item-num">
                  03
                </p>
                <div className="cb-partner__item-content">
                  <p className="cb-partner__item-label">Connect</p>
                  <p className="cb-partner__item-body">
                    Organisations and government bodies working on restoration
                    can reach us directly.
                  </p>
                  <Button asChild className="cb-btn-rust">
                    <a href="mailto:hello@one33.africa">Reach out</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* ── Stories ───────────────────────────────── */}
      <section
        aria-labelledby="cb-stories-heading"
        className="cb-stories"
        id="stories"
      >
        <AnimateIn>
          <div className="cb-stories__inner">
            <span className="cb-kicker" id="cb-stories-heading">
              Stories
            </span>
            <p className="cb-stories__serif font-serif-display">
              The stories are being written.
            </p>
            <p className="cb-stories__note">
              This section will carry real accounts from One33's reconciliation
              work. Jayda is curating these.
            </p>
          </div>
        </AnimateIn>
      </section>

      <Footer />
      <ConceptToggle />
    </div>
  );
}
