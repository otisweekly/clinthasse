"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        padding: "100px 0",
        background: "#111",
      }}
    >
      <div
        className="section-padding"
        style={{ maxWidth: "1400px", margin: "0 auto" }}
      >
        {/* Side by side layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          {/* Left: Image + caption */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div
              style={{
                aspectRatio: "4/5",
                background: "#1a1a1a",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <img
                src="/images/clint-hasse-portrait.jpg"
                alt="Clint Hasse"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top center",
                }}
              />
              {/* Red accent corner */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "4px",
                  height: "80px",
                  background: "#c41e3a",
                }}
              />
            </div>
            <p style={{ marginTop: "1rem", fontSize: "0.7rem", color: "#555", letterSpacing: "0.05em" }}>
              October 2025
            </p>
          </motion.div>

          {/* Right: Bio content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {/* Section label */}
            <p
              style={{
                fontSize: "0.7rem",
                textTransform: "uppercase",
                letterSpacing: "0.25em",
                color: "#888",
                marginBottom: "1.5rem",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <span style={{ width: "30px", height: "1px", background: "#c41e3a" }} />
              About
            </p>

            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                fontWeight: 300,
                marginBottom: "1.5rem",
                lineHeight: 1.15,
                color: "#d4b896",
              }}
            >
              Broadcaster, Musician &<br />
              <span style={{ fontStyle: "italic" }}>Visual Artist</span>
            </h2>

            <div style={{ borderTop: "1px solid #222", paddingTop: "1.5rem" }}>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: 1.7,
                  marginBottom: "1.25rem",
                  color: "#ccc",
                }}
              >
                With over 40+ years of electronic media and broadcasting, Clint Hasse has built a career
                at the intersection of sound, image, and storytelling.
              </p>

              <p style={{ color: "#ccc", lineHeight: 1.7, marginBottom: "1.25rem", fontSize: "1.1rem" }}>
                Clint enjoyed 16+ years with 5 On Your Side KSDK/TEGNA conceiving, writing and producing broadcast and digital campaigns. Previously, at KMOX Radio Clint worked in sales, sales management, talk show host and voiceover artist. Clint brings decades of experience in ideation, writing, producing and voiceover work.
              </p>

              <p style={{ color: "#ccc", lineHeight: 1.7, marginBottom: "1.25rem", fontSize: "1.1rem" }}>
                Clint is a lifelong guitarist, vocalist and songwriter. Listen to his album INSIDE NASHVILLE released in 2017.
              </p>

              <p style={{ color: "#ccc", lineHeight: 1.7, fontSize: "1.1rem" }}>
                As a photographer, Clint specializes in portraiture, and in particular environmental portrait,
                where the subject is captured in their own space doing what they love to do, offering insights into their humanity and triggering contemplation of your own pursuits.
              </p>
            </div>

            {/* Quote */}
            <blockquote
              style={{
                marginTop: "2rem",
                paddingLeft: "1.25rem",
                borderLeft: "2px solid #c41e3a",
              }}
            >
              <p
                className="font-display"
                style={{
                  fontSize: "1.1rem",
                  fontStyle: "italic",
                  lineHeight: 1.5,
                  color: "#d4b896",
                }}
              >
                &ldquo;Every song tells a story. Every photograph lives forever.&rdquo;
              </p>
            </blockquote>
          </motion.div>
        </div>
      </div>

      {/* Mobile: Stack vertically */}
      <style jsx>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns: repeat(2, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
