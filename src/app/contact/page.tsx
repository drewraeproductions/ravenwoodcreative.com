import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Ravenwood Creative. Request a quote for case study video production, event coverage, social content, or paid ads management.",
};

const contactInfo = [
  {
    label: "Email",
    value: "drew@ravenwoodcreative.com",
    href: "mailto:drew@ravenwoodcreative.com",
  },
  {
    label: "Phone",
    value: "(435) 592-3972",
    href: "tel:4355923972",
  },
  {
    label: "Location",
    value: "Kearns, Utah (Salt Lake City area)",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <div style={{ paddingTop: "6rem" }}>
      <section style={{ padding: "4rem 1.5rem 6rem", position: "relative" }}>
        {/* Background glow */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: 700,
            height: 400,
            background:
              "radial-gradient(ellipse at top, rgba(212,168,83,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          className="max-w-6xl mx-auto"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.6fr",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          {/* Left: heading + contact info */}
          <div>
            <p
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "var(--gold)",
                fontWeight: 600,
                marginBottom: "0.75rem",
              }}
            >
              Get In Touch
            </p>
            <div className="divider" style={{ marginBottom: "1.5rem" }} />
            <h1
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1.15,
                marginBottom: "1.25rem",
              }}
            >
              Let&apos;s make something{" "}
              <span className="text-gold-gradient">worth watching.</span>
            </h1>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.95rem",
                lineHeight: 1.75,
                marginBottom: "2.5rem",
              }}
            >
              Tell us about your project and we&apos;ll get back to you within
              one business day. No fluff, no hard sell — just a straightforward
              conversation about what we can build together.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {contactInfo.map((info) => (
                <div key={info.label}>
                  <p
                    style={{
                      fontSize: "0.65rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                      fontWeight: 600,
                      marginBottom: "0.2rem",
                    }}
                  >
                    {info.label}
                  </p>
                  {info.href ? (
                    <a
                      href={info.href}
                      style={{
                        color: "rgba(255,255,255,0.8)",
                        fontSize: "0.9rem",
                        textDecoration: "none",
                      }}
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p
                      style={{
                        color: "rgba(255,255,255,0.8)",
                        fontSize: "0.9rem",
                      }}
                    >
                      {info.value}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Turnaround note */}
            <div
              className="glass-card"
              style={{
                marginTop: "2.5rem",
                padding: "1.25rem 1.5rem",
                borderRadius: 4,
                borderColor: "rgba(212,168,83,0.15)",
              }}
            >
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "var(--gold)",
                  fontWeight: 600,
                  marginBottom: "0.3rem",
                }}
              >
                ⚡ Fast Response
              </p>
              <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                We typically respond within 24 hours on business days. For
                urgent event coverage, call directly.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
