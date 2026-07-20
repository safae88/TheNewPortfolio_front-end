import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 px-6 py-10 md:px-10 lg:px-16 dark:border-neutral-800 dark:bg-neutral-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          © {new Date().getFullYear()} {profile.fullName}. All rights reserved.
        </p>

        <p className="text-sm text-neutral-400 dark:text-neutral-500">
          Designed & built with React, Tailwind & Framer Motion
        </p>
      </div>
    </footer>
  );
}