import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ravenwood Creative — Video Production & Story-Driven Content",
};

const services = [
  {
    icon: "🎬",
    title: "Customer Case Studies",
    desc: "Your customers' success stories, told on screen. 60–90 second narrative videos that convert prospects into believers.",
    href: "/services#case-study",
  },
  {
    icon: "🏢",
    title: "Corporate Events",
    desc: "Full event coverage with same-day highlight reels. Conferences, product launches, team milestones.",
    href: "/services#events",
  },
  {
    icon: "📱",
    title: "Social Media Content",
    desc: "Consistent, scroll-stopping video content built for Reels, TikTok, and LinkedIn — powered by our in-house team.",
    href: "/services#social",
  },
  {
    icon: "📣",
    title: "Paid Social Ads",
    desc: "Meta and Instagram ad campaigns backed by performance data and compelling creative. Strategy + execution.",
    href: "/services#ads",
  },
];

const stats = [
  { value: "12", label: "Years of Experience" },
  { value: "100+", label: "Videos Produced" },
  { value: "4", label: "Core Services" },
  { value: "Utah", label: "Based & Available Nationally" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          padding: "8rem 1.5rem 4rem",
        }}
      >
        {/* Background radial glow */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 800,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse at center, rgba(212,168,83,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", maxWidth: 800 }}>
          {/* Eyebrow */}
          <p
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--gold)",
              fontWeight: 600,
              marginBottom: "1.5rem",
            }}
          >
            Ravenwood Creative · National Video Production
          </p>

          {/* Headline */}
          <h1
            style={{
              fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
              color: "#ffffff",
            }}
          >
            Stories That
            <br />
            <span className="text-gold-gradient">Move People.</span>
          </h1>

          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              color: "var(--text-secondary)",
              maxWidth: 560,
              margin: "0 auto 2.5rem",
              lineHeight: 1.7,
            }}
          >
            We craft cinematic customer case study videos, event coverage, and
            social content that helps brands grow — anywhere in the country. 12 years of production
            experience behind every frame.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/services" className="btn-primary">
              See Our Packages
            </Link>
            <Link href="/work" className="btn-outline">
              View Our Work
            </Link>
          </div>
        </div>

        {/* Reel placeholder */}
        <div
          style={{
            marginTop: "5rem",
            width: "100%",
            maxWidth: 900,
            aspectRatio: "16/9",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            position: "relative",
            overflow: "hidden",
          }}
          className="glass-card"
        >
          {/* Subtle grid lines */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          {/* Play button */}
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              border: "2px solid var(--gold)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              zIndex: 1,
            }}
          >
            <div
              style={{
                width: 0,
                height: 0,
                borderTop: "14px solid transparent",
                borderBottom: "14px solid transparent",
                borderLeft: "24px solid var(--gold)",
                marginLeft: 4,
              }}
            />
          </div>
          <p
            style={{
              color: "rgba(255,255,255,0.3)",
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              position: "relative",
              zIndex: 1,
            }}
          >
            Showreel Coming Soon
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section
        style={{
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          padding: "2rem 1.5rem",
          background: "rgba(255,255,255,0.02)",
        }}
      >
        <div
          className="max-w-6xl mx-auto"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "1.5rem",
            textAlign: "center",
          }}
        >
          {stats.map((s) => (
            <div key={s.label}>
              <p
                className="text-gold-gradient"
                style={{ fontSize: "2rem", fontWeight: 800, lineHeight: 1 }}
              >
                {s.value}
              </p>
              <p
                style={{
                  fontSize: "0.7rem",
                  color: "var(--text-muted)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginTop: "0.4rem",
                }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Services overview */}
      <section style={{ padding: "6rem 1.5rem" }}>
        <div className="max-w-6xl mx-auto">
          <div style={{ marginBottom: "3.5rem" }}>
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
              What We Do
            </p>
            <div className="divider" style={{ marginBottom: "1.5rem" }} />
            <h2
              style={{
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                fontWeight: 700,
                color: "#ffffff",
                maxWidth: 500,
                lineHeight: 1.2,
              }}
            >
              Production built for real{" "}
              <span className="text-gold-gradient">business results</span>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                style={{ textDecoration: "none" }}
              >
                <div
                  className="glass-card card-hover"
                  style={{
                    padding: "2rem",
                    borderRadius: 4,
                    height: "100%",
                    cursor: "pointer",
                  }}
                >
                  <div style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>
                    {s.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: "#ffffff",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "0.875rem",
                      lineHeight: 1.7,
                    }}
                  >
                    {s.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section
        style={{
          padding: "5rem 1.5rem",
          background:
            "linear-gradient(135deg, rgba(212,168,83,0.06) 0%, rgba(10,10,15,0) 100%)",
          borderTop: "1px solid var(--border-gold)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <p
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--gold)",
              fontWeight: 600,
              marginBottom: "1rem",
            }}
          >
            Ready to tell your story?
          </p>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 700,
              color: "#ffffff",
              marginBottom: "1.25rem",
              lineHeight: 1.2,
            }}
          >
            Let&apos;s build something your customers will remember.
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "1rem",
              marginBottom: "2rem",
              lineHeight: 1.7,
            }}
          >
            From single case study videos to full monthly content programs —
            we&apos;ll find the right package for your goals.
          </p>
          <Link href="/contact" className="btn-primary">
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
