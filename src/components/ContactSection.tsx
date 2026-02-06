"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  const inputStyle = {
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid #333",
    padding: "1rem 0",
    color: "#fafafa",
    fontSize: "1rem",
    outline: "none",
    transition: "border-color 0.3s",
  };

  return (
    <section
      id="contact"
      style={{
        padding: "120px 0",
        background: "#0a0a0a",
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
            Contact
          </p>
          <h2
            className="font-display"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 400 }}
          >
            Let&apos;s Start a <span style={{ fontStyle: "italic", color: "#d4a373" }}>Conversation</span>
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "4rem",
          }}
          className="lg:grid-cols-2"
        >
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p style={{ color: "#888", lineHeight: 1.8, marginBottom: "3rem", maxWidth: "400px" }}>
              Interested in collaborating, commissioning work, or just want to say hello?
              I&apos;d love to hear from you.
            </p>

            <div style={{ marginBottom: "2rem" }}>
              <p
                style={{
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "#c41e3a",
                  marginBottom: "0.5rem",
                }}
              >
                Email
              </p>
              <a
                href="mailto:clinthasse@gmail.com"
                className="font-display"
                style={{
                  fontSize: "1.5rem",
                  color: "#fafafa",
                  textDecoration: "none",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#d4a373")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#fafafa")}
              >
                clinthasse@gmail.com
              </a>
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <p
                style={{
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "#c41e3a",
                  marginBottom: "0.5rem",
                }}
              >
                Location
              </p>
              <p className="font-display" style={{ fontSize: "1.5rem" }}>
                St. Louis, Missouri, USA
              </p>
            </div>

          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "2rem" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "#888",
                    marginBottom: "0.5rem",
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  required
                  style={inputStyle}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#d4a373")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#333")}
                />
              </div>

              <div style={{ marginBottom: "2rem" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "#888",
                    marginBottom: "0.5rem",
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  required
                  style={inputStyle}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#d4a373")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#333")}
                />
              </div>

              <div style={{ marginBottom: "2rem" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "#888",
                    marginBottom: "0.5rem",
                  }}
                >
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  style={{ ...inputStyle, resize: "none" }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#d4a373")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#333")}
                />
              </div>

              <button
                type="submit"
                style={{
                  padding: "1rem 3rem",
                  background: "#fafafa",
                  color: "#0a0a0a",
                  border: "none",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#d4a373";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#fafafa";
                }}
              >
                Send Message →
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
