"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Photo gallery - 29 unique images
const projects = [
  // Black & White Photos
  { id: 1, title: "Grain Elevator Operator", category: "Portrait", image: "/images/david-eilert.jpg" },
  { id: 2, title: "The Bicycle Mechanic", category: "Portrait", image: "/images/bicycle-mechanic.jpg" },
  { id: 3, title: "The Radio Host", category: "Portrait", image: "/images/fred-gumaer.jpg" },
  { id: 4, title: "The Steel Guitar Builder", category: "Artisan", image: "/images/steel-guitar-builder.jpg" },
  { id: 5, title: "Dexter Silvers", category: "Portrait", image: "/images/dexter-silvers.jpg" },
  { id: 6, title: "Jessie - The Glassblower", category: "Portrait", image: "/images/jessie-oblon.jpg" },
  { id: 7, title: "Claire - The Original Owner", category: "Portrait", image: "/images/claire.jpg" },
  { id: 8, title: "The Aviator", category: "Portrait", image: "/images/the-aviator.jpg" },
  { id: 9, title: "The Wood Carver", category: "Portrait", image: "/images/michael-bauermeister-bench.jpg" },
  { id: 10, title: "The Urban Farmer", category: "Portrait", image: "/images/urban-farmer.jpg" },
  { id: 11, title: "The Painter", category: "Portrait", image: "/images/michael-bauermeister-painting.jpg" },
  { id: 12, title: "Richard Sprengeler", category: "Portrait", image: "/images/richard-sprengeler.jpg" },
  { id: 13, title: "Sam - The Glassblower", category: "Portrait", image: "/images/sam-stang.jpg" },
  { id: 14, title: "The Drummer", category: "Portrait", image: "/images/the-drummer.jpg" },
  { id: 15, title: "The Ad Man", category: "Portrait", image: "/images/the-ad-man.jpg" },
  { id: 16, title: "Rick Haydon", category: "Portrait", image: "/images/rick-haydon.jpg" },
  { id: 17, title: "The Sculptor", category: "Portrait", image: "/images/michael-bauermeister-sculptures.jpg" },
  { id: 18, title: "Dr. John Cashion Bierk", category: "Portrait", image: "/images/john-bierk.jpg" },
  { id: 19, title: "Sione and Janet", category: "Portrait", image: "/images/image002.jpg" },
  { id: 20, title: "Grease 3", category: "Portrait", image: "/images/avedonesque-group.jpg" },
  // Color Photos
  { id: 21, title: "Donut Drive-In", category: "Landscape", image: "/images/donut-drive-in.jpg" },
  { id: 22, title: "MacArthur at Twilight", category: "Photography", image: "/images/macarthur-twilight.jpg" },
  { id: 23, title: "Sam Licata at Work - The Hill", category: "Portrait", image: "/images/sam-licata.jpg" },
  { id: 24, title: "Bicycle Men of the Hill", category: "Portrait", image: "/images/bicycle-men-of-the-hill.jpg" },
  { id: 25, title: "The Automotive Mechanic", category: "Portrait", image: "/images/ray-at-bl.jpg" },
  { id: 26, title: "Walter and Christie Carter - Nashville", category: "Portrait", image: "/images/walter-and-christie.jpg" },
  { id: 27, title: "Vince DiRaimondo - The Hill", category: "Portrait", image: "/images/vince.jpg" },
  { id: 28, title: "Visions of Chouteau's Landing", category: "Landscape", image: "/images/chouteaus-landing.jpg" },
  { id: 29, title: "David and Larry - The Hill", category: "Portrait", image: "/images/david-and-larry.jpg" },
  { id: 30, title: "Michael Santangelo - The Hill", category: "Portrait", image: "/images/michael-santangelo.jpg" },
];

export default function WorkSection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  const goNext = () => setSelectedIndex((prev) => (prev !== null ? (prev + 1) % projects.length : null));
  const goPrev = () => setSelectedIndex((prev) => (prev !== null ? (prev - 1 + projects.length) % projects.length : null));

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selectedIndex]);

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
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 400, color: "#d4b896" }}
          >
            Photography & Visual Stories
          </h2>
        </motion.div>

        {/* Photo Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
          className="photo-grid"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              onClick={() => openLightbox(index)}
              style={{
                cursor: "pointer",
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  marginBottom: "1rem",
                }}
              />
              <h3
                className="font-display"
                style={{ fontSize: "18px", fontWeight: 400, color: "#d4b896" }}
              >
                {project.title}
              </h3>
            </motion.article>
          ))}
        </div>

        {/* Responsive grid */}
        <style jsx global>{`
          .photo-grid img {
            width: 100% !important;
            height: auto !important;
            max-width: 100% !important;
            max-height: none !important;
          }
          @media (max-width: 1024px) {
            .photo-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (max-width: 640px) {
            .photo-grid {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 0.75rem !important;
            }
          }
        `}</style>

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              background: "rgba(0, 0, 0, 0.95)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem",
            }}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "1.5rem",
                background: "none",
                border: "none",
                color: "#fff",
                fontSize: "2rem",
                cursor: "pointer",
                padding: "0.5rem",
                lineHeight: 1,
                opacity: 0.7,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
            >
              ×
            </button>

            {/* Previous button */}
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              style={{
                position: "absolute",
                left: "1.5rem",
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                color: "#fff",
                fontSize: "2.5rem",
                cursor: "pointer",
                padding: "1rem",
                opacity: 0.7,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
            >
              ‹
            </button>

            {/* Next button */}
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              style={{
                position: "absolute",
                right: "1.5rem",
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                color: "#fff",
                fontSize: "2.5rem",
                cursor: "pointer",
                padding: "1rem",
                opacity: 0.7,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
            >
              ›
            </button>

            {/* Image container */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: "90vw",
                maxHeight: "85vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={projects[selectedIndex].image}
                alt={projects[selectedIndex].title}
                style={{
                  maxWidth: "100%",
                  maxHeight: "75vh",
                  objectFit: "contain",
                }}
              />
              <h3
                className="font-display"
                style={{
                  marginTop: "1.5rem",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  color: "#d4b896",
                  textAlign: "center",
                }}
              >
                {projects[selectedIndex].title}
              </h3>
              <p style={{ color: "#666", fontSize: "0.875rem", marginTop: "0.5rem" }}>
                {selectedIndex + 1} / {projects.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
