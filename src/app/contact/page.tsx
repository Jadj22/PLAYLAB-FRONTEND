import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contacte PLAYLAB pour une question, une formation ou une demande de service.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-page">
          <p className="badge">Contact</p>
          <h1 className="section-title" style={{ marginTop: "1rem" }}>
            Parlons de ton projet PC gaming
          </h1>
          <p className="section-lead">
            Une question sur une formation ou besoin d’un accompagnement ? Envoie
            un message. Le canal définitif (email / WhatsApp) sera branché avec le
            backend.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-page" style={{ maxWidth: "720px", marginInline: "auto" }}>
          <form className="card">
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
              <label className="label" htmlFor="subject">
                Sujet
              </label>
              <input id="subject" name="subject" className="input" required />
            </div>
            <div className="field">
              <label className="label" htmlFor="message">
                Message
              </label>
              <textarea id="message" name="message" className="textarea" required />
            </div>
            <button type="submit" className="btn btn-primary">
              Envoyer le message
            </button>
            <p className="meta" style={{ marginTop: "1rem" }}>
              MVP statique : aucun envoi serveur pour le moment.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
