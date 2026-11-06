import { Card } from "@/components/ui/card";
import { MailIcon } from "@/components/ui/icons";
import { Notice } from "@/components/ui/notice";
import { PLACEHOLDER_NOTICE, RESUME_LABEL } from "@/data/site";
import { isPlaceholderEmail } from "@/lib/utils";

const AFTER_SENDING = [
  "The form opens your own email app with the details filled in.",
  "Nothing is sent or stored by this site — you send the email yourself.",
  "You get a reply at the email address you provide. No newsletter, no third-party sharing.",
];

export function ContactMethods({
  email,
  socials,
  location,
  resumeUrl,
}: {
  email: string;
  socials: { label: string; href: string }[];
  location: string | null;
  resumeUrl: string | null;
}) {
  const emailIsPlaceholder = isPlaceholderEmail(email);

  return (
    <div className="flex flex-col gap-5">
      <Card className="flex flex-col gap-4">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">Email</h2>
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center gap-2 text-base text-ink transition-colors hover:text-purple-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple"
        >
          <MailIcon className="text-[1.15rem] text-purple-soft" />
          {email}
        </a>

        {location ? <p className="text-sm text-ink-muted">{location}</p> : null}

        {socials.length > 0 || resumeUrl ? (
          <ul className="flex flex-col gap-2 border-t border-border pt-4">
            {resumeUrl ? (
              <li>
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink-secondary transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple"
                >
                  {RESUME_LABEL}
                </a>
              </li>
            ) : null}
            {socials.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink-secondary transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        ) : null}

        {emailIsPlaceholder ? <Notice>{PLACEHOLDER_NOTICE}</Notice> : null}
      </Card>

      <Card className="flex flex-col gap-4">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
          After you send
        </h2>
        <ul className="flex flex-col gap-2.5">
          {AFTER_SENDING.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-secondary">
              <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-purple/70" />
              {item}
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
