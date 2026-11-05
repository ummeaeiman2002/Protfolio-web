import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { connection } from "next/server";
import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";
import { isSanityConfigured } from "@/lib/sanity/env";

export const metadata: Metadata = {
  title: "Studio",
  robots: { index: false, follow: false },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
} as const;

async function DynamicMarker() {
  return (
    <Suspense>
      <Connection />
    </Suspense>
  );
}

async function Connection() {
  await connection();
  return null;
}

function StudioNotConfigured() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col justify-center gap-4 px-6 py-16">
      <h1 className="text-2xl font-semibold text-ink">Studio is not configured</h1>
      <p className="text-sm leading-relaxed text-ink-muted">
        Set <code className="font-mono">NEXT_PUBLIC_SANITY_PROJECT_ID</code> (and, if needed,{" "}
        <code className="font-mono">NEXT_PUBLIC_SANITY_DATASET</code>) in{" "}
        <code className="font-mono">.env.local</code>, then restart the dev server to open the
        content Studio here.
      </p>
      <Link className="text-sm font-medium text-accent underline-offset-4 hover:underline" href="/">
        Back to the site
      </Link>
    </main>
  );
}

export default function StudioPage() {
  return (
    <>
      <DynamicMarker />
      {isSanityConfigured ? <NextStudio config={config} /> : <StudioNotConfigured />}
    </>
  );
}
