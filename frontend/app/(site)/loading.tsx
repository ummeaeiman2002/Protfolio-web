import { Container, Section } from "@/components/ui/container";

export default function Loading() {
  return (
    <Section divided={false} className="pt-20 sm:pt-28">
      <Container>
        <div role="status" aria-live="polite" className="flex max-w-3xl flex-col gap-5">
          <span className="sr-only">Loading content</span>
          <div className="h-4 w-28 rounded bg-surface-raised" />
          <div className="h-10 w-3/4 rounded bg-surface-raised" />
          <div className="h-4 w-full rounded bg-surface" />
          <div className="h-4 w-5/6 rounded bg-surface" />
          <div className="h-4 w-2/3 rounded bg-surface" />
        </div>
      </Container>
    </Section>
  );
}
