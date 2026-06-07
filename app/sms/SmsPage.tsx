import Link from "next/link";

const contactEmail = "pattydeclau@gmail.com";
const smsNumber = "+1 260-300-7268";

export function SmsShell({
  children,
  kicker,
  title,
}: {
  children: React.ReactNode;
  kicker: string;
  title: string;
}) {
  return (
    <main className="min-h-screen bg-[#f7f7f4] text-[#1d2433]">
      <section className="mx-auto max-w-3xl px-5 py-10 sm:px-8 sm:py-14">
        <header className="border-b border-[#d6d8d1] pb-5">
          <p className="font-mono text-xs uppercase tracking-normal text-[#8a5540]">
            {kicker}
          </p>
          <h1 className="mt-3 text-4xl font-black leading-tight tracking-normal sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#4b5463]">
            Patty Declau uses SMS from {smsNumber} for low-volume,
            person-requested assistant messages.
          </p>
        </header>

        <div className="policy-copy py-8">{children}</div>

        <footer className="border-t border-[#d6d8d1] pt-5 text-sm leading-6 text-[#4b5463]">
          <p>
            Contact:{" "}
            <a className="text-[#0b5cab] underline" href={`mailto:${contactEmail}`}>
              {contactEmail}
            </a>
          </p>
          <p className="mt-2">
            <Link className="text-[#0b5cab] underline" href="/sms">
              Patty Declau SMS Assistant
            </Link>
          </p>
        </footer>
      </section>
    </main>
  );
}

export { contactEmail, smsNumber };
