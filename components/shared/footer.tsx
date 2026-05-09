import "./footer.css";
import { FileText, Mail } from "lucide-react";
import One33Logo from "@/components/icons/one33-logo";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const year = new Date().getFullYear();
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "";

  return (
    <footer className="footer-root">
      <Separator className="footer-separator" />
      <div className="footer-inner">
        <div className="footer-row footer-row--main">
          <One33Logo className="footer-logo" variant="wordmark" />
          <nav aria-label="Legal documents">
            <ul className="footer-links">
              <li>
                <a
                  className="footer-pill"
                  href="/documents/npo-certificate.pdf"
                  rel="noopener"
                  target="_blank"
                >
                  <FileText aria-hidden="true" size={11} strokeWidth={1.5} />
                  NPO Certificate
                </a>
              </li>
              <li>
                <a
                  className="footer-pill"
                  href="/documents/pbo-certificate.pdf"
                  rel="noopener"
                  target="_blank"
                >
                  <FileText aria-hidden="true" size={11} strokeWidth={1.5} />
                  PBO Certificate
                </a>
              </li>
              <li>
                <a
                  className="footer-pill"
                  href={`mailto:${contactEmail}?subject=${encodeURIComponent("Section 18A tax certificate")}`}
                >
                  <Mail aria-hidden="true" size={11} strokeWidth={1.5} />
                  Request 18A
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer-row footer-row--legal">
          <p className="footer-legal">
            ONE33 is a registered South African NPO, PBO, and Section&nbsp;18A
            tax-benefit organisation.
          </p>
          <dl className="footer-reg-numbers">
            <div className="footer-reg-row">
              <dt>NPC Reg</dt>
              <dd>2021/510585/08</dd>
            </div>
            <div className="footer-reg-row">
              <dt>NPO</dt>
              <dd>299-875</dd>
            </div>
            <div className="footer-reg-row">
              <dt>PBO</dt>
              <dd>930087781</dd>
            </div>
            <div className="footer-reg-row">
              <dt>Income Tax</dt>
              <dd>9123111255</dd>
            </div>
          </dl>
          <p className="footer-copyright">© {year} ONE33</p>
        </div>
      </div>
    </footer>
  );
}
