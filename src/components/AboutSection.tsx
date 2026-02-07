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
        {/* Stacked layout - image on top */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "3rem",
            maxWidth: "800px",
            margin: "0 auto",
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
            </div>
                      </motion.div>

          {/* Right: Bio content */}
          <motion.div
            className="about-bio"
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
              <span style={{ color: "#d4b896" }}>Visual Artist</span>
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
                Clint enjoyed 16+ years with 5 On Your Side KSDK/TEGNA conceiving, writing and producing broadcast and digital campaigns. Previously, at KMOX Radio Clint worked in sales, sales management, talk show host and voiceover artist. Clint brings decades of experience in ideation, writing, producing, musical image/jingle creation and voiceover work.
              </p>

              {/* Marty Stuart Interview */}
              <div style={{ marginTop: "2rem", marginBottom: "2rem", maxWidth: "400px" }}>
                <p style={{ color: "#888", fontSize: "0.9rem", marginBottom: "0.75rem", fontWeight: "bold" }}>
                  Interview with Country Music performer, impresario, ambassador and historian{" "}
                  <a
                    href="https://www.countrymusichalloffame.org/hall-of-fame/marty-stuart"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#d4a373", textDecoration: "none" }}
                  >
                    Marty Stuart
                  </a>{" "}
                  on KMOX
                </p>
                <audio
                  controls
                  style={{
                    width: "100%",
                    height: "40px",
                  }}
                >
                  <source src="/audio/marty-stuart-interview.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>

              {/* Musical Image Example */}
              <div style={{ marginTop: "2rem", marginBottom: "2rem", maxWidth: "400px" }}>
                <p style={{ color: "#888", fontSize: "0.9rem", marginBottom: "0.75rem", fontWeight: "bold" }}>
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

              {/* Commercial Messaging Example */}
              <div style={{ marginTop: "2rem", marginBottom: "2rem", maxWidth: "400px" }}>
                <p style={{ color: "#888", fontSize: "0.9rem", marginBottom: "0.75rem", fontWeight: "bold" }}>
                  Commercial Messaging Example: Conceived, written, produced and voiced by Clint
                </p>
                <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
                  <iframe
                    src="https://www.youtube.com/embed/lHwx-WGJWNk"
                    title="Commercial Messaging Example"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      border: "none",
                    }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              <p style={{ color: "#ccc", lineHeight: 1.7, marginBottom: "1.25rem", fontSize: "1.1rem" }}>
                Clint is a lifelong guitarist, vocalist and songwriter. Listen to his album INSIDE NASHVILLE released in 2017 on{" "}
                <a
                  href="https://www.youtube.com/playlist?list=OLAK5uy_kx4AheYEk94rDVzDhcmrpOUKebBD9DcvE"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#d4a373", textDecoration: "none" }}
                >
                  YouTube
                </a>.
              </p>

              <img
                src="/images/inside-nashville-cover.jpg"
                alt="Inside Nashville Album Cover"
                style={{
                  width: "150px",
                  height: "auto",
                  marginBottom: "1.5rem",
                }}
              />

              <p style={{ color: "#ccc", lineHeight: 1.7, fontSize: "1.1rem" }}>
                As a photographer, Clint specializes in portraiture and in particular, environmental portraiture. This is where the subject is captured in their own private space doing what they love to do; offering insights into their humanity and triggering contemplation of your own pursuits. This is what it means to be human.
              </p>

              <img
                src="/images/dexter-silvers.jpg"
                alt="Dexter Silvers - Environmental Portrait"
                style={{
                  width: "150px",
                  height: "auto",
                  marginTop: "1.5rem",
                }}
              />
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
                &ldquo;Every song and photograph tells a story. Every song and photograph lives forever.&rdquo;
              </p>
            </blockquote>
          </motion.div>
        </div>
      </div>

      {/* Mobile adjustments */}
      <style jsx global>{`
        @media (max-width: 768px) {
          #about .about-bio p,
          #about .about-bio div p {
            text-align: left !important;
            max-width: 100% !important;
            width: 100% !important;
          }
          #about h2 {
            text-align: left !important;
          }
        }
      `}</style>
    </section>
  );
}
