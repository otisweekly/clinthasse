"use client";

import { motion } from "framer-motion";

const tracks = [
  { title: "Kombucha", duration: "4:14" },
  { title: "I Rarely Mow My Lawn", duration: "3:45" },
  { title: "Audrey Lives Downstairs", duration: "3:32" },
  { title: "Two Minutes and Three Shots of Bourbon", duration: "3:49" },
  { title: "Disappearing Cowboy Way of Life", duration: "4:22" },
  { title: "Return to Bakersfield", duration: "4:08" },
];

export default function MusicSection() {
  return (
    <section
      id="music"
      style={{
        padding: "120px 0",
        background: "#0a0a0a",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative circles */}
      <div
        style={{
          position: "absolute",
          right: "-200px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          border: "1px solid #222",
          opacity: 0.3,
        }}
      />

      <div
        className="section-padding"
        style={{ maxWidth: "1400px", margin: "0 auto", position: "relative" }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: "4rem" }}
        >
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
            Listen
          </p>
          <h2
            className="font-display"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 400, color: "#d4b896" }}
          >
            Music & <span style={{ fontStyle: "italic" }}>Sound</span>
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "4rem",
          }}
          className="md:grid-cols-2"
        >
          {/* Album Feature */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div
              style={{
                aspectRatio: "1",
                background: "#111",
                marginBottom: "2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <img
                src="/images/inside-nashville-album.jpg"
                alt="Inside Nashville Album Cover"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            <p
              style={{
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#c41e3a",
                marginBottom: "0.5rem",
              }}
            >
              Album • 2017
            </p>
            <h3 className="font-display" style={{ fontSize: "2rem", marginBottom: "1rem", color: "#d4b896" }}>
              Inside Nashville
            </h3>
            <p style={{ color: "#888", lineHeight: 1.7, marginBottom: "2rem" }}>
              13 original country tracks capturing the spirit of Nashville with heartfelt storytelling. A journey through honky-tonks, love, and the disappearing cowboy way of life.
            </p>

            {/* Streaming Links */}
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a
                href="https://music.apple.com/us/artist/clint-hasse/1316269529"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "0.75rem 1.5rem",
                  border: "1px solid #333",
                  color: "#fafafa",
                  textDecoration: "none",
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#d4a373";
                  e.currentTarget.style.background = "rgba(212,163,115,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#333";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                Apple Music
              </a>
              <a
                href="https://open.spotify.com/artist/4Bt9p5U6k46ASQGTUrXLKL"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "0.75rem 1.5rem",
                  border: "1px solid #333",
                  color: "#fafafa",
                  textDecoration: "none",
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#d4a373";
                  e.currentTarget.style.background = "rgba(212,163,115,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#333";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                Spotify
              </a>
            </div>
          </motion.div>

          {/* Track List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#888",
                marginBottom: "2rem",
              }}
            >
              Selected Tracks
            </p>

            <div>
              {tracks.map((track, index) => (
                <a
                  key={track.title}
                  href="https://music.apple.com/us/album/inside-nashville/1316269155"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "1.5rem 0",
                    borderBottom: "1px solid #222",
                    cursor: "pointer",
                    transition: "all 0.3s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.paddingLeft = "1rem";
                    e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.paddingLeft = "0";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  <span style={{ color: "#555", marginRight: "2rem", fontSize: "0.875rem" }}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      border: "1px solid #333",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "1.5rem",
                    }}
                  >
                    <span style={{ fontSize: "0.75rem", marginLeft: "2px" }}>▶</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4 className="font-display" style={{ fontSize: "1.25rem", marginBottom: "0.25rem", color: "#d4b896" }}>
                      {track.title}
                    </h4>
                  </div>
                  <span style={{ color: "#555", fontSize: "0.875rem" }}>{track.duration}</span>
                </a>
              ))}
            </div>

            <div style={{ display: "flex", gap: "2rem", marginTop: "2rem", flexWrap: "wrap" }}>
              <a
                href="https://music.apple.com/us/album/inside-nashville/1316269155"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "#d4a373",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                }}
              >
                Listen to full catalog on Apple Music
                <span>→</span>
              </a>
              <a
                href="https://open.spotify.com/artist/4Bt9p5U6k46ASQGTUrXLKL"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "#1DB954",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                }}
              >
                Listen on Spotify
                <span>→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
