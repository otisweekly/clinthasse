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
                src="https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=600&q=80"
                alt="Clint Hasse"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "grayscale(20%)",
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
              Photo: Placeholder — Add your portrait
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
              }}
            >
              Broadcaster, Musician &<br />
              <span style={{ fontStyle: "italic", color: "#d4a373" }}>Visual Artist</span>
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
                With over 40 years in electronic media and broadcasting, Clint Hasse has built a career
                at the intersection of sound, image, and storytelling.
              </p>

              <p style={{ color: "#888", lineHeight: 1.8, marginBottom: "1.25rem", fontSize: "0.95rem" }}>
                Currently with KSDK NewsChannel 5 / Gannett handling broadcast and digital marketing,
                and lending his baritone voice to KMOX Radio, Clint brings decades of experience
                in commercial writing, producing, and voiceover work.
              </p>

              <p style={{ color: "#888", lineHeight: 1.8, fontSize: "0.95rem" }}>
                As the rhythm guitarist for Swing DeVille, St. Louis&apos;s premier gypsy jazz ensemble,
                he plays a custom Jean-Pierre Favino guitar and lends his baritone vocals to
                The Great American Songbook.
              </p>
            </div>

            {/* Details grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "1.5rem",
                marginTop: "2rem",
                paddingTop: "1.5rem",
                borderTop: "1px solid #222",
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: "0.65rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    color: "#c41e3a",
                    marginBottom: "0.4rem",
                  }}
                >
                  Based in
                </p>
                <p className="font-display" style={{ fontSize: "1.1rem" }}>
                  St. Louis, MO
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "0.65rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    color: "#c41e3a",
                    marginBottom: "0.4rem",
                  }}
                >
                  Current Work
                </p>
                <p className="font-display" style={{ fontSize: "1.1rem" }}>
                  KSDK / Swing DeVille
                </p>
              </div>
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
                  color: "#aaa",
                }}
              >
                &ldquo;Every song tells a story. Every photograph captures a moment that will never come again.&rdquo;
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
