"use client";
import { useEffect, useRef } from "react";

export default function About() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll<HTMLElement>(".reveal").forEach((el, i) => {
            setTimeout(() => { el.style.opacity = "1"; el.style.transform = "none"; }, i * 100);
          });
        }
      });
    }, { threshold: 0.15 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} style={{ padding: "100px 40px", background: "var(--bg2)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }} className="about-grid">

          {/* Left */}
          <div>
            <p className="reveal section-label" style={{ opacity: 0, transform: "translateY(16px)", transition: "all 0.6s ease" }}>
              A bit about me
            </p>
            <h2 className="reveal serif" style={{
              fontSize: "clamp(34px, 4vw, 54px)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: 28,
              color: "var(--text)",
              opacity: 0, transform: "translateY(16px)", transition: "all 0.6s ease 0.1s",
            }}>
              I build things I'm <em style={{ color: "var(--accent)" }}>proud</em> of.
            </h2>
            <p className="reveal" style={{
              color: "var(--text-mid)", fontSize: 16, lineHeight: 1.85, marginBottom: 20,
              opacity: 0, transform: "translateY(16px)", transition: "all 0.6s ease 0.2s",
            }}>
              I'm a software engineering student based in Monastir, Tunisia. I care about writing code
              that actually works in the real world — not just passes a test. I like understanding
              systems end-to-end, from database design to how the UI feels in a browser.
            </p>
          </div>

          {/* Right: fact cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { emoji: "🎓", label: "Studying", value: "Software Engineering" },
              { emoji: "📍", label: "Based in", value: "Monastir, Tunisia" },
              { emoji: "💬", label: "Languages", value: "Arabic, French, English, German" },
            ].map((item, i) => (
              <div key={item.label}
                className="reveal card"
                style={{
                  padding: "20px 24px",
                  display: "flex", alignItems: "center", gap: 16,
                  opacity: 0, transform: "translateY(16px)",
                  transition: `all 0.5s ease ${0.2 + i * 0.1}s`,
                }}
              >
                <span style={{ fontSize: 24, flexShrink: 0 }}>{item.emoji}</span>
                <div>
                  <div style={{ fontSize: 11, color: "var(--text-muted)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 2 }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "var(--text)" }}>
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
