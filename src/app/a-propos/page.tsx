import type { Metadata } from "next";
import Link from "next/link";
import { VALUES } from "@/data/content";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvre la mission, la vision et les valeurs de PLAYLAB, la PC Gaming Academy.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-page">
          <p className="badge">La marque</p>
          <h1 className="section-title" style={{ marginTop: "1rem" }}>
            PLAYLAB, bien plus que du gaming
          </h1>
          <p className="section-lead">
            Une plateforme pour rendre le PC gaming plus accessible, compréhensible
            et performant.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid-2">
          <article className="card">
            <h2 className="font-heading" style={{ marginTop: 0 }}>
              Notre mission
            </h2>
            <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.65 }}>
              Rendre le PC gaming plus accessible et plus compréhensible, quel que
              soit le niveau technique de départ.
            </p>
          </article>
          <article className="card">
            <h2 className="font-heading" style={{ marginTop: 0 }}>
              Notre vision
            </h2>
            <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.65 }}>
              Construire une Gaming Academy internationale autour de l’apprentissage,
              de l’accompagnement et des technologies gaming.
            </p>
          </article>
        </div>
      </section>

      <section className="section" style={{ background: "var(--color-surface)" }}>
        <div className="container-page">
          <h2 className="section-title">Nos valeurs</h2>
          <div className="grid-4" style={{ marginTop: "1.5rem" }}>
            {VALUES.map((value) => (
              <article key={value.title} className="card">
                <h3 className="font-heading" style={{ margin: "0 0 0.5rem", fontSize: "1.1rem" }}>
                  {value.title}
                </h3>
                <p style={{ margin: 0, color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
                  {value.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <h2 className="section-title">Notre approche</h2>
          <p className="section-lead">
            Des contenus structurés, des explications claires, et des services pour
            avancer quand tu bloques. PLAYLAB commence comme un site vitrine, puis
            évolue vers une academy complète.
          </p>
          <div className="cta-row" style={{ marginTop: "1.5rem" }}>
            <Link href="/formations" className="btn btn-primary">
              Découvrir nos formations
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
