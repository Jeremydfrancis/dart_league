"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/standings", label: "Standings" },
  //   { href: "/leaders", label: "Leaderboard" },
  //   { href: "/schedule", label: "Schedule" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="border-b border-neutral-800 bg-neutral-950">
      <div className="flex justify-center">
        <div className="flex w-full max-w-[1200px] items-center justify-between px-6 py-4">
          {/* Brand */}
          <Link
            href="/"
            className="font-mono text-lg font-bold tracking-tight text-white"
          >
            Derrick Music <span className="text-red-600">Darts</span>
          </Link>

          {/* Links */}
          <div className="flex gap-6 font-mono text-sm">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    active
                      ? "text-white"
                      : "text-neutral-400 transition-colors hover:text-white"
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
