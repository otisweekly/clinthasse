"use client";

import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Urban Landscapes",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80",
  },
  {
    id: 2,
    title: "Quiet Moments",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  },
  {
    id: 3,
    title: "Night Sessions",
    category: "Music",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
  },
  {
    id: 4,
    title: "Light & Shadow",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&q=80",
  },
];

export default function WorkSection() {
  return (
    <section
      id="work"
      style={{
        padding: "120px 0",
        background: "#111",
      }}
    >
      <div
        className="section-padding"
        style={{ maxWidth: "1400px", margin: "0 auto" }}
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
            Selected Work
          </p>
          <h2
            className="font-display"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 400 }}
          >
            Photography & <span style={{ fontStyle: "italic", color: "#d4a373" }}>Visual Stories</span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={{ cursor: "pointer" }}
            >
              <div
                style={{
                  position: "relative",
                  aspectRatio: "4/3",
                  overflow: "hidden",
                  marginBottom: "1.5rem",
                  background: "#1a1a1a",
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.6s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)",
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
                {project.category}
              </p>
              <h3
                className="font-display"
                style={{ fontSize: "1.5rem", fontWeight: 400 }}
              >
                {project.title}
              </h3>
            </motion.article>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ marginTop: "4rem", textAlign: "center" }}
        >
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "1rem 2rem",
              border: "1px solid #333",
              color: "#fafafa",
              textDecoration: "none",
              fontSize: "0.875rem",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#d4a373";
              e.currentTarget.style.color = "#d4a373";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#333";
              e.currentTarget.style.color = "#fafafa";
            }}
          >
            View All Projects
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
