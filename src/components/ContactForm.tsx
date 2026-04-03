"use client";

import { useState, FormEvent } from "react";

const serviceOptions = [
  "Case Study Package ($2,500–$4,000)",
  "Showcase Package ($4,500–$6,500)",
  "Growth Program ($2,000–$3,500/mo)",
  "Corporate Event (Custom Quote)",
  "Not Sure Yet — Let's Talk",
];

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    // Simulate submission (replace with real endpoint / Formspree / etc.)
    try {
      await new Promise((r) => setTimeout(r, 1200));
      setFormState("success");
    } catch {
      setFormState("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#ffffff",
    fontSize: "0.9rem",
    padding: "0.875rem 1rem",
    outline: "none",
    transition: "border-color 0.2s ease",
    borderRadius: 2,
    fontFamily: "inherit",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.65rem",
    fontWeight: 700,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "var(--gold)",
    marginBottom: "0.4rem",
  };

  if (formState === "success") {
    return (
      <div
        className="glass-card-gold"
        style={{
          borderRadius: 4,
          padding: "3rem 2rem",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>✨</div>
        <h3
          style={{
            fontSize: "1.25rem",
            fontWeight: 700,
            color: "#ffffff",
            marginBottom: "0.75rem",
          }}
        >
          Message received.
        </h3>
        <p
          style={{
            color: "var(--text-secondary)",
            fontSize: "0.9rem",
            lineHeight: 1.7,
          }}
        >
          Thanks for reaching out. Drew will get back to you within one
          business day. In the meantime, feel free to call{" "}
          <a
            href="tel:4355923972"
            style={{ color: "var(--gold)", textDecoration: "none" }}
          >
            (435) 592-3972
          </a>{" "}
          for anything urgent.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-card"
      style={{ borderRadius: 4, padding: "2.5rem" }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1.25rem",
          marginBottom: "1.25rem",
        }}
      >
        <div>
          <label htmlFor="name" style={labelStyle}>
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jane Smith"
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
            onFocus={(e) =>
              (e.target.style.borderColor = "rgba(212,168,83,0.5)")
            }
            onBlur={(e) =>
              (e.target.style.borderColor = "rgba(255,255,255,0.1)")
            }
          />
        </div>
        <div>
          <label htmlFor="email" style={labelStyle}>
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@company.com"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
            onFocus={(e) =>
              (e.target.style.borderColor = "rgba(212,168,83,0.5)")
            }
            onBlur={(e) =>
              (e.target.style.borderColor = "rgba(255,255,255,0.1)")
            }
          />
        </div>
      </div>

      <div style={{ marginBottom: "1.25rem" }}>
        <label htmlFor="company" style={labelStyle}>
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          placeholder="Acme Corp"
          value={formData.company}
          onChange={handleChange}
          style={inputStyle}
          onFocus={(e) =>
            (e.target.style.borderColor = "rgba(212,168,83,0.5)")
          }
          onBlur={(e) =>
            (e.target.style.borderColor = "rgba(255,255,255,0.1)")
          }
        />
      </div>

      <div style={{ marginBottom: "1.25rem" }}>
        <label htmlFor="service" style={labelStyle}>
          Service Interest *
        </label>
        <select
          id="service"
          name="service"
          required
          value={formData.service}
          onChange={handleChange}
          style={{
            ...inputStyle,
            cursor: "pointer",
            appearance: "none",
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23d4a853' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 1rem center",
            paddingRight: "2.5rem",
          }}
          onFocus={(e) =>
            (e.target.style.borderColor = "rgba(212,168,83,0.5)")
          }
          onBlur={(e) =>
            (e.target.style.borderColor = "rgba(255,255,255,0.1)")
          }
        >
          <option value="" disabled style={{ background: "#0a0a0f" }}>
            Select a package...
          </option>
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt} style={{ background: "#0a0a0f" }}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div style={{ marginBottom: "1.75rem" }}>
        <label htmlFor="message" style={labelStyle}>
          Tell Us About Your Project *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Brief overview of what you're working on, your goals, timeline, and any details that would help us understand your needs..."
          value={formData.message}
          onChange={handleChange}
          style={{ ...inputStyle, resize: "vertical", minHeight: 130 }}
          onFocus={(e) =>
            (e.target.style.borderColor = "rgba(212,168,83,0.5)")
          }
          onBlur={(e) =>
            (e.target.style.borderColor = "rgba(255,255,255,0.1)")
          }
        />
      </div>

      <button
        type="submit"
        disabled={formState === "submitting"}
        className="btn-primary"
        style={{
          width: "100%",
          justifyContent: "center",
          opacity: formState === "submitting" ? 0.7 : 1,
          cursor: formState === "submitting" ? "wait" : "pointer",
          border: "none",
        }}
      >
        {formState === "submitting" ? (
          <>
            <span
              style={{
                display: "inline-block",
                width: 14,
                height: 14,
                border: "2px solid rgba(10,10,15,0.4)",
                borderTopColor: "#0a0a0f",
                borderRadius: "50%",
                animation: "spin 0.7s linear infinite",
              }}
            />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>

      {formState === "error" && (
        <p
          style={{
            marginTop: "1rem",
            fontSize: "0.825rem",
            color: "#d45353",
            textAlign: "center",
          }}
        >
          Something went wrong. Please email us directly at{" "}
          <a
            href="mailto:drew@ravenwoodcreative.com"
            style={{ color: "var(--gold)", textDecoration: "none" }}
          >
            drew@ravenwoodcreative.com
          </a>
          .
        </p>
      )}

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        input::placeholder,
        textarea::placeholder {
          color: rgba(255,255,255,0.2);
        }
        select option {
          background: #0a0a0f;
          color: #ffffff;
        }
      `}</style>
    </form>
  );
}
