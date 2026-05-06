"use client";
import { GitFork, Link, Mail, MapPin } from "lucide-react";

const links = [
  { icon: GitFork, label: "GitHub", sub: "@ManarJebali", href: "https://github.com/ManarJebali", color: "#1c1a17", bg: "#f2ede4" },
  { icon: Link, label: "LinkedIn", sub: "manarjebali", href: "https://www.linkedin.com/in/manarjebali", color: "#2d5080", bg: "#dde8f4" },
  { icon: Mail, label: "Email", sub: "manarjebali123@email.com", href: "mailto:manar.jebali123@email.com", color: "#c4622d", bg: "#f4e4d8" },
];

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "100px 40px", background: "var(--bg)" }}>
      <div style={{ maxWidth: 680, margin: "0 auto" }}>

        <p className="section-label">Get in touch</p>
        <h2 className="serif" style={{
          fontSize: "clamp(38px, 5vw, 64px)",
          letterSpacing: "-0.03em",
          lineHeight: 1.05,
          marginBottom: 20,
          color: "var(--text)",
        }}>
          Let's work<br />
          <em style={{ color: "var(--accent)" }}>together</em>
        </h2>

        <p style={{ color: "var(--text-mid)", fontSize: 17, lineHeight: 1.75, marginBottom: 52 }}>
          I'm actively looking for internship opportunities and interesting collaborations.
          Whether you have a project in mind or just want to chat — I'd love to hear from you.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 48 }}>
          {links.map(({ icon: Icon, label, sub, href, color, bg }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              className="card"
              style={{
                display: "flex", alignItems: "center", gap: 16,
                padding: "20px 24px", textDecoration: "none", color: "var(--text)",
              }}
            >
              <div style={{
                width: 44, height: 44, borderRadius: 10,
                background: bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <Icon size={18} style={{ color }} />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15 }}>{label}</div>
                <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 1 }}>{sub}</div>
              </div>
              <span style={{ marginLeft: "auto", color: "var(--text-muted)", fontSize: 18 }}>↗</span>
            </a>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--text-muted)", fontSize: 13 }}>
          <MapPin size={13} />
          Monastir, Tunisia · UTC+1
        </div>
      </div>
    </section>
  );
}
