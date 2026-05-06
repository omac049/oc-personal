import Link from 'next/link';

export default function NotFound() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center px-6"
      style={{ backgroundColor: 'var(--color-black)' }}
    >
      <h1
        className="font-serif text-8xl md:text-[10rem]"
        style={{ color: 'var(--color-white)' }}
      >
        404
      </h1>

      <p className="mt-4 text-lg" style={{ color: 'var(--color-muted)' }}>
        This page doesn&apos;t exist.
      </p>

      <Link
        href="/"
        className="group mt-8 inline-flex items-center gap-2 text-sm font-medium"
        style={{ color: 'var(--color-accent)' }}
      >
        Back to home
        <span className="inline-block transition-transform duration-150 group-hover:translate-x-1">→</span>
      </Link>
    </main>
  );
}
