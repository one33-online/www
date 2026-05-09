# To-Do

_Open action points before the site can launch._

---

## Richard

- [ ] **Zapper account** — confirm whether the existing Zapper account is through Anthem or a standalone One33 account. Once confirmed, provide the Zapper QR code (or merchant ID) so the donate modal can replace the placeholder. See `components/shared/give-modal.tsx:91`.
- [x] **EFT details sign-off** — verify the bank details currently hardcoded in `components/shared/give-modal.tsx:12–18` are correct and current (Lead One33 NPC, FNB Umhlanga Crescent).
- [x] **Logo files from Sade** — final black and white wordmark SVG + a favicon/icon version. Required before accent colour can be signed off.
- [ ] **Governance documents** — NPO certificate, PBO certificate. To be placed in `public/documents/` so the download pills on the home page resolve. Section 18A is request-by-email; no file needed.
- [ ] **Three brand words** — still outstanding from discovery.
- [x] **Concrete examples of the work** — one or two real examples that illustrate what an engagement looks like. Will inform copy and eventually the Stories section.

---

## Josh

- [ ] **`NEXT_PUBLIC_CONTACT_EMAIL` env var** — set in Vercel environment variables before deploy. Currently falls back to an empty string.
- [ ] **Domains** — one33.africa, one33.org.za, one33.co.za. Point DNS to Vercel once hosting is live.
- [x] **Vercel hosting** — set up deploy pipeline and production environment.
- [x] **Contact form** — submissions via mailto to the appropriate One33 email.
- [ ] **Email setup** — help Richard get One33-branded email on the domain.
- [ ] **POPI / DPA** — flag to Richard; set up a simple data processing agreement with Vercel before launch.
- [ ] **Jayda content training** — train Jayda (or nominated person) to handle Stories content updates without developer involvement.

---

## Design

- [x] **Concept direction** — select one of the four homepage concepts to move forward with (`/concepts/a` through `/d`).
- [ ] **Accent colour sign-off** — working candidate is `#B85C38`. Confirm against the final black-and-white wordmark once logo files arrive.

---

## Deferred

- **Stories section** — placeholder in place (`app/page.tsx:220–237`). Revisit once core site is live and there is content ready.
