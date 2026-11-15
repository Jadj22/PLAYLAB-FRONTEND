import Link from "next/link";
import { CourseCard } from "@/components/CourseCard";
import { ServiceCard } from "@/components/ServiceCard";
import {
  COURSES,
  HOME_FAQ,
  PILLARS,
  SERVICES,
  SITE,
  VALUES,
} from "@/data/content";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-media" aria-hidden="true" />
        <div className="container-page hero-content">
          <p className="badge" style={{ marginBottom: "1rem" }}>
            {SITE.badge}
          </p>
          <h1 className="hero-brand">{SITE.name}</h1>
          <p className="hero-title">{SITE.tagline}</p>
          <p className="hero-text">{SITE.description}</p>
          <div className="cta-row">
            <Link href="/formations" className="btn btn-primary">
              Découvrir les formations
            </Link>
            <Link href="/services" className="btn btn-secondary">
              Nos services
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <h2 className="section-title">Le gaming PC devient plus simple</h2>
          <p className="section-lead">
            Comprendre ton PC, c’est mieux en profiter. PLAYLAB centralise
            apprentissage, installation et optimisation.
          </p>
          <div className="grid-3" style={{ marginTop: "1.75rem" }}>
            {PILLARS.map((pillar) => (
              <article key={pillar.title} className="card">
                <h3 className="font-heading" style={{ margin: "0 0 0.5rem" }}>
                  {pillar.title}
                </h3>
                <p style={{ margin: 0, color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
                  {pillar.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--color-surface)" }}>
        <div className="container-page">
          <h2 className="section-title">Formations de lancement</h2>
          <p className="section-lead">
            Trois parcours pour démarrer, installer et optimiser ton expérience PC gaming.
          </p>
          <div className="grid-3" style={{ marginTop: "1.75rem" }}>
            {COURSES.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
          <div style={{ marginTop: "1.5rem" }}>
            <Link href="/formations" className="btn btn-ghost">
              Voir toutes les formations
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <h2 className="section-title">Nos services</h2>
          <p className="section-lead">
            Besoin d’un coup de main concret ? PLAYLAB t’accompagne sur demande.
          </p>
          <div className="grid-2" style={{ marginTop: "1.75rem" }}>
            {SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div style={{ marginTop: "1.5rem" }}>
            <Link href="/services" className="btn btn-secondary">
              Découvrir nos services
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--color-surface)" }}>
        <div className="container-page">
          <h2 className="section-title">Pourquoi choisir PLAYLAB ?</h2>
          <p className="section-lead">
            Une Gaming Academy accessible, structurée et orientée résultats.
          </p>
          <div className="grid-4" style={{ marginTop: "1.75rem" }}>
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
          <h2 className="section-title">Notre approche pédagogique</h2>
          <p className="section-lead">
            Des formations vidéo préenregistrées, conçues pour progresser à ton rythme.
          </p>
          <div className="steps" style={{ marginTop: "1.75rem" }}>
            {[
              "Choisis ton objectif",
              "Suis les leçons vidéo",
              "Applique les connaissances",
              "Améliore ton expérience gaming",
            ].map((step, index) => (
              <div key={step} className="step">
                <div className="step-index">0{index + 1}</div>
                <p style={{ margin: 0, fontWeight: 600 }}>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--color-surface)" }}>
        <div className="container-page">
          <h2 className="section-title">Prêt à exploiter tout le potentiel de ton PC ?</h2>
          <p className="section-lead">
            Commence par une formation, ou contacte PLAYLAB pour un accompagnement ciblé.
          </p>
          <div className="cta-row" style={{ marginTop: "1.5rem" }}>
            <Link href="/formations" className="btn btn-primary">
              Découvrir les formations
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Contacter PLAYLAB
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <h2 className="section-title">FAQ</h2>
          <div className="faq" style={{ marginTop: "1.25rem", maxWidth: "48rem" }}>
            {HOME_FAQ.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
