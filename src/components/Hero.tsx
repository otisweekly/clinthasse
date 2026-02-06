"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        background: "#0a0a0a",
      }}
    >
      {/* Image positioned on the right */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "50%",
          zIndex: 1,
        }}
        className="hero-image-container"
      >
        <img
          src="/images/clint-illustration.jpg"
          alt="Clint Hasse"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
          }}
        />
      </motion.div>

      {/* Content wrapper */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          alignItems: "flex-start",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Left: Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            paddingTop: "100px",
            paddingBottom: "60px",
            paddingLeft: "24px",
            paddingRight: "24px",
            width: "50%",
            alignSelf: "flex-start",
          }}
        >
          {/* Navigation Links - positioned high under logo */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{
              display: "flex",
              gap: "2rem",
              marginBottom: "3rem",
              flexWrap: "wrap",
            }}
          >
            {[
              { label: "Work", href: "#work" },
              { label: "Music", href: "#music" },
              { label: "About", href: "#about" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-display"
                style={{
                  color: "#ffffff",
                  textDecoration: "none",
                  fontSize: "20px",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#d4a373";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#ffffff";
                }}
              >
                {link.label}
              </a>
            ))}
          </motion.nav>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="font-display"
            style={{
              marginTop: "15vh",
              fontSize: "3.5rem",
              color: "#ffffff",
              maxWidth: "550px",
              lineHeight: 1.3,
                          }}
          >
            Four decades of storytelling through music, broadcast, and photography.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            style={{
              display: "flex",
              gap: "1rem",
              marginTop: "2.5rem",
              flexWrap: "wrap",
            }}
          >
            <a
              href="#work"
              style={{
                padding: "1.25rem 3rem",
                background: "#fafafa",
                color: "#0a0a0a",
                textDecoration: "none",
                fontSize: "1.25rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#d4a373";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#fafafa";
              }}
            >
              View Work
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          zIndex: 20,
        }}
      >
        <span style={{ fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "#ffffff" }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ width: "1px", height: "30px", background: "linear-gradient(to bottom, #ffffff, transparent)" }}
        />
      </motion.div>

      {/* Responsive styles */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .hero-image-container {
            width: 100% !important;
            opacity: 0.3;
          }
        }
      `}</style>
    </section>
  );
}
