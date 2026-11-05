"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/ui/container";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Route error:", error.message);
  }, [error]);

  return (
    <Section divided={false} className="pt-20 sm:pt-28">
      <Container className="flex max-w-2xl flex-col gap-6">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-danger">Error</p>
        <h1 className="text-3xl font-semibold text-ink sm:text-4xl">Something went wrong</h1>
        <p className="text-base leading-relaxed text-ink-secondary">
          This section failed to render. You can retry, or head back to the home page. If it keeps
          happening, please get in touch.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button type="button" onClick={reset} size="lg">
            Try again
          </Button>
          <Button href="/" variant="secondary" size="lg">
            Back home
          </Button>
        </div>
      </Container>
    </Section>
  );
}
