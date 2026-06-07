import type { Metadata } from "next";
import Link from "next/link";
import { contactEmail, smsNumber, SmsShell } from "../SmsPage";

export const metadata: Metadata = {
  title: "Patty Declau SMS Terms and Conditions",
  description:
    "Terms and conditions for the Patty Declau SMS assistant program.",
};

export default function SmsTermsPage() {
  return (
    <SmsShell
      kicker="Last updated: June 7, 2026"
      title="SMS Terms and Conditions"
    >
      <h2>Program Description</h2>
      <p>
        Patty Declau sends low-volume SMS messages for personal assistant
        coordination, reminders, status updates, and direct replies to people
        who have asked to communicate by text.
      </p>

      <h2>Opt-In</h2>
      <p>
        Recipients consent to receive messages by directly asking Patty Declau
        or Pat Cullen to text them, by providing their mobile number for this
        specific assistant communication, or by initiating a text conversation
        with Patty Declau at {smsNumber}. Consent is not a condition of
        purchasing goods or services.
      </p>

      <h2>Message Frequency</h2>
      <p>
        Message frequency varies based on the recipient&apos;s requests and
        active conversation. Message and data rates may apply.
      </p>

      <h2>Opt-Out and Help</h2>
      <p>
        <strong>Reply STOP to cancel SMS messages.</strong>{" "}
        <strong>Reply HELP for help.</strong> You can also email{" "}
        <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
      </p>

      <h2>Carrier Liability</h2>
      <p>Carriers are not liable for delayed or undelivered messages.</p>

      <h2>Privacy</h2>
      <p>
        Mobile numbers, SMS consent records, text messaging originator opt-in
        data, and mobile opt-in consent will not be sold, rented, shared, or
        provided to third parties or affiliates for marketing or promotional
        purposes. See the{" "}
        <Link href="/sms/privacy">SMS Privacy Policy</Link>.
      </p>

      <h2>Contact</h2>
      <p>
        Email: <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
      </p>
    </SmsShell>
  );
}
