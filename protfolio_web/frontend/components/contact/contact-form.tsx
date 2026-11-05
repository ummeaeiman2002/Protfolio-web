"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form-field";
import { AlertIcon, ArrowRightIcon, MailIcon } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { Notice } from "@/components/ui/notice";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CONTACT } from "@/data/site";
import {
  BUDGET_RANGES,
  INQUIRY_LIMITS,
  PROJECT_TYPES,
  hasErrors,
  validateInquiry,
  type InquiryErrors,
  type InquiryValues,
} from "@/lib/validation";

const INITIAL_VALUES: InquiryValues = {
  name: "",
  email: "",
  projectType: "",
  budgetRange: "not_sure",
  message: "",
};

const FIELD_ORDER: (keyof InquiryValues)[] = ["name", "email", "projectType", "message"];

const FIELD_IDS: Record<keyof InquiryValues, string> = {
  name: "inquiry-name",
  email: "inquiry-email",
  projectType: "inquiry-project-type",
  budgetRange: "inquiry-budget-range",
  message: "inquiry-message",
};

function optionLabel(
  options: readonly { value: string; label: string }[],
  value: string,
): string {
  return options.find((option) => option.value === value)?.label ?? "Not specified";
}

function buildMailto(values: InquiryValues): string {
  const name = values.name.trim();
  const subject = `Project inquiry — ${name}`;

  const body = [
    `Name: ${name}`,
    `Email: ${values.email.trim()}`,
    `Project type: ${optionLabel(PROJECT_TYPES, values.projectType)}`,
    `Budget: ${optionLabel(BUDGET_RANGES, values.budgetRange)}`,
    "",
    values.message.trim(),
  ].join("\n");

  return `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function ContactForm() {
  const [values, setValues] = useState<InquiryValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [mailtoHref, setMailtoHref] = useState<string | null>(null);

  function setValue<K extends keyof InquiryValues>(key: K, value: InquiryValues[K]) {
    setValues((previous) => ({ ...previous, [key]: value }));
    setErrors((previous) => {
      if (!previous[key]) return previous;
      const next = { ...previous };
      delete next[key];
      return next;
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationErrors = validateInquiry(values);
    if (hasErrors(validationErrors)) {
      setErrors(validationErrors);
      setFormError("Check the highlighted fields before composing the email.");
      setMailtoHref(null);

      const firstInvalid = FIELD_ORDER.find((key) => validationErrors[key]);
      if (firstInvalid) {
        document.getElementById(FIELD_IDS[firstInvalid])?.focus();
      }
      return;
    }

    setErrors({});
    setFormError(null);

    const href = buildMailto(values);
    setMailtoHref(href);
    window.location.href = href;
  }

  if (mailtoHref) {
    return (
      <div
        role="status"
        className="flex flex-col gap-4 rounded-xl border border-border bg-surface/60 p-6"
      >
        <p className="inline-flex items-center gap-2 text-base font-semibold text-ink">
          <MailIcon className="text-[1.25rem] text-purple-soft" />
          Your email app should be open
        </p>
        <p className="text-sm leading-relaxed text-ink-secondary">
          Nothing has been sent yet. Your details were filled into a new message — review it and
          send it from your own email app to reach me. This site does not send or store anything.
        </p>
        <p className="text-sm text-ink-secondary">
          Did nothing open?{" "}
          <a
            href={mailtoHref}
            className="font-medium text-purple-soft underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple"
          >
            Open the message again
          </a>{" "}
          or email{" "}
          <a
            href={`mailto:${CONTACT.email}`}
            className="font-medium text-purple-soft underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple"
          >
            {CONTACT.email}
          </a>{" "}
          directly.
        </p>
        <Button variant="secondary" size="sm" className="self-start" onClick={() => setMailtoHref(null)}>
          Edit details
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {formError ? (
        <p
          role="alert"
          className="inline-flex items-start gap-2 rounded-lg border border-danger/50 bg-danger/10 px-3.5 py-3 text-sm text-danger"
        >
          <AlertIcon className="mt-0.5 shrink-0 text-[1.1rem]" />
          <span>{formError}</span>
        </p>
      ) : null}

      <FormField
        id={FIELD_IDS.name}
        label="Name"
        required
        error={errors.name}
        className="sm:max-w-md"
      >
        {(field) => (
          <Input
            id={field.id}
            name="name"
            autoComplete="name"
            required
            value={values.name}
            aria-invalid={field.invalid}
            aria-describedby={field.describedBy}
            onChange={(event) => setValue("name", event.target.value)}
          />
        )}
      </FormField>

      <FormField
        id={FIELD_IDS.email}
        label="Email"
        required
        error={errors.email}
        description="Used only to reply to this inquiry."
        className="sm:max-w-md"
      >
        {(field) => (
          <Input
            id={field.id}
            name="email"
            type="email"
            autoComplete="email"
            required
            value={values.email}
            aria-invalid={field.invalid}
            aria-describedby={field.describedBy}
            onChange={(event) => setValue("email", event.target.value)}
          />
        )}
      </FormField>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField
          id={FIELD_IDS.projectType}
          label="Project type"
          required
          error={errors.projectType}
        >
          {(field) => (
            <Select
              id={field.id}
              name="projectType"
              required
              value={values.projectType}
              aria-invalid={field.invalid}
              aria-describedby={field.describedBy}
              onChange={(event) =>
                setValue("projectType", event.target.value as InquiryValues["projectType"])
              }
            >
              <option value="">Select a project type</option>
              {PROJECT_TYPES.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
          )}
        </FormField>

        <FormField id={FIELD_IDS.budgetRange} label="Budget range" error={errors.budgetRange}>
          {(field) => (
            <Select
              id={field.id}
              name="budgetRange"
              value={values.budgetRange}
              aria-invalid={field.invalid}
              aria-describedby={field.describedBy}
              onChange={(event) =>
                setValue("budgetRange", event.target.value as InquiryValues["budgetRange"])
              }
            >
              {BUDGET_RANGES.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
          )}
        </FormField>
      </div>

      <FormField
        id={FIELD_IDS.message}
        label="Project details"
        required
        error={errors.message}
        description={`At least ${INQUIRY_LIMITS.message.min} characters, up to ${INQUIRY_LIMITS.message.max}.`}
      >
        {(field) => (
          <Textarea
            id={field.id}
            name="message"
            required
            value={values.message}
            aria-invalid={field.invalid}
            aria-describedby={field.describedBy}
            placeholder="What does the workflow look like today, and what should change?"
            onChange={(event) => setValue("message", event.target.value)}
          />
        )}
      </FormField>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" size="lg">
          Compose email
          <ArrowRightIcon className="text-[1.1rem]" />
        </Button>
        <p className="text-xs text-ink-muted">
          Your details are checked here, then opened in your own email app.
        </p>
      </div>

      <Notice>
        This form does not send or store messages. It opens your email app with the details filled
        in, so nothing leaves your device until you choose to send it.
      </Notice>
    </form>
  );
}
