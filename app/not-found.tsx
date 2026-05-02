import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="font-display text-4xl text-primary">Page not found</h1>
      <p className="mt-4 max-w-md text-textSecondary">
        The page you’re looking for doesn’t exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-pill bg-accent px-8 py-3 font-medium text-white shadow-soft hover:brightness-105"
      >
        Back to home
      </Link>
    </div>
  );
}
