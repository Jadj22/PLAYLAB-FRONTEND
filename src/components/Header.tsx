"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV, SITE } from "@/data/content";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container-page site-header-inner">
        <Link href="/" className="font-heading site-logo">
          {SITE.name}
        </Link>

        <nav aria-label="Navigation principale" className="desktop-nav">
          {NAV.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={active ? "nav-link active" : "nav-link"}
              >
                {item.label}
              </Link>
            );
          })}
          <Link href="/contact" className="btn btn-primary header-cta">
            Nous contacter
          </Link>
        </nav>

        <button
          type="button"
          className="btn btn-ghost mobile-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          Menu
        </button>
      </div>

      {open ? (
        <div id="mobile-menu" className="container-page mobile-menu">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn btn-primary"
            onClick={() => setOpen(false)}
          >
            Nous contacter
          </Link>
        </div>
      ) : null}
    </header>
  );
}
