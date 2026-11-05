import { Container } from "@/components/ui/container";
import { getHomeContent } from "@/lib/sanity/content";

export async function ExpertiseStrip() {
  const { expertise } = await getHomeContent();

  return (
    <section
      aria-labelledby="expertise-title"
      className="border-y border-border bg-surface/30 py-8"
    >
      <Container className="flex flex-col gap-6">
        <h2
          id="expertise-title"
          className="text-lg font-semibold uppercase tracking-[0.08em] text-ink sm:text-xl"
        >
          {expertise.title}
        </h2>

        <ul className="flex flex-wrap items-center gap-x-4 gap-y-2.5 sm:gap-x-6">
          {expertise.keywords.map((keyword) => (
            <li
              key={keyword}
              className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.16em] text-ink-muted"
            >
              <span aria-hidden="true" className="size-1 rounded-full bg-purple/70" />
              {keyword}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
