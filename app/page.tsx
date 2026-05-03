import { ChevronDown } from "lucide-react";
import AnimateIn from "@/components/shared/animate-in";
import Footer from "@/components/shared/footer";
import Nav from "@/components/shared/nav";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "";

  return (
    <div className="home">
      <Nav />

      {/* ── Hero ──────────────────────────────────── */}
      <section aria-label="Hero" className="home-hero">
        <div aria-hidden="true" className="home-hero__image-slot" />
        <div aria-hidden="true" className="home-hero__overlay" />
        <div className="home-hero__content">
          <p className="home-hero__subline font-serif-display">
            One33 exists for the harder thing
          </p>
          <h1 className="home-hero__headline">
            Reconciliation is a harder thing than peace.
          </h1>
        </div>
        <div aria-hidden="true" className="home-hero__chevron">
          <ChevronDown />
        </div>
      </section>

      {/* ── Why We Exist ──────────────────────────── */}
      <section
        aria-labelledby="why-heading"
        className="home-why"
        id="why-we-exist"
      >
        <AnimateIn>
          <div className="home-why__inner">
            <span className="home-kicker" id="why-heading">
              Why We Exist
            </span>
            <p className="home-why__line">
              One33 exists to build our nation through reconciliation.
            </p>
            <p className="home-why__serif-moment font-serif-display">
              Not surface-level peace. Not forced agreement.
            </p>
            <p className="home-why__line">
              But real reconciliation — the kind that requires the courageous
              work of taking responsibility for what has been done wrong and
              actively restoring what has been lost because of it.
            </p>
            <p className="home-why__line">
              We believe this is where true healing begins.
            </p>
            <div className="home-why__closing">
              <p className="home-why__closing-line">Across race</p>
              <p className="home-why__closing-line">Across culture</p>
              <p className="home-why__closing-line">Across generations</p>
              <p className="home-why__closing-line">Across gender</p>
            </div>
            <p className="home-why__line home-why__line--spaced">
              In a world marked by division, we are committed to seeing people
              brought back together — with honesty, humility, and purpose.
            </p>
            <p className="home-why__psalm">
              The name <em>One33</em> comes from an ancient declaration: "How
              good and pleasing it is when brothers dwell together in unity."
            </p>
          </div>
        </AnimateIn>
      </section>

      {/* ── What We Do ────────────────────────────── */}
      <section
        aria-labelledby="what-heading"
        className="home-what"
        id="what-we-do"
      >
        <AnimateIn>
          <div className="home-what__inner">
            <span className="home-kicker" id="what-heading">
              What We Do
            </span>
            <div className="home-what__grid">
              <div className="home-what__col">
                <p className="home-what__col-label font-serif-display">
                  Relational
                </p>
                <p className="home-what__col-body">
                  The relational work we do directly. We put trained people in
                  rooms with communities and hold the difficult conversations
                  that institutions can't, or won't. We show up consistently,
                  long enough to be trusted.
                </p>
              </div>
              <Separator
                className="home-what__sep"
                decorative
                orientation="vertical"
              />
              <div className="home-what__col">
                <p className="home-what__col-label font-serif-display">
                  Practical
                </p>
                <p className="home-what__col-body">
                  The practical work we facilitate. We connect organisations,
                  government, skills, and communities to enable actual
                  restoration. We don't execute it — we make it possible.
                </p>
              </div>
            </div>
            <div className="home-what__closing">
              <p className="home-what__closing-line">
                We don't just repair relationships. We help rebuild communities.
              </p>
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* ── Partner With Us ───────────────────────── */}
      <section
        aria-labelledby="partner-heading"
        className="home-partner"
        id="partner"
      >
        <AnimateIn>
          <div className="home-partner__inner">
            <span className="home-kicker" id="partner-heading">
              Partner With Us
            </span>
            <div className="home-partner__opening">
              <p className="home-partner__opening-line">
                Reconciliation takes time
              </p>
              <p className="home-partner__opening-line">It takes presence</p>
              <p className="home-partner__opening-line">It takes trust</p>
            </div>
            <div className="home-partner__items">
              <div className="home-partner__item">
                <p aria-hidden="true" className="home-partner__item-num">
                  01 —
                </p>
                <div className="home-partner__item-content">
                  <h3 className="home-partner__item-title">Give Financially</h3>
                  <p className="home-partner__item-desc">
                    Your giving funds ongoing presence in communities — not a
                    once-off visit. One33 stays until trust is built and
                    restoration is underway. That takes time. Your contribution
                    makes it possible.
                  </p>
                  <a className="home-partner__item-link" href="#give">
                    Donate via Zapper or EFT
                  </a>
                </div>
              </div>

              <div className="home-partner__item">
                <p aria-hidden="true" className="home-partner__item-num">
                  02 —
                </p>
                <div className="home-partner__item-content">
                  <h3 className="home-partner__item-title">
                    Offer Your Skills
                  </h3>
                  <p className="home-partner__item-desc">
                    Communities have lost things that require real expertise to
                    restore — legal, educational, trade, entrepreneurial. If you
                    carry a skill set, there is likely a place for it here.
                  </p>
                  <a
                    className="home-partner__item-link"
                    href={`mailto:${contactEmail}`}
                  >
                    Tell us what you carry
                  </a>
                </div>
              </div>

              <div className="home-partner__item">
                <p aria-hidden="true" className="home-partner__item-num">
                  03 —
                </p>
                <div className="home-partner__item-content">
                  <h3 className="home-partner__item-title">
                    Open Your Relationships
                  </h3>
                  <p className="home-partner__item-desc">
                    Access — to government, to business, to networks and
                    decision-makers — is itself a form of resource. One33
                    connects the willing with the needed.
                  </p>
                  <a
                    className="home-partner__item-link"
                    href={`mailto:${contactEmail}`}
                  >
                    Explore partnership
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* ── Give ──────────────────────────────────── */}
      <section
        aria-labelledby="home-give-heading"
        className="home-give"
        id="give"
      >
        <AnimateIn>
          <div className="home-give__inner">
            <h2 className="home-give__heading" id="home-give-heading">
              If you believe this matters, this is how it moves.
            </h2>
            <div className="home-give__right">
              <p className="home-give__body">
                Give via Zapper or direct bank transfer. All contributions
                qualify for Section 18A tax deductibility. Your giving funds
                presence in community — ongoing, relational, purposeful.
              </p>
              <div className="home-give__actions">
                <Button className="home-cta-btn">Donate via Zapper</Button>
                <details className="home-give__details">
                  <summary className="home-give__summary">
                    Bank transfer details
                  </summary>
                  <div className="home-give__bank">
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
          </div>
        </AnimateIn>
      </section>

      {/* ── Stories ───────────────────────────────── */}
      <section
        aria-labelledby="stories-heading"
        className="home-stories"
        id="stories"
      >
        <AnimateIn>
          <div className="home-stories__inner">
            <span className="home-kicker" id="stories-heading">
              Stories
            </span>
            <p className="home-stories__placeholder">
              Coming soon. Real stories from people and communities who have
              been part of reconciliation work through One33.
            </p>
          </div>
        </AnimateIn>
      </section>

      <Footer />
    </div>
  );
}
