import "./footer.css";
import One33Logo from "@/components/icons/one33-logo";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="footer-root">
      <Separator className="footer-separator" />
      <div className="footer-inner">
        <div className="footer-row footer-row--main">
          <One33Logo className="footer-logo" variant="wordmark" />
          <nav aria-label="Footer navigation">
            <ul className="footer-links">
              <li>
                <a className="footer-link" href="/governance">
                  Governance
                </a>
              </li>
              <li>
                <a className="footer-link" href="/privacy">
                  Privacy
                </a>
              </li>
              <li>
                <span className="footer-reg">NPO 299-875 · PBO 930087781</span>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer-row footer-row--legal">
          <p className="footer-legal">
            One33 is a registered South African non-profit organisation.
            Section&nbsp;18A approved.
          </p>
          <p className="footer-copyright">© 2025 One33</p>
        </div>
      </div>
    </footer>
  );
}
