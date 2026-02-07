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
              Broadcaster, Musician & <span style={{ color: "#d4a373" }}>Visual Artist</span>
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
                  <p style={{ color: "#888", fontSize: "0.875rem", marginBottom: "1rem" }}>
                    St. Louis Gypsy Jazz Ensemble
                  </p>
                  <img
                    src="/images/swing-deville.jpg"
                    alt="Swing DeVille - Spectator Swing"
                    style={{
                      width: "100%",
                      maxWidth: "120px",
                      height: "auto",
                    }}
                  />
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

                {/* Musical Image Example */}
                <div style={{ marginTop: "1.5rem" }}>
                  <p style={{ color: "#888", fontSize: "0.875rem", marginBottom: "0.75rem" }}>
                    Musical Image Example: Conceived, written and performed by Clint and The Sappingtones
                  </p>
                  <audio
                    controls
                    style={{
                      width: "100%",
                      height: "40px",
                    }}
                  >
                    <source src="/audio/skys-the-limit.wav" type="audio/wav" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
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
                  <a
                    href="https://www.youtube.com/playlist?list=OLAK5uy_kx4AheYEk94rDVzDhcmrpOUKebBD9DcvE"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#888", textDecoration: "none", fontSize: "0.875rem" }}
                  >
                    YouTube
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
          <a
            href="#"
            className="font-display"
            style={{
              textDecoration: "none",
              fontSize: "20px",
              fontWeight: 700,
              color: "#fafafa",
              letterSpacing: "0.02em",
            }}
          >
            Clint Hasse
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
