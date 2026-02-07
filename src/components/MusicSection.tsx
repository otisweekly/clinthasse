"use client";

import { motion } from "framer-motion";

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
            Music & Sound
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
              13 original songs capturing the spirit of the Nashville experience with heartfelt storytelling. A journey through the honky-tonks, love and the disappearing cowboy way of life. Available on all streaming platforms including{" "}
              <a
                href="https://www.youtube.com/playlist?list=OLAK5uy_kx4AheYEk94rDVzDhcmrpOUKebBD9DcvE"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#d4a373", textDecoration: "none" }}
              >
                YouTube
              </a>.
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

          {/* Spotify Player */}
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
              Preview Tracks
            </p>

            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/album/2pTAaTMlrI3Fv5Vc5P05Pj?utm_source=generator&theme=0"
              width="100%"
              height="452"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />

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
                Listen on Apple Music
                <span>→</span>
              </a>
            </div>

            {/* Other Original Music */}
            <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid #222" }}>
              <p style={{ color: "#888", fontSize: "1.25rem", marginBottom: "1.5rem" }}>
                Other Original Music
              </p>
              <h4 className="font-display" style={{ fontSize: "1.25rem", marginBottom: "0.5rem", color: "#d4b896" }}>
                In the Rain
              </h4>
              <p style={{ color: "#888", fontSize: "1.1rem", marginBottom: "1rem" }}>
                Written and performed by Clint and The Sappingtones
              </p>
              <audio
                controls
                style={{
                  width: "100%",
                  height: "40px",
                }}
              >
                <source src="/audio/in-the-rain.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>

            {/* Won't You Come On Over Ruby */}
            <div style={{ marginTop: "2rem" }}>
              <h4 className="font-display" style={{ fontSize: "1.25rem", marginBottom: "0.5rem", color: "#d4b896" }}>
                Won't You Come On Over Ruby
              </h4>
              <p style={{ color: "#888", fontSize: "1.1rem", marginBottom: "1rem" }}>
                Written and performed by Clint and The Basement Boys
              </p>
              <audio
                controls
                style={{
                  width: "100%",
                  height: "40px",
                }}
              >
                <source src="/audio/wont-you-come-on-over-ruby.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
