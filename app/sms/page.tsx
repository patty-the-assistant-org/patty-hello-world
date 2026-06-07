import type { Metadata } from "next";
import Link from "next/link";
import { contactEmail, smsNumber, SmsShell } from "./SmsPage";

export const metadata: Metadata = {
  title: "Patty Declau SMS Assistant",
  description:
    "SMS program description, opt-in details, privacy policy, and terms for Patty Declau.",
};

export default function SmsPage() {
  return (
    <SmsShell kicker="SMS program" title="Patty Declau SMS Assistant">
      <section className="rounded-md border border-[#d6d8d1] bg-white p-5">
        <p>
          <strong>SMS program:</strong> personal assistant coordination,
          reminders, status updates, and direct replies to people who have asked
          to communicate by text.
        </p>
        <p>
          <strong>Consent:</strong> recipients opt in by directly asking Patty
          Declau or Pat Cullen to text them, by providing their mobile number
          for this specific assistant communication, or by initiating a text
          conversation with Patty at {smsNumber}.
        </p>
        <p>
          <strong>Frequency:</strong> message frequency varies based on the
          conversation. Message and data rates may apply. Reply STOP to opt out.
          Reply HELP for help.
        </p>
      </section>

      <h2>Policies</h2>
      <p>
        <Link href="/sms/privacy">Privacy Policy</Link>
      </p>
      <p>
        <Link href="/sms/terms">SMS Terms and Conditions</Link>
      </p>

      <h2>Contact</h2>
      <p>
        Email: <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
      </p>
    </SmsShell>
  );
}
