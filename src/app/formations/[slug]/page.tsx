import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CourseCard } from "@/components/CourseCard";
import { COURSES, getCourse } from "@/data/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return COURSES.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return { title: "Formation" };
  return {
    title: course.title,
    description: course.summary,
  };
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  const related = COURSES.filter((item) => item.slug !== course.slug);

  return (
    <>
      <section className="page-hero">
        <div className="container-page">
          <p className="meta">
            Formations &gt; {course.category}
          </p>
          <h1 className="section-title" style={{ marginTop: "0.75rem" }}>
            {course.title}
          </h1>
          <p className="section-lead">{course.description}</p>
          <p className="meta" style={{ marginTop: "1rem" }}>
            Niveau : {course.level} · Format : {course.format}
          </p>
          <div className="cta-row" style={{ marginTop: "1.5rem" }}>
            <a href="#programme" className="btn btn-primary">
              Découvrir le programme
            </a>
            <Link href="/contact" className="btn btn-ghost">
              Demander des informations
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid-2">
          <article className="card">
            <h2 className="font-heading" style={{ marginTop: 0, fontSize: "1.3rem" }}>
              À qui s’adresse cette formation ?
            </h2>
            <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.65 }}>
              {course.audience}
            </p>
          </article>
          <article className="card">
            <h2 className="font-heading" style={{ marginTop: 0, fontSize: "1.3rem" }}>
              Quel problème résout-elle ?
            </h2>
            <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.65 }}>
              {course.problem}
            </p>
          </article>
          <article className="card" style={{ gridColumn: "1 / -1" }}>
            <h2 className="font-heading" style={{ marginTop: 0, fontSize: "1.3rem" }}>
              Prérequis
            </h2>
            <p style={{ margin: 0, color: "var(--color-text-secondary)", lineHeight: 1.65 }}>
              {course.prerequisites}
            </p>
          </article>
        </div>
      </section>

      <section className="section" style={{ background: "var(--color-surface)" }}>
        <div className="container-page">
          <h2 className="section-title">Objectifs pédagogiques</h2>
          <ul style={{ marginTop: "1rem", paddingLeft: "1.1rem", lineHeight: 1.8 }}>
            {course.objectives.map((objective) => (
              <li key={objective}>{objective}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="programme" className="section">
        <div className="container-page">
          <h2 className="section-title">Programme</h2>
          <div className="grid-2" style={{ marginTop: "1.5rem" }}>
            {course.modules.map((module, index) => (
              <article key={module.title} className="card">
                <p className="meta">Module 0{index + 1}</p>
                <h3 className="font-heading" style={{ margin: "0.4rem 0 0.75rem" }}>
                  {module.title}
                </h3>
                <ul style={{ margin: 0, paddingLeft: "1.1rem", color: "var(--color-text-secondary)", lineHeight: 1.7 }}>
                  {module.lessons.map((lesson) => (
                    <li key={lesson}>{lesson}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--color-surface)" }}>
        <div className="container-page grid-2">
          <article className="card">
            <h2 className="font-heading" style={{ marginTop: 0, fontSize: "1.3rem" }}>
              Informations pratiques
            </h2>
            <ul style={{ margin: 0, paddingLeft: "1.1rem", lineHeight: 1.8, color: "var(--color-text-secondary)" }}>
              <li>Niveau : {course.level}</li>
              <li>Durée : {course.duration}</li>
              <li>Langue : {course.language}</li>
              <li>Format : {course.format}</li>
              <li>Accès : permanent après achat (Phase 2)</li>
            </ul>
          </article>
          <article className="card">
            <h2 className="font-heading" style={{ marginTop: 0, fontSize: "1.3rem" }}>
              Tarif
            </h2>
            <p className="section-title" style={{ fontSize: "2rem" }}>
              {course.priceLabel}
            </p>
            <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.65 }}>
              L’achat en ligne arrive en Phase 2. En attendant, contacte PLAYLAB pour
              plus d’informations.
            </p>
            <Link href="/contact" className="btn btn-primary" style={{ marginTop: "0.5rem" }}>
              Nous contacter
            </Link>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <h2 className="section-title">FAQ</h2>
          <div className="faq" style={{ marginTop: "1.25rem", maxWidth: "48rem" }}>
            {course.faqs.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--color-surface)" }}>
        <div className="container-page">
          <h2 className="section-title">Formations similaires</h2>
          <div className="grid-2" style={{ marginTop: "1.5rem" }}>
            {related.map((item) => (
              <CourseCard key={item.slug} course={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
