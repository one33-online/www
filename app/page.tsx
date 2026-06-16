import { ArrowRight } from "lucide-react";
import AnimateIn from "@/components/shared/animate-in";
import Footer from "@/components/shared/footer";
import GiveModal from "@/components/shared/give-modal";
import Nav from "@/components/shared/nav";
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
          <h1 className="home-hero__headline">
            Reconciliation is a harder thing than peace.
          </h1>
          <div aria-hidden="true" className="home-hero__scroll">
            <span className="home-hero__scroll-line" />
            <span className="home-hero__scroll-label">Scroll</span>
          </div>
        </div>
      </section>

      {/* ── Why We Exist ──────────────────────────── */}
      <section
        aria-labelledby="why-heading"
        className="home-why"
        id="why-we-exist"
      >
        <AnimateIn className="home-why__inner" stagger>
          <span className="home-kicker" id="why-heading">
            Why We Exist
          </span>
          <p className="home-why__line">
            ONE33 exists to build our nation through reconciliation.
          </p>
          <p className="home-why__serif-moment font-serif-display">
            Not surface-level peace. Not forced agreement.
          </p>
          <p className="home-why__line">
            But real reconciliation — the kind that requires the courageous work
            of taking responsibility for what has been done wrong and actively
            restoring what has been lost because of it.
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
            The name <em>ONE33</em> comes from an ancient declaration: "How good
            and pleasing it is when brothers dwell together in unity."
          </p>
        </AnimateIn>
      </section>

      {/* ── What We Do ────────────────────────────── */}
      <section
        aria-labelledby="what-heading"
        className="home-what"
        id="what-we-do"
      >
        <AnimateIn className="home-what__inner" stagger>
          <span className="home-kicker" id="what-heading">
            What We Do
          </span>
          <p className="home-what__intro">
            Most organisations arrive with a solution. ONE33 exists at the
            intersection of relational and practical because without both,
            neither lasts.
          </p>
          <div className="home-what__grid">
            <div className="home-what__col">
              <p className="home-what__col-label font-serif-display">
                Relational
              </p>
              <p className="home-what__col-body">
                The relational work we do directly. We put trained people in
                rooms with communities and hold the difficult conversations that
                institutions can't, or won't. We show up consistently, long
                enough to be trusted.
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
        </AnimateIn>
      </section>

      {/* ── Partner With Us ───────────────────────── */}
      <section
        aria-labelledby="partner-heading"
        className="home-partner"
        id="partner"
      >
        <AnimateIn className="home-partner__inner" stagger>
          <span className="home-kicker" id="partner-heading">
            Partner With Us
          </span>
          <h2 className="home-partner__headline font-serif-display">
            There's a place for you in this work.
          </h2>
          <div className="home-partner__opening">
            <p className="home-partner__opening-line">
              Reconciliation takes time
            </p>
            <p className="home-partner__opening-line">It takes presence</p>
            <p className="home-partner__opening-line">It takes trust</p>
          </div>
          <div className="home-partner__cards">
            <GiveModal />

            <a
              className="home-partner__card"
              href={`mailto:${contactEmail}?subject=${encodeURIComponent("Offering my skills")}&body=${encodeURIComponent("Hi,\n\nI'd like to offer my skills in support of ONE33's work.\n\nHere's what I carry:\n\n")}`}
            >
              <p className="home-partner__card-num">02 —</p>
              <h3 className="home-partner__card-title">Offer Your Skills</h3>
              <p className="home-partner__card-body">
                Communities have lost things that require real expertise to
                restore — legal, educational, trade, entrepreneurial. If you
                carry a skill set, there is likely a place for it here.
              </p>
              <span className="home-partner__card-action">
                Tell us what you carry <ArrowRight size={12} />
              </span>
            </a>

            <a
              className="home-partner__card"
              href={`mailto:${contactEmail}?subject=${encodeURIComponent("Exploring partnership with ONE33")}&body=${encodeURIComponent("Hi,\n\nI'd like to explore how I can open my relationships and networks in support of ONE33's work.\n\n")}`}
            >
              <p className="home-partner__card-num">03 —</p>
              <h3 className="home-partner__card-title">
                Open Your Relationships
              </h3>
              <p className="home-partner__card-body">
                Access — to government, to business, to networks and
                decision-makers — is itself a form of resource. ONE33 connects
                the willing with the needed.
              </p>
              <span className="home-partner__card-action">
                Explore partnership <ArrowRight size={12} />
              </span>
            </a>
          </div>
        </AnimateIn>
      </section>

      {/* ── Our Governance ────────────────────────── */}
      <section
        aria-labelledby="governance-heading"
        className="home-governance"
        id="governance"
      >
        <AnimateIn className="home-governance__inner" stagger>
          <span className="home-kicker" id="governance-heading">
            Our Governance
          </span>
          <p className="home-governance__lead">
            We hold ourselves to the same standard we call others to.
          </p>
          <p className="home-governance__sub">
            Trust is not claimed. It is demonstrated through accountability,
            transparency, and responsible stewardship.
          </p>

          <div className="home-governance__principles">
            <div className="home-governance__principle">
              <p className="home-governance__principle-label">Accountability</p>
              <p className="home-governance__principle-body">
                We operate under a structured governance framework with
                independent oversight, ensuring decisions are made responsibly
                and in the best interest of the communities we serve.
              </p>
            </div>
            <div className="home-governance__principle">
              <p className="home-governance__principle-label">
                Financial Integrity
              </p>
              <p className="home-governance__principle-body">
                All funds are carefully managed, tracked, and reported. We are
                committed to responsible stewardship and clear financial
                transparency.
              </p>
            </div>
            <div className="home-governance__principle">
              <p className="home-governance__principle-label">
                Ethical Leadership
              </p>
              <p className="home-governance__principle-body">
                Our leadership is guided by strong values, with clear checks and
                balances to ensure integrity in both decision-making and
                implementation.
              </p>
            </div>
            <div className="home-governance__principle">
              <p className="home-governance__principle-label">Compliance</p>
              <p className="home-governance__principle-body">
                We adhere to all relevant South African NPO regulations and
                requirements, including reporting, tax compliance, and Section
                18A where applicable.
              </p>
            </div>
          </div>
        </AnimateIn>
      </section>

      <Footer />
    </div>
  );
}
