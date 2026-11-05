import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/ui/container";
import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/ui/icons";
import { SITE_CORE_MESSAGE } from "@/data/site";

export function FinalCta() {
  return (
    <Section id="get-started" labelledBy="final-cta-title">
      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-border bg-surface px-6 py-14 sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-purple/15 blur-3xl"
          />

          <div className="relative flex flex-col gap-6">
            <h2
              id="final-cta-title"
              className="max-w-2xl text-2xl font-semibold text-ink sm:text-3xl lg:text-4xl"
            >
              Have a problem worth automating?
            </h2>

            <p className="max-w-xl text-base leading-relaxed text-ink-secondary">
              {SITE_CORE_MESSAGE} Describe the workflow and I&apos;ll tell you honestly what an
              agent can and cannot do about it.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" size="lg">
                Start a project
                <ArrowUpRightIcon className="text-[1.1rem]" />
              </Button>
              <Button href="/work" variant="outline" size="lg">
                Review previous work
                <ArrowRightIcon className="text-[1.1rem]" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
