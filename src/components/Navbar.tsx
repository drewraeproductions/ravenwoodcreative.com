"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background:
          "linear-gradient(to bottom, rgba(10,10,15,0.95) 0%, rgba(10,10,15,0.8) 100%)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex flex-col leading-none">
          <span
            style={{
              fontSize: "1.1rem",
              fontWeight: 700,
              letterSpacing: "0.18em",
              color: "#ffffff",
            }}
          >
            RAVENWOOD
          </span>
          <span
            style={{
              fontSize: "0.6rem",
              fontWeight: 500,
              letterSpacing: "0.25em",
              color: "var(--gold)",
              marginTop: "-1px",
            }}
          >
            CREATIVE
          </span>
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: "0.8rem",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color:
                  pathname === link.href
                    ? "var(--gold)"
                    : "rgba(255,255,255,0.65)",
                transition: "color 0.2s ease",
                textDecoration: "none",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,1)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color =
                  pathname === link.href
                    ? "var(--gold)"
                    : "rgba(255,255,255,0.65)")
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="btn-primary hidden md:inline-flex"
          style={{ fontSize: "0.75rem", padding: "0.625rem 1.25rem" }}
        >
          Get a Quote
        </Link>

        {/* Mobile menu placeholder */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span
            style={{
              width: 22,
              height: 1.5,
              background: "rgba(255,255,255,0.8)",
              display: "block",
            }}
          />
          <span
            style={{
              width: 16,
              height: 1.5,
              background: "var(--gold)",
              display: "block",
            }}
          />
          <span
            style={{
              width: 22,
              height: 1.5,
              background: "rgba(255,255,255,0.8)",
              display: "block",
            }}
          />
        </button>
      </div>
    </header>
  );
}
