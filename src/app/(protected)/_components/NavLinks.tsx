"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLinks() {
  const pathname = usePathname();

  const links = [
    { href: "/dashboard", label: "Labeling" },
    { href: "/models", label: "Models" },
  ];

  return (
    <>
      {links.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm font-medium transition ${
              isActive ? "text-blue-600" : "text-gray-500 hover:text-gray-900"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );
}