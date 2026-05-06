"use client";
import { MapPin, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "100px 40px 80px",
      position: "relative",
      background: "var(--bg)",
    }}>
      {/* Warm background shape */}
      <div style={{
        position: "absolute",
        top: 0, right: 0,
        width: "45%", height: "100%",
        background: "var(--bg2)",
        borderLeft: "1px solid var(--border)",
        zIndex: 0,
      }} className="hero-panel" />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto", width: "100%" }}>

        {/* Location */}
        <div className="fade-up delay-1" style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          color: "var(--text-muted)", fontSize: 13, fontWeight: 500,
          marginBottom: 40,
        }}>
          <MapPin size={13} style={{ color: "var(--accent)" }} />
          Monastir, Tunisia
          <span style={{ margin: "0 8px", color: "var(--border2)" }}>·</span>
          <span style={{
            background: "var(--accent2-light)",
            color: "var(--accent2)",
            padding: "2px 10px",
            borderRadius: 999,
            fontSize: 12,
            fontWeight: 700,
          }}>
            Open to work
          </span>
        </div>

        {/* Heading */}
        <h1 className="fade-up delay-2 serif" style={{
          fontSize: "clamp(52px, 9vw, 104px)",
          lineHeight: 0.95,
          letterSpacing: "-0.03em",
          marginBottom: 32,
          color: "var(--text)",
        }}>
          Hi, I'm<br />
          <span style={{ color: "var(--accent)", fontStyle: "italic" }}>Manar</span>{" "}
          <span style={{ color: "var(--text-mid)" }}>Jebali</span>
        </h1>

        {/* What I do */}
        <p className="fade-up delay-3" style={{
          fontSize: "clamp(16px, 2vw, 20px)",
          color: "var(--text-mid)",
          maxWidth: 520,
          lineHeight: 1.75,
          marginBottom: 48,
        }}>
          I'm a software engineering student who loves turning complex problems into
          clean, working software — from backend APIs to data pipelines to full-stack apps.
        </p>

        {/* CTAs */}
        <div className="fade-up delay-4" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <a href="#projects" style={{
            padding: "13px 28px",
            borderRadius: 10,
            background: "var(--accent)",
            color: "#fff",
            fontWeight: 700,
            fontSize: 15,
            textDecoration: "none",
            transition: "all 0.2s",
          }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = "0.88"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = "1"}
          >
            See my work
          </a>
          <a href="https://www.linkedin.com/in/manarjebali" target="_blank" rel="noopener noreferrer"
            style={{
              padding: "13px 28px",
              borderRadius: 10,
              background: "var(--surface)",
              border: "1.5px solid var(--border)",
              color: "var(--text)",
              fontWeight: 600,
              fontSize: 15,
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "var(--border2)"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"}
          >
            Say hello ↗
          </a>
        </div>

        {/* Skill chips */}
        <div className="fade-up delay-5" style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 56 }}>
          {["Java", "Python", "React", "Spring Boot", "Kafka", "PostgreSQL"].map(s => (
            <span key={s} className="tag">{s}</span>
          ))}
        </div>
      </div>

      {/* Scroll nudge */}
      <div style={{
        position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
        color: "var(--text-muted)", opacity: 0.6,
      }}>
        <ArrowDown size={16} className="float" />
      </div>

      <style>{`
        @media (max-width: 768px) { .hero-panel { display: none; } }
      `}</style>
    </section>
  );
}
