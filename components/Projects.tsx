"use client";
import { GitFork } from "lucide-react";

const projects = [
  {
    title: "QiyasReady",
    emoji: "🛡️",
    desc: "A learning platform with real-time exam anti-cheating protection. Built during a hackathon — tight deadline, real problem, shipped it.",
    tags: ["JavaScript", "React", "Node.js"],
    github: "https://github.com/ManarJebali/QiyasReady",
    accent: "#c4622d",
    bg: "#f4e4d8",
  },
  {
    title: "Crypto Data Pipeline",
    emoji: "📈",
    desc: "Real-time cryptocurrency data pipeline using Kafka for stream processing and Python for ingestion and transformation.",
    tags: ["Python", "Kafka", "Data Engineering"],
    github: "https://github.com/ManarJebali/crypto-data-pipeline",
    accent: "#3a6b4a",
    bg: "#dff0e6",
  },
  {
    title: "Image Preprocessing Platform",
    emoji: "🖼️",
    desc: "Collaborative web platform for ML teams to preprocess image datasets — filters, augmentation, and batch workflows.",
    tags: ["JavaScript", "Image Processing"],
    github: "https://github.com/ManarJebali/image-preprocessing-platform",
    accent: "#2d5080",
    bg: "#dde8f4",
  },
  {
    title: "QuickHelp",
    emoji: "⚡",
    desc: "Hackathon project connecting people to on-demand services with real-time matching and request management.",
    tags: ["Java", "Spring Boot", "REST API"],
    github: "https://github.com/ManarJebali/quickhelp",
    accent: "#7a5c20",
    bg: "#f5edda",
  },
  {
    title: "ArabicNLP",
    emoji: "🌍",
    desc: "NLP toolkit for Arabic text — tokenization, morphological analysis, and sentiment tools built for an underserved language.",
    tags: ["Python", "NLP", "Machine Learning"],
    github: "https://github.com/ManarJebali/ArabicNLP",
    accent: "#5a3a6b",
    bg: "#ede0f5",
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "100px 40px", background: "var(--bg2)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        <p className="section-label">Things I've built</p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56, flexWrap: "wrap", gap: 16 }}>
          <h2 className="serif" style={{
            fontSize: "clamp(34px, 4vw, 52px)",
            letterSpacing: "-0.02em",
            color: "var(--text)",
            lineHeight: 1.1,
          }}>
            Selected <em style={{ color: "var(--accent)" }}>projects</em>
          </h2>
          <a href="https://github.com/ManarJebali?tab=repositories"
            target="_blank" rel="noopener noreferrer"
            style={{ fontSize: 14, fontWeight: 600, color: "var(--text-muted)", textDecoration: "none", transition: "color 0.18s" }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--text)"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"}
          >
            All repos ↗
          </a>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
          {projects.map((p) => (
            <div key={p.title} className="card" style={{ padding: "28px", display: "flex", flexDirection: "column", gap: 14 }}>

              {/* Emoji + title */}
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: p.bg,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 24, flexShrink: 0,
                }}>
                  {p.emoji}
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "var(--text)", lineHeight: 1.2 }}>
                  {p.title}
                </h3>
              </div>

              <p style={{ fontSize: 14, color: "var(--text-mid)", lineHeight: 1.75, flexGrow: 1 }}>
                {p.desc}
              </p>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {p.tags.map(t => (
                  <span key={t} style={{
                    padding: "3px 10px",
                    borderRadius: 999,
                    fontSize: 11,
                    fontWeight: 600,
                    background: p.bg,
                    color: p.accent,
                    letterSpacing: "0.02em",
                  }}>
                    {t}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a href={p.github} target="_blank" rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  fontSize: 13, fontWeight: 600, color: "var(--text-muted)",
                  textDecoration: "none", paddingTop: 8,
                  borderTop: "1px solid var(--border)",
                  transition: "color 0.18s",
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--text)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"}
              >
                <GitFork size={13} /> View source
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
