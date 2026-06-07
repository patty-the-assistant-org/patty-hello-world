import Image from "next/image";

const details = [
  "Next.js 16",
  "React 19",
  "Tailwind CSS v4",
  "Vercel-ready",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f4ef] text-[#171717]">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-8 sm:px-10 lg:px-12">
        <nav className="flex items-center justify-between gap-4 text-sm font-medium">
          <a className="flex items-center gap-3" href="https://nextjs.org">
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js"
              width={92}
              height={19}
              priority
            />
            <span className="hidden h-5 w-px bg-black/20 sm:block" />
            <span className="hidden text-black/60 sm:inline">
              Built with the latest stack
            </span>
          </a>
          <a
            className="inline-flex h-10 items-center gap-2 rounded-md border border-black/15 bg-white px-3 text-black transition hover:border-black/30"
            href="https://vercel.com"
          >
            <Image src="/vercel.svg" alt="" width={16} height={16} />
            Vercel
          </a>
        </nav>

        <div className="grid flex-1 items-center gap-12 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:py-10">
          <div className="max-w-3xl">
            <p className="mb-5 font-mono text-sm uppercase tracking-[0.16em] text-[#007f73]">
              Patty says
            </p>
            <h1 className="text-6xl font-semibold leading-[0.95] tracking-normal text-black sm:text-7xl lg:text-8xl">
              Hello, World.
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-black/68 sm:text-2xl sm:leading-9">
              A tiny site with modern Next.js defaults, a real build, and a
              deploy path wired through the new GitHub org.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              {details.map((detail) => (
                <span
                  className="rounded-md border border-black/12 bg-white/70 px-3 py-2 text-sm font-medium text-black/75"
                  key={detail}
                >
                  {detail}
                </span>
              ))}
            </div>
          </div>

          <div className="relative min-h-[340px] lg:min-h-[520px]">
            <div className="absolute inset-0 rounded-md border border-black/10 bg-[#111] shadow-2xl shadow-black/15" />
            <div className="absolute inset-5 overflow-hidden rounded-md bg-[#fdfaf5]">
              <div className="flex h-full flex-col justify-between p-6 sm:p-8">
                <div className="flex items-center justify-between border-b border-black/10 pb-4 font-mono text-xs uppercase tracking-[0.12em] text-black/55">
                  <span>app/page.tsx</span>
                  <span>ready</span>
                </div>
                <pre className="whitespace-pre-wrap font-mono text-base leading-8 text-black sm:text-lg">
                  <code>{`export default function Home() {
  return <h1>Hello, World.</h1>;
}`}</code>
                </pre>
                <div className="flex items-end justify-between gap-4 border-t border-black/10 pt-4">
                  <p className="max-w-[13rem] text-sm leading-6 text-black/58">
                    Simple on purpose. The deploy can do the talking.
                  </p>
                  <Image
                    src="/globe.svg"
                    alt=""
                    width={92}
                    height={92}
                    className="opacity-70"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
