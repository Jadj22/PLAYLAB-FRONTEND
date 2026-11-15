import Link from "next/link";
import type { Course } from "@/data/content";

export function CourseCard({ course }: { course: Course }) {
  return (
    <Link href={`/formations/${course.slug}`} className="card course-card">
      <div className="course-card-top">
        <span className="badge">{course.category}</span>
        <span className="meta">{course.level}</span>
      </div>
      <h3 className="font-heading course-card-title">{course.title}</h3>
      <p className="course-card-text">{course.summary}</p>
      <span className="course-card-cta">Découvrir</span>
    </Link>
  );
}
