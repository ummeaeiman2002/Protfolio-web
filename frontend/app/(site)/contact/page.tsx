import { ContactForm } from "@/components/contact/contact-form";
import { ContactMethods } from "@/components/contact/contact-methods";
import { Container, Section } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Describe the workflow you want to automate. Project inquiries are validated and answered by Umm E Aeiman.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Section divided={false} className="pt-16 sm:pt-20 lg:pt-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          level="h1"
          label="Contact"
          headingId="contact-title"
          title="Tell me about the problem you want solved"
          description="Share what the workflow looks like today and what should change. I read every inquiry and reply by email."
        />

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <ContactForm />
          <ContactMethods />
        </div>
      </Container>
    </Section>
  );
}
