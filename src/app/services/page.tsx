import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Packages",
  description:
    "Video production packages from Ravenwood Creative — case study videos, event coverage, social content, and paid ads. Clear pricing, Utah-based team.",
};

const packages = [
  {
    id: "case-study",
    badge: "Most Popular",
    tier: "Case Study",
    price: "$2,500 – $4,000",
    cadence: "per project",
    tagline: "One powerful customer story, done right.",
    description:
      "We interview your happiest customer, capture authentic b-roll, and craft a polished 60–90 second narrative that proves your value to every future prospect.",
    includes: [
      "1 customer success story video (60–90 sec)",
      "Script development & interview prep",
      "On-location filming (interview + b-roll)",
      "Professional color grade",
      "Licensed music bed",
      "1 round of revisions",
      "Delivery in web-ready + broadcast formats",
    ],
    cta: "Book a Case Study",
    highlight: true,
  },
  {
    id: "showcase",
    badge: "Best Value",
    tier: "Showcase",
    price: "$4,500 – $6,500",
    cadence: "per project",
    tagline: "Everything in Case Study, amplified for social.",
    description:
      "Turn one case study into a full content suite. We cut your hero video down to social-optimized formats — ready for LinkedIn, Instagram, and your paid campaigns.",
    includes: [
      "Everything in Case Study, plus:",
      "3 social media cut-downs (15/30/60 sec)",
      "Optimized aspect ratios (9:16, 1:1, 16:9)",
      "Thumbnail & still assets",
      "Caption and copy suggestions",
      "2 rounds of revisions",
    ],
    cta: "Book a Showcase",
    highlight: false,
  },
  {
    id: "growth",
    badge: "Ongoing",
    tier: "Growth Program",
    price: "$2,000 – $3,500",
    cadence: "/ month",
    tagline: "A content engine running in the background.",
    description:
      "For brands ready to commit to consistent video. We handle production and paid distribution so you can focus on running your business.",
    includes: [
      "1 case study video per quarter",
      "Weekly social video content",
      "Meta & Instagram ads management",
      "Audience targeting strategy",
      "Monthly performance report",
      "Creative refresh every 90 days",
    ],
    cta: "Start a Growth Program",
    highlight: false,
  },
];

const eventFeatures = [
  "Full-day event coverage crew",
  "Highlight reel (2–4 min)",
  "Raw footage delivery",
  "Same-day turnaround available",
  "Live event b-roll & testimonials",
  "Custom package per event scope",
];

export default function ServicesPage() {
  return (
    <div style={{ paddingTop: "6rem" }}>
      {/* Header */}
      <section
        style={{
          padding: "4rem 1.5rem 3rem",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "0",
            left: "50%",
            transform: "translateX(-50%)",
            width: 600,
            height: 300,
            background:
              "radial-gradient(ellipse at top, rgba(212,168,83,0.07) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
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
          Packages & Pricing
        </p>
        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 800,
            color: "#ffffff",
            marginBottom: "1rem",
            lineHeight: 1.15,
          }}
        >
          Choose your{" "}
          <span className="text-gold-gradient">production level</span>
        </h1>
        <p
          style={{
            color: "var(--text-secondary)",
            fontSize: "1.05rem",
            maxWidth: 540,
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          Transparent pricing, no agency markup. Every package is built around
          what actually moves the needle for your business.
        </p>
      </section>

      {/* Main packages */}
      <section style={{ padding: "2rem 1.5rem 5rem" }}>
        <div
          className="max-w-6xl mx-auto"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
            alignItems: "start",
          }}
        >
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              id={pkg.id}
              className={pkg.highlight ? "glass-card-gold" : "glass-card"}
              style={{
                borderRadius: 4,
                overflow: "hidden",
                position: "relative",
              }}
            >
              {pkg.badge && (
                <div
                  style={{
                    background: pkg.highlight
                      ? "var(--gold)"
                      : "rgba(255,255,255,0.08)",
                    color: pkg.highlight ? "#0a0a0f" : "rgba(255,255,255,0.6)",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    padding: "0.4rem 1rem",
                    display: "inline-block",
                  }}
                >
                  {pkg.badge}
                </div>
              )}

              <div style={{ padding: "1.75rem 2rem 2rem" }}>
                <p
                  style={{
                    fontSize: "0.7rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    fontWeight: 600,
                    marginBottom: "0.35rem",
                  }}
                >
                  {pkg.tier}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "0.4rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "1.75rem",
                      fontWeight: 800,
                      color: "#ffffff",
                    }}
                  >
                    {pkg.price}
                  </span>
                  <span
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    {pkg.cadence}
                  </span>
                </div>

                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-secondary)",
                    fontStyle: "italic",
                    marginBottom: "1rem",
                  }}
                >
                  {pkg.tagline}
                </p>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: 1.7,
                    marginBottom: "1.5rem",
                  }}
                >
                  {pkg.description}
                </p>

                <div
                  style={{
                    borderTop: "1px solid var(--border)",
                    paddingTop: "1.25rem",
                    marginBottom: "1.75rem",
                  }}
                >
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {pkg.includes.map((item, i) => (
                      <li
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "0.6rem",
                          marginBottom: "0.6rem",
                          fontSize: "0.85rem",
                          color:
                            item.startsWith("Everything") ||
                            item.startsWith("All")
                              ? "var(--gold)"
                              : "rgba(255,255,255,0.7)",
                          fontStyle: item.includes("plus:") ? "italic" : "normal",
                        }}
                      >
                        <span
                          style={{
                            color: "var(--gold)",
                            marginTop: "0.15em",
                            flexShrink: 0,
                          }}
                        >
                          {item.startsWith("Everything") ? "↳" : "✓"}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/contact?service=${encodeURIComponent(pkg.tier)}`}
                  className={pkg.highlight ? "btn-primary" : "btn-outline"}
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  {pkg.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Corporate Events */}
      <section
        id="events"
        style={{
          padding: "4rem 1.5rem 5rem",
          background: "rgba(255,255,255,0.02)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3rem",
              alignItems: "center",
            }}
            className="flex flex-col md:grid"
          >
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
                Corporate Events
              </p>
              <div className="divider" style={{ marginBottom: "1.5rem" }} />
              <h2
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                  fontWeight: 700,
                  color: "#ffffff",
                  marginBottom: "1rem",
                  lineHeight: 1.2,
                }}
              >
                Your event, captured with cinematic precision.
              </h2>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.95rem",
                  lineHeight: 1.75,
                  marginBottom: "2rem",
                }}
              >
                Whether it&apos;s a company conference, product launch, or annual
                awards ceremony — we deploy a full production crew to capture
                every moment that matters. Custom quote based on event scope,
                crew size, and deliverables.
              </p>
              <Link
                href="/contact?service=Corporate+Event"
                className="btn-primary"
              >
                Request Event Quote
              </Link>
            </div>

            <div className="glass-card" style={{ borderRadius: 4, padding: "2rem" }}>
              <p
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  fontWeight: 600,
                  marginBottom: "1.25rem",
                }}
              >
                What&apos;s Included
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {eventFeatures.map((f, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      padding: "0.6rem 0",
                      borderBottom:
                        i < eventFeatures.length - 1
                          ? "1px solid var(--border)"
                          : "none",
                      fontSize: "0.875rem",
                      color: "rgba(255,255,255,0.75)",
                    }}
                  >
                    <span style={{ color: "var(--gold)", flexShrink: 0 }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <div
                style={{
                  marginTop: "1.5rem",
                  padding: "1rem",
                  background: "rgba(212,168,83,0.06)",
                  border: "1px solid rgba(212,168,83,0.15)",
                  borderRadius: 2,
                }}
              >
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--gold)",
                    fontWeight: 600,
                  }}
                >
                  Pricing: Custom Quote
                </p>
                <p
                  style={{
                    fontSize: "0.78rem",
                    color: "rgba(255,255,255,0.45)",
                    marginTop: "0.25rem",
                  }}
                >
                  Reach out with your event details for a fast estimate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social / ads section */}
      <section id="social" style={{ padding: "5rem 1.5rem" }}>
        <div className="max-w-6xl mx-auto" style={{ textAlign: "center" }}>
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
            Social &amp; Ads
          </p>
          <div className="divider" style={{ margin: "0 auto 1.5rem" }} />
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
              fontWeight: 700,
              color: "#ffffff",
              marginBottom: "1rem",
            }}
          >
            Built-in social content &amp; ad management
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "0.95rem",
              maxWidth: 560,
              margin: "0 auto 3rem",
              lineHeight: 1.75,
            }}
          >
            Every Showcase and Growth package includes social-optimized edits.
            The Growth Program adds Meta &amp; Instagram ad management — we run
            the campaigns, you see the results.
          </p>
          <Link href="/contact" className="btn-primary">
            Talk to Us About Ads
          </Link>
        </div>
      </section>
    </div>
  );
}
