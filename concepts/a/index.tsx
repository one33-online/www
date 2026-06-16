import { ChevronDown } from "lucide-react";
import Image from "next/image";
import AnimateIn from "@/components/shared/animate-in";
import ConceptToggle from "@/components/shared/concept-toggle";
import Footer from "@/components/shared/footer";
import Nav from "@/components/shared/nav";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import "./concept-a.css";

export default function ConceptA() {
  return (
    <div className="concept-a">
      <Nav />

      {/* ── Hero ──────────────────────────────────── */}
      <section aria-label="Hero" className="ca-hero">
        {/* Photography placeholder — swap for <Image> when photography arrives */}
        <div aria-hidden="true" className="ca-hero__image-slot">
          <Image
            alt=""
            className="object-cover"
            fill
            priority
            src="/placeholder-dark.svg"
            unoptimized
          />
        </div>
        <div aria-hidden="true" className="ca-hero__overlay" />
        <div className="ca-hero__content">
          <p className="ca-hero__subline font-serif-display">
            One33 exists for the harder thing
          </p>
          <h1 className="ca-hero__headline">
            Reconciliation is a harder thing than peace.
          </h1>
        </div>
        <div aria-hidden="true" className="ca-hero__chevron">
          <ChevronDown />
        </div>
      </section>

      {/* ── Why We Exist ──────────────────────────── */}
      <section
        aria-labelledby="why-heading"
        className="ca-why"
        id="why-we-exist"
      >
        <AnimateIn className="ca-why__inner" stagger>
          <span className="ca-kicker" id="why-heading">
            Why We Exist
          </span>
          <p className="ca-why__line">
            One33 exists to build our nation through reconciliation.
          </p>
          {/* Display-scale serif moment — the editorial centrepiece */}
          <p className="ca-why__serif-moment font-serif-display">
            Not surface-level peace. Not forced agreement.
          </p>
          <p className="ca-why__line">
            But real reconciliation — the kind that requires the courageous work
            of taking responsibility for what has been done wrong and actively
            restoring what has been lost because of it.
          </p>
          <p className="ca-why__line">
            We believe this is where true healing begins.
          </p>
          <div className="ca-why__closing">
            <p className="ca-why__closing-line">Across race</p>
            <p className="ca-why__closing-line">Across culture</p>
            <p className="ca-why__closing-line">Across generations</p>
            <p className="ca-why__closing-line">Across gender</p>
          </div>
          <p className="ca-why__line ca-why__line--spaced">
            In a world marked by division, we are committed to seeing people
            brought back together — with honesty, humility, and purpose.
          </p>
          <p className="ca-why__psalm">
            The name <em>One33</em> comes from an ancient declaration: "How good
            and pleasing it is when brothers dwell together in unity."
          </p>
        </AnimateIn>
      </section>

      {/* ── What We Do ────────────────────────────── */}
      <section
        aria-labelledby="what-heading"
        className="ca-what"
        id="what-we-do"
      >
        <AnimateIn className="ca-what__inner" stagger>
          <span className="ca-kicker" id="what-heading">
            What We Do
          </span>
          <div className="ca-what__grid">
            <div className="ca-what__col">
              {/* Serif display label for column identity */}
              <p className="ca-what__col-label font-serif-display">
                Relational
              </p>
              <p className="ca-what__col-body">
                The relational work we do directly. We put trained people in
                rooms with communities and hold the difficult conversations that
                institutions can't, or won't. We show up consistently, long
                enough to be trusted.
              </p>
            </div>
            <Separator
              className="ca-what__sep"
              decorative
              orientation="vertical"
            />
            <div className="ca-what__col">
              <p className="ca-what__col-label font-serif-display">Practical</p>
              <p className="ca-what__col-body">
                The practical work we facilitate. We connect organisations,
                government, skills, and communities to enable actual
                restoration. We don't execute it — we make it possible.
              </p>
            </div>
          </div>
          <div className="ca-what__closing">
            <p className="ca-what__closing-line">
              We don't just repair relationships. We help rebuild communities.
            </p>
          </div>
        </AnimateIn>
      </section>

      {/* ── Partner With Us ───────────────────────── */}
      <section
        aria-labelledby="partner-heading"
        className="ca-partner"
        id="partner"
      >
        <AnimateIn className="ca-partner__inner" stagger>
          <span className="ca-kicker" id="partner-heading">
            Partner With Us
          </span>
          <div className="ca-partner__opening">
            <p className="ca-partner__opening-line">
              Reconciliation takes time
            </p>
            <p className="ca-partner__opening-line">It takes presence</p>
            <p className="ca-partner__opening-line">It takes trust</p>
          </div>
          <div className="ca-partner__items">
            <div className="ca-partner__item">
              <p aria-hidden="true" className="ca-partner__item-num">
                01 —
              </p>
              <div className="ca-partner__item-content">
                <h3 className="ca-partner__item-title">Give Financially</h3>
                <p className="ca-partner__item-desc">
                  Your giving funds ongoing presence in communities — not a
                  once-off visit. One33 stays until trust is built and
                  restoration is underway. That takes time. Your contribution
                  makes it possible.
                </p>
                <a className="ca-partner__item-link" href="#give">
                  Donate via Zapper or EFT
                </a>
              </div>
            </div>

            <div className="ca-partner__item">
              <p aria-hidden="true" className="ca-partner__item-num">
                02 —
              </p>
              <div className="ca-partner__item-content">
                <h3 className="ca-partner__item-title">Offer Your Skills</h3>
                <p className="ca-partner__item-desc">
                  Communities have lost things that require real expertise to
                  restore — legal, educational, trade, entrepreneurial. If you
                  carry a skill set, there is likely a place for it here.
                </p>
                <a
                  className="ca-partner__item-link"
                  href="mailto:hello@one33.africa"
                >
                  Tell us what you carry
                </a>
              </div>
            </div>

            <div className="ca-partner__item">
              <p aria-hidden="true" className="ca-partner__item-num">
                03 —
              </p>
              <div className="ca-partner__item-content">
                <h3 className="ca-partner__item-title">
                  Open Your Relationships
                </h3>
                <p className="ca-partner__item-desc">
                  Access — to government, to business, to networks and
                  decision-makers — is itself a form of resource. One33 connects
                  the willing with the needed.
                </p>
                <a
                  className="ca-partner__item-link"
                  href="mailto:hello@one33.africa"
                >
                  Explore partnership
                </a>
              </div>
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* ── Give ──────────────────────────────────── */}
      <section aria-labelledby="ca-give-heading" className="ca-give" id="give">
        <AnimateIn className="ca-give__inner" stagger>
          <h2 className="ca-give__heading" id="ca-give-heading">
            If you believe this matters, this is how it moves.
          </h2>
          <div className="ca-give__right">
            <p className="ca-give__body">
              Give via Zapper or direct bank transfer. All contributions qualify
              for Section 18A tax deductibility. Your giving funds presence in
              community — ongoing, relational, purposeful.
            </p>
            <div className="ca-give__actions">
              <Button className="ca-cta-btn">Donate via Zapper</Button>
              <details className="ca-give__details">
                <summary className="ca-give__summary">
                  Bank transfer details
                </summary>
                <div className="ca-give__bank">
                  <strong>Account Name</strong> Lead One33 NPC
                  <br />
                  <strong>Account Number</strong> 63141958299
                  <br />
                  <strong>Branch Code</strong> 220629
                  <br />
                  <strong>Branch Name</strong> UMHLANGA CRESCENT 501
                  <br />
                  <strong>Swift Code</strong> FIRNZAJJ
                </div>
              </details>
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* ── Stories ───────────────────────────────── */}
      <section
        aria-labelledby="stories-heading"
        className="ca-stories"
        id="stories"
      >
        <AnimateIn className="ca-stories__inner" stagger>
          <span className="ca-kicker" id="stories-heading">
            Stories
          </span>
          <p className="ca-stories__placeholder">
            Coming soon. Real stories from people and communities who have been
            part of reconciliation work through One33.
          </p>
        </AnimateIn>
      </section>

      <Footer />
      <ConceptToggle />
    </div>
  );
}
