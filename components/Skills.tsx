"use client";

const groups = [
  {
    label: "Languages",
    color: "var(--accent)",
    bg: "var(--accent-light)",
    items: ["Java", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    label: "Frontend",
    color: "#2d5080",
    bg: "#dde8f4",
    items: ["React", "Next.js", "HTML & CSS", "Tailwind CSS"],
  },
  {
    label: "Backend",
    color: "var(--accent2)",
    bg: "var(--accent2-light)",
    items: ["Spring Boot", "Node.js", "Express", "REST APIs"],
  },
  {
    label: "Data & Tools",
    color: "#7a5c20",
    bg: "#f5edda",
    items: ["PostgreSQL", "Kafka", "Docker", "Git", "Linux"],
  },
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "100px 40px", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        <p className="section-label">What I work with</p>
        <h2 className="serif" style={{
          fontSize: "clamp(34px, 4vw, 52px)",
          letterSpacing: "-0.02em",
          marginBottom: 60,
          color: "var(--text)",
          lineHeight: 1.1,
        }}>
          My <em style={{ color: "var(--accent)" }}>toolkit</em>
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
          {groups.map(g => (
            <div key={g.label} className="card" style={{ padding: "28px 24px" }}>
              <div style={{
                display: "inline-block",
                padding: "4px 12px",
                borderRadius: 6,
                background: g.bg,
                color: g.color,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.05em",
                marginBottom: 20,
                textTransform: "uppercase",
              }}>
                {g.label}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {g.items.map(item => (
                  <span key={item} style={{
                    padding: "6px 14px",
                    borderRadius: 8,
                    fontSize: 14,
                    fontWeight: 500,
                    background: "var(--bg2)",
                    border: "1.5px solid var(--border)",
                    color: "var(--text-mid)",
                    transition: "all 0.18s",
                    cursor: "default",
                  }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = g.bg;
                      el.style.color = g.color;
                      el.style.borderColor = g.color;
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = "var(--bg2)";
                      el.style.color = "var(--text-mid)";
                      el.style.borderColor = "var(--border)";
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
