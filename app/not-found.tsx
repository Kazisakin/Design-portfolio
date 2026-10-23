import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="wrap flex min-h-[80vh] flex-col justify-center pt-24">
      <p className="label">404</p>
      <h1 className="t-display mt-6">Page not found</h1>
      <p className="t-body mt-6">This page doesn&apos;t exist or has moved.</p>
      <Link href="/" className="btn mt-10 w-fit">
        Back to home
      </Link>
    </div>
  );
}
