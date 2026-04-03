import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Video production portfolio from Ravenwood Creative — case studies, event coverage, and social content for brands across the country.",
};

const categories = ["All", "Case Study", "Events", "Social", "Ads"];

const placeholderProjects = [
  {
    id: 1,
    category: "Case Study",
    title: "Customer Success Story",
    client: "SaaS Brand",
    duration: "90 sec",
    desc: "Narrative interview + b-roll showcasing a customer's growth journey.",
    aspect: "16/9",
    size: "large",
  },
  {
    id: 2,
    category: "Events",
    title: "Annual Conference Highlight",
    client: "Tech Company",
    duration: "3 min",
    desc: "Full-day coverage condensed into a punchy highlights reel.",
    aspect: "16/9",
    size: "medium",
  },
  {
    id: 3,
    category: "Social",
    title: "Product Launch Reel",
    client: "Ecommerce Brand",
    duration: "30 sec",
    desc: "Vertical Reels-optimized launch content for Instagram.",
    aspect: "9/16",
    size: "medium",
  },
  {
    id: 4,
    category: "Case Study",
    title: "Before & After Transformation",
    client: "Local Service Business",
    duration: "75 sec",
    desc: "Visual storytelling that proves ROI before a prospect says a word.",
    aspect: "16/9",
    size: "medium",
  },
  {
    id: 5,
    category: "Ads",
    title: "Meta Ad Campaign",
    client: "National Retailer",
    duration: "15 sec",
    desc: "High-converting paid social creative — 3.2x ROAS.",
    aspect: "1/1",
    size: "small",
  },
  {
    id: 6,
    category: "Social",
    title: "Weekly Content Series",
    client: "B2B SaaS",
    duration: "60 sec × 8",
    desc: "Ongoing LinkedIn content series driving inbound leads.",
    aspect: "1/1",
    size: "small",
  },
];

const categoryColors: Record<string, string> = {
  "Case Study": "#d4a853",
  Events: "#a87bd4",
  Social: "#53a8d4",
  Ads: "#d45353",
};

export default function WorkPage() {
  return (
    <div style={{ paddingTop: "6rem" }}>
      {/* Header */}
      <section
        style={{
          padding: "4rem 1.5rem 2rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 400,
            height: 400,
            background:
              "radial-gradient(ellipse at top right, rgba(212,168,83,0.05) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
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
            Portfolio
          </p>
          <div className="divider" style={{ marginBottom: "1.5rem" }} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: "1.5rem",
            }}
          >
            <h1
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1.1,
              }}
            >
              Work that{" "}
              <span className="text-gold-gradient">speaks for itself</span>
            </h1>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.95rem",
                maxWidth: 380,
                lineHeight: 1.7,
              }}
            >
              A curated look at case studies, events, and social content
              produced for brands coast to coast.
            </p>
          </div>
        </div>
      </section>

      {/* Filter bar (static / visual only) */}
      <section style={{ padding: "1.5rem 1.5rem 0" }}>
        <div className="max-w-6xl mx-auto">
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              flexWrap: "wrap",
              borderBottom: "1px solid var(--border)",
              paddingBottom: "1.5rem",
            }}
          >
            {categories.map((cat) => (
              <span
                key={cat}
                style={{
                  padding: "0.4rem 1rem",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  border:
                    cat === "All"
                      ? "1px solid var(--gold)"
                      : "1px solid rgba(255,255,255,0.08)",
                  background:
                    cat === "All" ? "rgba(212,168,83,0.1)" : "transparent",
                  color:
                    cat === "All" ? "var(--gold)" : "rgba(255,255,255,0.35)",
                  borderRadius: 2,
                  cursor: "default",
                }}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section style={{ padding: "2.5rem 1.5rem 6rem" }}>
        <div
          className="max-w-6xl mx-auto"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {placeholderProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card work-card-hover"
              style={{
                borderRadius: 4,
                overflow: "hidden",
                gridColumn: project.size === "large" ? "span 2" : "span 1",
              }}
            >
              {/* Thumbnail placeholder */}
              <div
                style={{
                  aspectRatio: project.aspect,
                  background: "rgba(255,255,255,0.02)",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                {/* Cinematic grid background */}
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
                {/* Corner marks */}
                {(
                  [
                    { top: 12, left: 12 },
                    { top: 12, right: 12 },
                    { bottom: 12, left: 12 },
                    { bottom: 12, right: 12 },
                  ] as React.CSSProperties[]
                ).map((pos, i) => (
                  <div
                    key={i}
                    aria-hidden
                    style={{
                      position: "absolute",
                      ...pos,
                      width: 16,
                      height: 16,
                      borderTop:
                        "top" in pos
                          ? "1.5px solid rgba(212,168,83,0.4)"
                          : "none",
                      borderBottom:
                        "bottom" in pos
                          ? "1.5px solid rgba(212,168,83,0.4)"
                          : "none",
                      borderLeft:
                        "left" in pos
                          ? "1.5px solid rgba(212,168,83,0.4)"
                          : "none",
                      borderRight:
                        "right" in pos
                          ? "1.5px solid rgba(212,168,83,0.4)"
                          : "none",
                    }}
                  />
                ))}
                {/* Play button */}
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    border: "1.5px solid rgba(212,168,83,0.5)",
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
                      borderTop: "9px solid transparent",
                      borderBottom: "9px solid transparent",
                      borderLeft: "16px solid rgba(212,168,83,0.6)",
                      marginLeft: 3,
                    }}
                  />
                </div>
              </div>

              {/* Meta */}
              <div style={{ padding: "1.25rem 1.5rem" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "0.6rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color:
                        categoryColors[project.category] || "var(--gold)",
                      padding: "0.2rem 0.5rem",
                      border: `1px solid ${(categoryColors[project.category] || "#d4a853")}40`,
                      borderRadius: 2,
                    }}
                  >
                    {project.category}
                  </span>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    {project.duration}
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: "#ffffff",
                    marginBottom: "0.35rem",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {project.client}
                </p>
                <p
                  style={{
                    fontSize: "0.825rem",
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: 1.6,
                  }}
                >
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Coming soon note */}
        <div
          style={{
            maxWidth: "72rem",
            margin: "2rem auto 0",
            textAlign: "center",
          }}
        >
          <div
            className="glass-card"
            style={{
              display: "inline-block",
              padding: "1rem 2rem",
              borderRadius: 4,
            }}
          >
            <p style={{ fontSize: "0.825rem", color: "var(--text-muted)" }}>
              🎬{" "}
              <span style={{ color: "var(--gold)" }}>Full case study videos</span>{" "}
              coming soon — check back or{" "}
              <Link
                href="/contact"
                style={{ color: "var(--gold)", textDecoration: "underline" }}
              >
                request a reel
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "5rem 1.5rem",
          borderTop: "1px solid var(--border)",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
            fontWeight: 700,
            color: "#ffffff",
            marginBottom: "1rem",
          }}
        >
          Ready to be on this page?
        </h2>
        <p
          style={{
            color: "var(--text-secondary)",
            marginBottom: "2rem",
            fontSize: "0.95rem",
          }}
        >
          Let&apos;s talk about your brand story.
        </p>
        <Link href="/contact" className="btn-primary">
          Start Your Project
        </Link>
      </section>
    </div>
  );
}
