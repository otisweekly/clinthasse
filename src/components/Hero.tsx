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
        background: "#0a0a0a",
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
          className="section-padding"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
            zIndex: 10,
            paddingTop: "120px",
            paddingBottom: "60px",
          }}
        >
          {/* Intro label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: "1.5rem" }}
          >
            <p
              style={{
                fontSize: "0.7rem",
                textTransform: "uppercase",
                letterSpacing: "0.25em",
                color: "#888",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <span style={{ width: "40px", height: "1px", background: "#c41e3a" }} />
              St. Louis, Missouri
            </p>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display"
            style={{
              fontSize: "clamp(3rem, 8vw, 6rem)",
              fontWeight: 300,
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
              marginBottom: "0.25em",
            }}
          >
            Clint
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="font-display"
            style={{
              fontSize: "clamp(3rem, 8vw, 6rem)",
              fontWeight: 300,
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
              fontStyle: "italic",
              color: "#d4a373",
            }}
          >
            Hasse
          </motion.h1>

          {/* Role tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{
              display: "flex",
              gap: "0.75rem",
              marginTop: "2rem",
              flexWrap: "wrap",
            }}
          >
            {["Broadcaster", "Musician", "Photographer"].map((role) => (
              <span
                key={role}
                style={{
                  padding: "0.5rem 1rem",
                  border: "1px solid #333",
                  fontSize: "0.7rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "#888",
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
            style={{
              marginTop: "2rem",
              fontSize: "1rem",
              color: "#666",
              maxWidth: "380px",
              lineHeight: 1.7,
            }}
          >
            Four decades of storytelling through broadcast, gypsy jazz, and the lens.
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
                padding: "0.875rem 2rem",
                background: "#fafafa",
                color: "#0a0a0a",
                textDecoration: "none",
                fontSize: "0.75rem",
                fontWeight: 500,
                letterSpacing: "0.05em",
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
                padding: "0.875rem 2rem",
                border: "1px solid #444",
                color: "#fafafa",
                textDecoration: "none",
                fontSize: "0.75rem",
                fontWeight: 500,
                letterSpacing: "0.05em",
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
              src="https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?w=800&q=80"
              alt="Musician portrait"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "grayscale(30%) contrast(1.1)",
              }}
            />
            {/* Overlay gradient */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(10,10,10,0.4) 0%, transparent 50%)",
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
              src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&q=80"
              alt="Guitar detail"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "grayscale(40%)",
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
              color: "#444",
            }}
          >
            Inside Nashville • 2017
          </div>
        </motion.div>
      </div>

      {/* Mobile background image */}
      <div
        className="md:hidden"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.15,
          backgroundImage: "url(https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?w=800&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
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
        <span style={{ fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "#555" }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ width: "1px", height: "30px", background: "linear-gradient(to bottom, #444, transparent)" }}
        />
      </motion.div>
    </section>
  );
}
