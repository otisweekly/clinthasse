"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/xpwzgkvq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
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
                disabled={status === "sending"}
                style={{
                  padding: "1rem 3rem",
                  background: status === "sent" ? "#22c55e" : "#fafafa",
                  color: "#0a0a0a",
                  border: "none",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  cursor: status === "sending" ? "wait" : "pointer",
                  transition: "all 0.3s",
                  opacity: status === "sending" ? 0.7 : 1,
                }}
                onMouseEnter={(e) => {
                  if (status !== "sent") e.currentTarget.style.background = "#d4a373";
                }}
                onMouseLeave={(e) => {
                  if (status !== "sent") e.currentTarget.style.background = "#fafafa";
                }}
              >
                {status === "sending" ? "Sending..." : status === "sent" ? "Message Sent!" : "Send Message →"}
              </button>
              {status === "error" && (
                <p style={{ color: "#ef4444", marginTop: "1rem", fontSize: "0.875rem" }}>
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
