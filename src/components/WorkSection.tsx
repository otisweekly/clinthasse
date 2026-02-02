"use client";

import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Grain Elevator Operator",
    category: "Portrait",
    image: "/images/david-eilert.jpg",
  },
  {
    id: 2,
    title: "The Steel Guitar Builder",
    category: "Artisan",
    image: "/images/steel-guitar-builder.jpg",
  },
  {
    id: 3,
    title: "Visions of Chouteau's Landing",
    category: "Landscape",
    image: "/images/chouteaus-landing.jpg",
  },
  {
    id: 4,
    title: "MacArthur at Twilight",
    category: "Photography",
    image: "/images/macarthur-twilight.jpg",
  },
  {
    id: 5,
    title: "The Radio Host",
    category: "Portrait",
    image: "/images/fred-gumaer.jpg",
  },
  {
    id: 6,
    title: "The Bicycle Mechanic",
    category: "Portrait",
    image: "/images/bicycle-mechanic.jpg",
  },
  {
    id: 7,
    title: "Claire",
    category: "Portrait",
    image: "/images/claire.jpg",
  },
  {
    id: 8,
    title: "Dexter Silvers",
    category: "Portrait",
    image: "/images/dexter-silvers.jpg",
  },
  {
    id: 9,
    title: "Dr. John Cashion Bierk",
    category: "Portrait",
    image: "/images/john-bierk.jpg",
  },
  {
    id: 10,
    title: "The Painter",
    category: "Portrait",
    image: "/images/michael-bauermeister-painting.jpg",
  },
  {
    id: 11,
    title: "The Wood Carver",
    category: "Portrait",
    image: "/images/michael-bauermeister-bench.jpg",
  },
  {
    id: 12,
    title: "Richard Sprengeler",
    category: "Portrait",
    image: "/images/richard-sprengeler.jpg",
  },
  {
    id: 13,
    title: "Sam Licata at Work",
    category: "Portrait",
    image: "/images/sam-licata.jpg",
  },
  {
    id: 14,
    title: "The Ad Man",
    category: "Portrait",
    image: "/images/the-ad-man.jpg",
  },
  {
    id: 15,
    title: "The Aviator",
    category: "Portrait",
    image: "/images/the-aviator.jpg",
  },
  {
    id: 16,
    title: "The Urban Farmer",
    category: "Portrait",
    image: "/images/urban-farmer.jpg",
  },
  {
    id: 17,
    title: "Vince DiRaimondo",
    category: "Portrait",
    image: "/images/vince.jpg",
  },
  {
    id: 18,
    title: "The Automotive Mechanic",
    category: "Portrait",
    image: "/images/ray-at-bl.jpg",
  },
  {
    id: 19,
    title: "Donut Drive-In",
    category: "Landscape",
    image: "/images/donut-drive-in.jpg",
  },
  {
    id: 20,
    title: "Bicycle Men of the Hill",
    category: "Portrait",
    image: "/images/bicycle-men-of-the-hill.jpg",
  },
  {
    id: 21,
    title: "Rick Haydon",
    category: "Portrait",
    image: "/images/rick-haydon.jpg",
  },
  {
    id: 22,
    title: "Walter and Christie Carter",
    category: "Portrait",
    image: "/images/walter-and-christie.jpg",
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
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 400, color: "#d4b896" }}
          >
            Photography & <span style={{ fontStyle: "italic" }}>Visual Stories</span>
          </h2>
        </motion.div>

        {/* Masonry Grid */}
        <div
          style={{
            columnCount: 3,
            columnGap: "1.5rem",
          }}
          className="masonry-grid"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              style={{
                cursor: "pointer",
                breakInside: "avoid",
                marginBottom: "1.5rem",
              }}
            >
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  marginBottom: "1rem",
                  background: "#1a1a1a",
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    transition: "transform 0.6s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.03)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                />
              </div>
              <h3
                className="font-display"
                style={{ fontSize: "1.25rem", fontWeight: 400, color: "#d4b896" }}
              >
                {project.title}
              </h3>
            </motion.article>
          ))}
        </div>

        {/* Responsive masonry columns */}
        <style jsx global>{`
          .masonry-grid {
            column-count: 3;
          }
          @media (max-width: 1024px) {
            .masonry-grid {
              column-count: 2;
            }
          }
          @media (max-width: 640px) {
            .masonry-grid {
              column-count: 1;
            }
          }
        `}</style>

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
