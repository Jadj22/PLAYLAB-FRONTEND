import type { Service } from "@/data/content";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="card">
      <h3 className="font-heading" style={{ margin: "0 0 0.5rem", fontSize: "1.2rem" }}>
        {service.title}
      </h3>
      <p style={{ margin: 0, color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
        {service.summary}
      </p>
    </article>
  );
}
