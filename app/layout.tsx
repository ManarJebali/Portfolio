import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manar Jebali — Software Engineer",
  description: "Full-stack developer building scalable web systems and data-driven applications.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
