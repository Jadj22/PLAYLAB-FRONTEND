import type { Metadata } from "next";
import Link from "next/link";
import { ServiceCard } from "@/components/ServiceCard";
import { SERVICES } from "@/data/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Prestations PLAYLAB : installation, optimisation, configuration et assistance PC gaming.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-page">
          <p className="badge">Prestations</p>
          <h1 className="section-title" style={{ marginTop: "1rem" }}>
            Ton PC mérite une meilleure expérience gaming
          </h1>
          <p className="section-lead">
            PLAYLAB t’accompagne dans l’installation, la configuration et
            l’optimisation de ton environnement gaming.
          </p>
          <div className="cta-row" style={{ marginTop: "1.5rem" }}>
            <a href="#demande" className="btn btn-primary">
              Faire une demande
            </a>
            <Link href="/contact" className="btn btn-ghost">
              Contacter PLAYLAB
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <h2 className="section-title">Nos services</h2>
          <div className="grid-2" style={{ marginTop: "1.5rem" }}>
            {SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--color-surface)" }}>
        <div className="container-page">
          <h2 className="section-title">Comment ça fonctionne ?</h2>
          <div className="steps" style={{ marginTop: "1.5rem" }}>
            {[
              "Choisis ton service",
              "Décris ton besoin",
              "PLAYLAB étudie ta demande",
              "Nous te recontactons",
            ].map((step, index) => (
              <div key={step} className="step">
                <div className="step-index">0{index + 1}</div>
                <p style={{ margin: 0, fontWeight: 600 }}>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="demande" className="section">
        <div className="container-page" style={{ maxWidth: "720px", marginInline: "auto" }}>
          <h2 className="section-title">Demande de service</h2>
          <p className="section-lead">
            Formulaire statique MVP : les données ne sont pas encore envoyées à un
            backend. Utilise aussi la page Contact.
          </p>
          <form className="card" style={{ marginTop: "1.5rem" }}>
            <div className="field">
              <label className="label" htmlFor="name">
                Nom
              </label>
              <input id="name" name="name" className="input" required />
            </div>
            <div className="field">
              <label className="label" htmlFor="email">
                Email
              </label>
              <input id="email" name="email" type="email" className="input" required />
            </div>
            <div className="field">
              <label className="label" htmlFor="service">
                Service souhaité
              </label>
              <select id="service" name="service" className="select" defaultValue="">
                <option value="" disabled>
                  Sélectionner
                </option>
                {SERVICES.map((service) => (
                  <option key={service.slug} value={service.slug}>
                    {service.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="field">
              <label className="label" htmlFor="pc">
                Type de PC
              </label>
              <input id="pc" name="pc" className="input" placeholder="Portable / Fixe, config connue…" />
            </div>
            <div className="field">
              <label className="label" htmlFor="need">
                Description du besoin
              </label>
              <textarea id="need" name="need" className="textarea" required />
            </div>
            <button type="submit" className="btn btn-primary">
              Envoyer ma demande
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
