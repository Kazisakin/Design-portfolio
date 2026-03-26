import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-4">404</p>
        <h1 className="font-display font-extrabold text-6xl text-white mb-4">Page Not Found</h1>
        <p className="text-white/40 mb-8">That page doesn&apos;t exist or was moved.</p>
        <Link href="/" className="inline-flex items-center gap-2 px-7 py-3 bg-accent hover:bg-accent-dark text-white font-semibold rounded-full transition-colors text-sm">
          Go Home
        </Link>
      </div>
    </div>
  );
}
