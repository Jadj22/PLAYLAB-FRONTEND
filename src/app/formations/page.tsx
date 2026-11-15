import type { Metadata } from "next";
import { CourseCard } from "@/components/CourseCard";
import { CATEGORIES, COURSES } from "@/data/content";

export const metadata: Metadata = {
  title: "Formations",
  description:
    "Catalogue des formations PLAYLAB pour comprendre, installer et optimiser ton PC gaming.",
};

export default function FormationsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-page">
          <p className="badge">Catalogue</p>
          <h1 className="section-title" style={{ marginTop: "1rem" }}>
            Formations PLAYLAB
          </h1>
          <p className="section-lead">
            Développe tes compétences et maîtrise ton PC avec des parcours structurés.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="cta-row" style={{ marginBottom: "1.5rem" }}>
            <span className="badge">Toutes</span>
            {CATEGORIES.map((category) => (
              <span key={category} className="badge" style={{ color: "var(--color-text-secondary)" }}>
                {category}
              </span>
            ))}
          </div>

          <div className="grid-3">
            {COURSES.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>

          <p className="meta" style={{ marginTop: "1.5rem" }}>
            La catégorie Advanced est prête dans la structure ; aucune formation de
            lancement n’y est encore associée.
          </p>
        </div>
      </section>
    </>
  );
}
