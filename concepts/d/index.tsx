import Image from "next/image";
import AnimateIn from "@/components/shared/animate-in";
import ConceptToggle from "@/components/shared/concept-toggle";
import Footer from "@/components/shared/footer";
import Nav from "@/components/shared/nav";
import "./concept-d.css";

export default function ConceptD() {
  return (
    <div className="concept-d">
      <Nav cta={{ label: "Donate", href: "#give" }} />

      {/* ── Hero ──────────────────────────────────────── */}
      <section aria-label="Hero" className="cd-hero" id="hero">
        {/* Photography slot — swap for real image when available */}
        <div aria-hidden="true" className="cd-hero__image-slot">
          <Image
            alt=""
            className="object-cover"
            fill
            priority
            src="/placeholder-dark.svg"
            unoptimized
          />
        </div>
        <div aria-hidden="true" className="cd-hero__overlay" />

        {/* Decorative "133" stat — purely visual, no semantic value */}
        <div aria-hidden="true" className="cd-hero__stat">
          <span className="cd-hero__stat-num">133</span>
          <span className="cd-hero__stat-label">Psalm 133 — unity</span>
        </div>

        <div className="cd-hero__content">
          <p className="cd-kicker cd-hero__eyebrow">
            South Africa — Reconciliation
          </p>
          <h1 className="cd-hero__headline">
            Reconciliation is not a moment.
            <br />
            <em className="cd-hero__headline-em">It is a reckoning.</em>
          </h1>
          <p className="cd-hero__body">
            South Africa has named its wounds. But naming them is not the same
            as restoring what was taken. The work of reconciliation — real,
            costly, practical reconciliation — is only beginning.
          </p>
          <div aria-hidden="true" className="cd-hero__scroll">
            <span className="cd-hero__scroll-line" />
            <span className="cd-hero__scroll-label">Scroll</span>
          </div>
        </div>
      </section>

      {/* ── Why We Exist (Statement) ─────────────────── */}
      <section
        aria-labelledby="cd-why-heading"
        className="cd-statement"
        id="why-we-exist"
      >
        <div aria-hidden="true" className="cd-divider cd-divider--light" />
        <AnimateIn>
          <div className="cd-statement__content">
            <span className="cd-kicker" id="cd-why-heading">
              Why One33 Exists
            </span>
            <h2 className="cd-statement__heading">
              Restoration requires someone to{" "}
              <strong>take responsibility</strong> — and act on it.
            </h2>
            <p className="cd-statement__note">
              Not surface-level peace. Not forced agreement.
            </p>
          </div>
          <p className="cd-statement__aside">
            Most organisations arrive with a solution and leave when it runs
            out. One33 exists at the intersection of the relational and the
            practical — because without both, neither lasts.
          </p>
        </AnimateIn>
      </section>

      {/* ── What We Do ──────────────────────────────── */}
      <section
        aria-labelledby="cd-what-heading"
        className="cd-method"
        id="what-we-do"
      >
        <div aria-hidden="true" className="cd-divider" />
        <AnimateIn>
          <div className="cd-method__inner">
            <span className="cd-kicker" id="cd-what-heading">
              What We Do
            </span>
            <div className="cd-method__grid">
              {/* Column 01 — Relational */}
              <div className="cd-method__col">
                <span aria-hidden="true" className="cd-method__num">
                  01
                </span>
                <h3 className="cd-method__col-title">Relational Work</h3>
                <span aria-hidden="true" className="cd-method__rule" />
                <p className="cd-method__col-body">
                  We put people who are trained to hold difficult conversations
                  into rooms with communities — across race, gender, culture,
                  and generation. We show up consistently, long enough to be
                  trusted. This work, we do ourselves.
                </p>
                <span className="cd-method__tag">Direct Facilitation</span>
              </div>

              {/* Vertical divider */}
              <div aria-hidden="true" className="cd-method__divider-v" />

              {/* Column 02 — Practical */}
              <div className="cd-method__col">
                <span aria-hidden="true" className="cd-method__num">
                  02
                </span>
                <h3 className="cd-method__col-title">Practical Work</h3>
                <span aria-hidden="true" className="cd-method__rule" />
                <p className="cd-method__col-body">
                  We identify what has been lost — then connect the
                  organisations, government resources, and skills equipped to
                  restore it. One33 does not build. It positions the people who
                  do, in the places where they are needed.
                </p>
                <span className="cd-method__tag">
                  Connector &amp; Facilitator
                </span>
              </div>
            </div>

            <p className="cd-method__closing">
              We don&apos;t just repair relationships. We help rebuild
              communities.
            </p>
          </div>
        </AnimateIn>
      </section>

      {/* ── Pull Quote ───────────────────────────────── */}
      <section aria-label="One33 method" className="cd-quote">
        <div aria-hidden="true" className="cd-divider cd-divider--light" />
        <AnimateIn>
          <div className="cd-quote__inner">
            <span aria-hidden="true" className="cd-quote__mark">
              &ldquo;
            </span>
            <blockquote className="cd-quote__text">
              Most organisations arrive with what they can offer. We start by
              asking what has been lost.
            </blockquote>
            <p className="cd-quote__attr">One33</p>
          </div>
        </AnimateIn>
      </section>

      {/* ── Partner With Us ──────────────────────────── */}
      <section
        aria-labelledby="cd-partner-heading"
        className="cd-partner"
        id="partner"
      >
        <div aria-hidden="true" className="cd-divider" />
        <AnimateIn>
          <div className="cd-partner__inner">
            <div className="cd-partner__header">
              <h2 className="cd-partner__heading" id="cd-partner-heading">
                There is a place for you in this work.
              </h2>
              <p className="cd-partner__sub">
                Reconciliation takes time. It takes presence. It takes trust.
              </p>
            </div>

            <div className="cd-partner__cards">
              {/* Card 01 — Give */}
              <article className="cd-card">
                <p className="cd-card__num">01 —</p>
                <h3 className="cd-card__title">Give Financially</h3>
                <p className="cd-card__body">
                  Reconciliation takes time. Partnership allows us to stay
                  present in communities — not arrive with a one-off solution
                  and leave. Your giving funds ongoing presence.
                </p>
                <a className="cd-card__action" href="#give">
                  Donate via Zapper or EFT
                </a>
              </article>

              {/* Card 02 — Skills */}
              <article className="cd-card">
                <p className="cd-card__num">02 —</p>
                <h3 className="cd-card__title">Offer Your Skills</h3>
                <p className="cd-card__body">
                  Communities have lost things that require real expertise to
                  restore — legal, medical, trade, entrepreneurial. If you carry
                  a skill set, there is likely a place for it here.
                </p>
                <a className="cd-card__action" href="mailto:hello@one33.africa">
                  Tell us what you carry
                </a>
              </article>

              {/* Card 03 — Relationships */}
              <article className="cd-card">
                <p className="cd-card__num">03 —</p>
                <h3 className="cd-card__title">Open Your Relationships</h3>
                <p className="cd-card__body">
                  Access — to government, to business, to networks and
                  decision-makers — is itself a form of resource. One33 connects
                  the willing with the needed.
                </p>
                <a className="cd-card__action" href="mailto:hello@one33.africa">
                  Explore partnership
                </a>
              </article>
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* ── Documentation Strip ──────────────────────── */}
      <section aria-label="Legal documentation" className="cd-docs">
        <AnimateIn className="cd-docs__inner">
          <p className="cd-docs__left">
            All legal documentation is in place. One33 is a registered South
            African NPO, PBO, and Section 18A tax-benefit organisation.
          </p>
          <div className="cd-docs__pills">
            <a className="cd-pill" href="/governance">
              NPO Certificate
            </a>
            <a className="cd-pill" href="/governance">
              PBO Certificate
            </a>
            <a className="cd-pill" href="/governance">
              Section 18A
            </a>
          </div>
        </AnimateIn>
      </section>

      {/* ── Give ─────────────────────────────────────── */}
      <section aria-labelledby="cd-give-heading" className="cd-give" id="give">
        <div aria-hidden="true" className="cd-divider" />
        <AnimateIn>
          <div className="cd-give__inner">
            <span className="cd-kicker" id="cd-give-heading">
              Give
            </span>
            <h2 className="cd-give__heading">
              If you believe this <strong>matters</strong>, this is how it
              moves.
            </h2>
            <p className="cd-give__body">
              Donate via Zapper or direct bank transfer. All gifts benefit from
              Section 18A tax deductibility. Your contribution stays tied to a
              purpose: presence in community, not overhead.
            </p>
            <div className="cd-give__actions">
              <a className="cd-btn-primary" href="/governance">
                Donate via Zapper
              </a>
              <a className="cd-btn-ghost" href="/governance">
                Bank Transfer Details
              </a>
              <a
                className="cd-btn-ghost"
                href="mailto:hello@one33.africa"
                id="contact"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </AnimateIn>
      </section>

      <Footer />
      <ConceptToggle />
    </div>
  );
}
