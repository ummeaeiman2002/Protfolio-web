import type { ReactNode } from "react";

type CaseStudySectionProps = {
  title: string;
  children: ReactNode;
  id?: string;
};

export function CaseStudySection({ title, children, id }: CaseStudySectionProps) {
  return (
    <section id={id} className="flex flex-col gap-4 border-t border-border pt-8">
      <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">{title}</h2>
      <div className="flex flex-col gap-4 text-base leading-relaxed text-ink-secondary">{children}</div>
    </section>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-purple" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
