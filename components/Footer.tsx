export default function Footer() {
  return (
    <footer style={{
      padding: "28px 40px",
      borderTop: "1px solid var(--border)",
      background: "var(--bg2)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 10,
    }}>
      <span style={{ fontSize: 13, color: "var(--text-muted)", fontFamily: "'Instrument Serif', serif", fontStyle: "italic" }}>
        Manar Jebali © 2025
      </span>
      <span style={{ fontSize: 13, color: "var(--text-muted)" }}>
        Built with Next.js
      </span>
    </footer>
  );
}
