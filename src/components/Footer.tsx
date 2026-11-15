import Link from "next/link";
import { NAV, SITE } from "@/data/content";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-page footer-grid">
        <div>
          <p className="font-heading site-logo">{SITE.name}</p>
          <p className="section-lead" style={{ marginTop: "0.75rem" }}>
            {SITE.tagline}
          </p>
        </div>

        <div>
          <p className="footer-heading">Explorer</p>
          <div className="footer-links">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="footer-heading">PLAYLAB</p>
          <div className="footer-links">
            <Link href="/a-propos">À propos</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/formations">Formations</Link>
            <Link href="/services">Services</Link>
          </div>
        </div>
      </div>

      <div className="container-page footer-bottom">
        <p className="meta">© 2026 PLAYLAB — Tous droits réservés.</p>
        <p className="meta">Français</p>
      </div>
    </footer>
  );
}
