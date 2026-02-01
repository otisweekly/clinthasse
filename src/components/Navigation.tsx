"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Music", href: "#music" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const adminLink = { label: "Admin", href: "/login" };

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: isScrolled ? "rgba(10,10,10,0.95)" : "transparent",
          backdropFilter: isScrolled ? "blur(10px)" : "none",
          borderBottom: isScrolled ? "1px solid #222" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <div style={{ height: "3px", background: "#c41e3a" }} />
        <nav
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "72px",
          }}
          className="section-padding"
        >
          <a href="#" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <img
              src="/logo.svg"
              alt="Clint Hasse"
              style={{
                height: "22px",
                width: "auto",
                filter: "invert(1)",
              }}
            />
          </a>

          <ul style={{ display: "flex", gap: "2.5rem", listStyle: "none" }} className="hidden md:flex">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  style={{
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "#ffffff",
                    textDecoration: "none",
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
            style={{ background: "none", border: "none", cursor: "pointer", padding: "8px" }}
            aria-label="Menu"
          >
            <div style={{ width: "24px", display: "flex", flexDirection: "column", gap: "6px" }}>
              <span style={{ height: "2px", width: "24px", background: "#fafafa", display: "block", borderRadius: "1px" }} />
              <span style={{ height: "2px", width: "24px", background: "#fafafa", display: "block", borderRadius: "1px" }} />
            </div>
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99,
              background: "#0a0a0a",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "24px",
            }}
          >
            <button
              onClick={() => setMenuOpen(false)}
              style={{
                position: "absolute",
                top: "24px",
                right: "24px",
                background: "none",
                border: "none",
                color: "#fafafa",
                fontSize: "2rem",
                cursor: "pointer",
              }}
            >
              ×
            </button>
            {navItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="font-display"
                style={{
                  fontSize: "2.5rem",
                  color: "#fafafa",
                  textDecoration: "none",
                  padding: "1rem 0",
                  borderBottom: "1px solid #222",
                }}
              >
                {item.label}
              </motion.a>
            ))}

            {/* Admin Link */}
            <motion.a
              href={adminLink.href}
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navItems.length * 0.1 }}
              style={{
                fontSize: "1rem",
                color: "#c41e3a",
                textDecoration: "none",
                padding: "1.5rem 0 1rem",
                marginTop: "1rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span style={{ width: "20px", height: "1px", background: "#c41e3a" }} />
              {adminLink.label}
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
