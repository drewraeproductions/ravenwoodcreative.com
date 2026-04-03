import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#050508",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "3rem 0 2rem",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex flex-col leading-none mb-3">
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  color: "#ffffff",
                }}
              >
                RAVENWOOD
              </span>
              <span
                style={{
                  fontSize: "0.55rem",
                  fontWeight: 500,
                  letterSpacing: "0.25em",
                  color: "var(--gold)",
                }}
              >
                CREATIVE
              </span>
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", maxWidth: 220 }}>
              Story-driven video production for brands that mean business.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-12">
            <div>
              <p
                style={{
                  fontSize: "0.65rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: "0.75rem",
                  fontWeight: 600,
                }}
              >
                Navigate
              </p>
              <div className="flex flex-col gap-2">
                {[
                  { href: "/", label: "Home" },
                  { href: "/services", label: "Services" },
                  { href: "/work", label: "Work" },
                  { href: "/contact", label: "Contact" },
                ].map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    style={{
                      color: "rgba(255,255,255,0.5)",
                      fontSize: "0.8rem",
                      textDecoration: "none",
                    }}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p
                style={{
                  fontSize: "0.65rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: "0.75rem",
                  fontWeight: 600,
                }}
              >
                Contact
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="mailto:drew@ravenwoodcreative.com"
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "0.8rem",
                    textDecoration: "none",
                  }}
                >
                  drew@ravenwoodcreative.com
                </a>
                <a
                  href="tel:4355923972"
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "0.8rem",
                    textDecoration: "none",
                  }}
                >
                  (435) 592-3972
                </a>
                <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.8rem" }}>
                  Available Nationwide
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          <p style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}>
            © {new Date().getFullYear()} Ravenwood Creative LLC. All rights reserved.
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}>
            Nationwide · 12 years of cinematic production
          </p>
        </div>
      </div>
    </footer>
  );
}
