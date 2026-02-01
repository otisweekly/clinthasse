"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr",
        position: "relative",
        overflow: "hidden",
        backgroundImage: "url(/images/clint-hasse-portrait.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "top center",
      }}
    >
      {/* Content wrapper - matches nav max-width */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          width: "100%",
          minHeight: "100vh",
          display: "grid",
          gridTemplateColumns: "1fr",
        }}
        className="md:grid-cols-2"
      >
        {/* Left: Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            position: "relative",
            zIndex: 10,
            paddingTop: "120px",
            paddingBottom: "60px",
            paddingLeft: "24px",
            paddingRight: "24px",
            maxWidth: "700px",
          }}
        >
          {/* Role tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{
              display: "flex",
              gap: "1rem",
              marginTop: "0",
              flexWrap: "nowrap",
            }}
          >
            {["Photographer", "Musician", "Broadcaster"].map((role) => (
              <span
                key={role}
                style={{
                  padding: "0.75rem 1.5rem",
                  border: "2px solid #ffffff",
                  fontSize: "1rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: "#ffffff",
                }}
              >
                {role}
              </span>
            ))}
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="font-display"
            style={{
              marginTop: "2rem",
              fontSize: "1.25rem",
              color: "#ffffff",
              maxWidth: "420px",
              lineHeight: 1.6,
              fontStyle: "italic",
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
                padding: "1rem 2.5rem",
                background: "#fafafa",
                color: "#0a0a0a",
                textDecoration: "none",
                fontSize: "1rem",
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
            <a
              href="https://music.apple.com/us/artist/clint-hasse/1316269529"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "1rem 2.5rem",
                border: "2px solid #ffffff",
                color: "#ffffff",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#d4a373";
                e.currentTarget.style.color = "#d4a373";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#444";
                e.currentTarget.style.color = "#fafafa";
              }}
            >
              Listen Now
            </a>
          </motion.div>

          {/* Navigation Links */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            style={{
              display: "flex",
              gap: "2.5rem",
              marginTop: "3rem",
              flexWrap: "nowrap",
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
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  transition: "opacity 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "0.7";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "1";
                }}
              >
                {link.label}
              </a>
            ))}
          </motion.nav>
        </div>

        {/* Right: Image collage */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{
            position: "relative",
            display: "none",
          }}
          className="md:block"
        >
          {/* Main portrait image */}
          <div
            style={{
              position: "absolute",
              top: "10%",
              left: "10%",
              width: "70%",
              height: "75%",
              overflow: "hidden",
            }}
          >
            <img
              src="/images/clint-hasse-portrait.jpg"
              alt="Clint Hasse portrait"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top center",
              }}
            />
          </div>

          {/* Smaller accent image */}
          <div
            style={{
              position: "absolute",
              bottom: "8%",
              right: "5%",
              width: "35%",
              aspectRatio: "3/4",
              overflow: "hidden",
              border: "1px solid #222",
            }}
          >
            <img
              src="/images/clint-rolleiflex.jpg"
              alt="Clint with Rolleiflex camera"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Red accent bar */}
          <div
            style={{
              position: "absolute",
              top: "8%",
              left: "5%",
              width: "3px",
              height: "120px",
              background: "#c41e3a",
            }}
          />

          {/* Floating text */}
          <div
            style={{
              position: "absolute",
              bottom: "25%",
              left: "0",
              transform: "rotate(-90deg) translateX(-100%)",
              transformOrigin: "left bottom",
              fontSize: "0.65rem",
              textTransform: "uppercase",
              letterSpacing: "0.3em",
              color: "#ffffff",
            }}
          >
            St. Louis • 2024
          </div>
        </motion.div>
      </div>

      {/* Mobile background image */}
      <div
        className="md:hidden"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.25,
          backgroundImage: "url(/images/clint-hasse-portrait.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      />

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
    </section>
  );
}
