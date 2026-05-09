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
          <p className="footer-copyright">© {year} ONE33</p>
        </div>
      </div>
    </footer>
  );
}
