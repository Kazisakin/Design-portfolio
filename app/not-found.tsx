import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-6 text-ink">
      <div className="text-center">
        <p className="inline-block rounded-md bg-accent px-2 py-0.5 font-display text-sm font-bold">404</p>
        <h1 className="mt-3 font-display text-6xl font-semibold tracking-tight">Page not found</h1>
        <p className="mt-4 text-ink/60">This page doesn&apos;t exist or has moved.</p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-ink px-7 py-3 text-sm font-semibold text-cream hover:bg-accent hover:text-ink">
          Back to home
        </Link>
      </div>
    </div>
  );
}
