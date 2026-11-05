import { PageShell } from "@/components/layout/page-shell";
import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/ui/container";
import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/ui/icons";

export default function NotFound() {
  return (
    <PageShell>
      <Section divided={false} className="pt-20 sm:pt-28">
        <Container className="flex max-w-2xl flex-col gap-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-purple-soft">404</p>
          <h1 className="text-3xl font-semibold text-ink sm:text-4xl">
            That page does not exist
          </h1>
          <p className="text-base leading-relaxed text-ink-secondary">
            The link may be outdated, or the case study has not been published yet. Nothing is listed
            until it can actually be shown.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/work" size="lg">
              Browse work
              <ArrowUpRightIcon className="text-[1.1rem]" />
            </Button>
            <Button href="/" variant="secondary" size="lg">
              Back home
              <ArrowRightIcon className="text-[1.1rem]" />
            </Button>
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}
