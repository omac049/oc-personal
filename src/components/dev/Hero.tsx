const CURRENTLY_EXPLORING = 'How LLMs reshape citation authority';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <p
          className="mb-6 text-xs font-medium uppercase tracking-[0.2em] animate-[fadeUp_0.5s_0.2s_both_cubic-bezier(0.23,1,0.32,1)]"
          style={{ color: 'var(--color-accent)' }}
        >
          12 years in search. Still in the arena.
        </p>

        <h1 id="hero-heading">
          <span
            className="font-serif block text-5xl leading-tight md:text-7xl lg:text-8xl animate-[fadeUp_0.5s_0.4s_both_cubic-bezier(0.23,1,0.32,1)]"
            style={{ color: 'var(--color-white)' }}
          >
            Search is evolving.
          </span>
          <span
            className="font-serif block text-5xl leading-tight md:text-7xl lg:text-8xl animate-[fadeUp_0.5s_0.5s_both_cubic-bezier(0.23,1,0.32,1)]"
            style={{ color: 'var(--color-white)' }}
          >
            I&apos;m evolving with it
            <span style={{ color: 'var(--color-accent)' }}>.</span>
          </span>
        </h1>

        <p
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed animate-[fadeUp_0.5s_0.6s_both_cubic-bezier(0.23,1,0.32,1)]"
          style={{ color: 'var(--color-muted)' }}
        >
          From algorithm updates to AI Overviews — I&apos;ve spent a career
          helping brands get found, cited, and grown through organic search. Now
          I&apos;m building the tools and frameworks for what comes next.
        </p>

        <div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center animate-[fadeUp_0.5s_0.8s_both_cubic-bezier(0.23,1,0.32,1)]"
        >
          <a
            href="#proof"
            className="inline-flex items-center rounded-sm px-8 py-3 text-sm font-semibold uppercase tracking-wider transition-[transform,filter] duration-150 ease-out hover:brightness-110 active:scale-[0.97]"
            style={{
              backgroundColor: 'var(--color-accent)',
              color: 'var(--color-black)',
            }}
          >
            See the work
          </a>
          <a
            href="/seo-resources/"
            className="inline-flex items-center rounded-sm border px-8 py-3 text-sm font-semibold uppercase tracking-wider transition-[transform,background-color] duration-150 ease-out hover:bg-white/5 active:scale-[0.97]"
            style={{
              borderColor: 'var(--color-white)',
              color: 'var(--color-white)',
            }}
          >
            Read the playbook
          </a>
        </div>
      </div>

      <p
        className="absolute bottom-8 left-1/2 z-10 w-full max-w-xs -translate-x-1/2 px-6 text-center text-xs leading-relaxed animate-[fadeUp_0.5s_1.0s_both_cubic-bezier(0.23,1,0.32,1)] sm:max-w-md"
        style={{ color: 'var(--color-muted)' }}
      >
        <span className="block font-medium uppercase tracking-[0.2em] sm:inline">
          Currently exploring:
        </span>
        <span className="sm:ml-1">{CURRENTLY_EXPLORING}</span>
      </p>
    </section>
  );
}
