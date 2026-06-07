import type { Metadata } from "next";
import { contactEmail, smsNumber, SmsShell } from "../SmsPage";

export const metadata: Metadata = {
  title: "Patty Declau SMS Privacy Policy",
  description: "Privacy policy for the Patty Declau SMS assistant program.",
};

export default function SmsPrivacyPage() {
  return (
    <SmsShell kicker="Last updated: June 7, 2026" title="SMS Privacy Policy">
      <p>
        Patty Declau operates a low-volume SMS assistant program from{" "}
        {smsNumber}. This policy explains how mobile information is collected,
        used, and protected for that SMS program.
      </p>

      <h2>Information Collected</h2>
      <p>
        We may collect a recipient&apos;s mobile phone number, message content,
        consent status, opt-out status, delivery metadata, and conversation
        history needed to provide assistant messages and replies.
      </p>

      <h2>How Information Is Used</h2>
      <p>
        Mobile information is used only to send and receive requested assistant
        messages, provide support, honor opt-out requests, maintain security,
        and comply with legal or carrier requirements.
      </p>

      <h2>No Sale or Marketing Sharing of Mobile Data</h2>
      <p>
        Mobile numbers, SMS consent records, text messaging originator opt-in
        data, and mobile opt-in consent will not be sold, rented, shared, or
        provided to third parties or affiliates for marketing or promotional
        purposes. Mobile opt-in data will not be shared with lead generators.
      </p>

      <h2>Service Providers</h2>
      <p>
        We use communications providers such as Twilio to deliver and manage SMS
        messages. These providers process mobile information only as needed to
        provide messaging services, prevent abuse, maintain compliance, or
        satisfy legal obligations.
      </p>

      <h2>Message Frequency and Charges</h2>
      <p>
        Message frequency varies based on the conversation and requests made by
        the recipient. Message and data rates may apply.
      </p>

      <h2>Choices and Opt Out</h2>
      <p>
        Reply STOP to opt out of SMS messages. Reply HELP for help. After
        opting out, no further non-essential SMS messages will be sent unless
        the recipient opts in again.
      </p>

      <h2>Contact</h2>
      <p>
        Email: <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
      </p>
    </SmsShell>
  );
}
