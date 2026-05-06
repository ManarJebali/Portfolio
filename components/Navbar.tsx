"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 100,
      padding: "0 40px",
      height: 64,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      transition: "all 0.3s ease",
      background: scrolled ? "rgba(250,248,244,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
    }}>
      {/* Wordmark */}
      <a href="#" style={{
        textDecoration: "none",
        fontFamily: "'Instrument Serif', serif",
        fontSize: 20,
        color: "var(--text)",
        letterSpacing: "-0.01em",
      }}>
        Manar<span style={{ color: "var(--accent)" }}>.</span>
      </a>

      {/* Desktop nav */}
      <div style={{ display: "flex", alignItems: "center", gap: 36 }} className="desktop-nav">
        {links.map(l => (
          <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
        ))}
        <a
          href="https://github.com/ManarJebali"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "8px 18px",
            borderRadius: 8,
            background: "var(--text)",
            color: "var(--bg)",
            fontSize: 13,
            fontWeight: 700,
            textDecoration: "none",
            transition: "opacity 0.18s",
            letterSpacing: "0.01em",
          }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = "0.8"}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = "1"}
        >
          GitHub ↗
        </a>
      </div>

      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="mobile-toggle"
        style={{ background: "none", border: "none", color: "var(--text)", cursor: "pointer", padding: 4 }}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile drawer */}
      {open && (
        <div style={{
          position: "absolute", top: 64, left: 0, right: 0,
          background: "var(--bg)",
          borderBottom: "1px solid var(--border)",
          padding: "24px 40px",
          display: "flex", flexDirection: "column", gap: 20,
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href} className="nav-link"
              style={{ fontSize: 16 }}
              onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
        @media (min-width: 641px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
