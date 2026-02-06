"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#0a0a0a" }}>
      {/* Resume Section */}
      <div
        style={{
          borderTop: "1px solid #222",
          padding: "80px 0",
        }}
      >
        <div
          className="section-padding"
          style={{ maxWidth: "1400px", margin: "0 auto" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Header */}
            <p
              style={{
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: "#888",
                marginBottom: "1rem",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <span style={{ width: "40px", height: "2px", background: "#c41e3a" }} />
              About Clint
            </p>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                fontWeight: 400,
                marginBottom: "3rem",
              }}
            >
              Broadcaster, Musician & <span style={{ fontStyle: "italic", color: "#d4a373" }}>Visual Artist</span>
            </h2>

            {/* Resume Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "3rem",
              }}
            >
              {/* Experience */}
              <div>
                <h3
                  style={{
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "#c41e3a",
                    marginBottom: "1.5rem",
                  }}
                >
                  Experience
                </h3>
                <div style={{ marginBottom: "1.5rem" }}>
                  <p className="font-display" style={{ fontSize: "1.125rem", marginBottom: "0.25rem" }}>
                    5 On Your Side KSDK/TEGNA
                  </p>
                  <p style={{ color: "#888", fontSize: "0.875rem" }}>
                    Broadcast & Digital Marketing
                  </p>
                </div>
                <div style={{ marginBottom: "1.5rem" }}>
                  <p className="font-display" style={{ fontSize: "1.125rem", marginBottom: "0.25rem" }}>
                    KMOX Radio
                  </p>
                  <p style={{ color: "#888", fontSize: "0.875rem" }}>
                    Sales Management, Voiceover Artist and Talk Show Host
                  </p>
                </div>
                <div>
                  <p className="font-display" style={{ fontSize: "1.125rem", marginBottom: "0.25rem" }}>
                    40+ Years
                  </p>
                  <p style={{ color: "#888", fontSize: "0.875rem" }}>
                    Electronic Media & Broadcasting
                  </p>
                </div>
              </div>

              {/* Music */}
              <div>
                <h3
                  style={{
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "#c41e3a",
                    marginBottom: "1.5rem",
                  }}
                >
                  Music
                </h3>
                <div>
                  <p className="font-display" style={{ fontSize: "1.125rem", marginBottom: "0.25rem" }}>
                    Swing DeVille
                  </p>
                  <p style={{ color: "#888", fontSize: "0.875rem" }}>
                    St. Louis Gypsy Jazz Ensemble
                  </p>
                </div>
              </div>

              {/* Expertise */}
              <div>
                <h3
                  style={{
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "#c41e3a",
                    marginBottom: "1.5rem",
                  }}
                >
                  Expertise
                </h3>
                <ul style={{ listStyle: "none", color: "#888", fontSize: "0.875rem", lineHeight: 2 }}>
                  <li>Broadcast Production</li>
                  <li>Digital & OTT Marketing</li>
                  <li>Voiceover & Narration</li>
                  <li>Commercial Writing & Producing</li>
                  <li>Musical Image/Jingle Creation</li>
                  <li>Photography</li>
                  <li>Live Performance</li>
                </ul>
              </div>

              {/* Connect */}
              <div>
                <h3
                  style={{
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "#c41e3a",
                    marginBottom: "1.5rem",
                  }}
                >
                  Connect
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  <a
                    href="mailto:clinthasse@gmail.com"
                    style={{ color: "#fafafa", textDecoration: "none", fontSize: "0.875rem" }}
                  >
                    clinthasse@gmail.com
                  </a>
                  <a
                    href="https://music.apple.com/us/artist/clint-hasse/1316269529"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#888", textDecoration: "none", fontSize: "0.875rem" }}
                  >
                    Apple Music
                  </a>
                  <a
                    href="https://open.spotify.com/artist/4Bt9p5U6k46ASQGTUrXLKL"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#888", textDecoration: "none", fontSize: "0.875rem" }}
                  >
                    Spotify
                  </a>
                  <a
                    href="https://www.linkedin.com/in/clint-hasse-5646a033/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#888", textDecoration: "none", fontSize: "0.875rem" }}
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: "1px solid #222" }}>
        <div
          className="section-padding"
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "1.5rem 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <a href="#" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <img
              src="/logo.svg"
              alt="Clint Hasse"
              style={{
                height: "20px",
                width: "auto",
                filter: "invert(1)",
              }}
            />
          </a>
          <p style={{ color: "#555", fontSize: "0.75rem" }}>
            © {year} All rights reserved
          </p>
        </div>
      </div>

      {/* Red accent */}
      <div style={{ height: "3px", background: "#c41e3a" }} />
    </footer>
  );
}
