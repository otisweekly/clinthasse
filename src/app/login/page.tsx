"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await signIn("credentials", {
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid password");
      setLoading(false);
    } else {
      router.push("/admin");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      <div
        style={{
          maxWidth: "400px",
          width: "100%",
        }}
      >
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <img
            src="/logo.svg"
            alt="Clint Hasse"
            style={{
              height: "24px",
              width: "auto",
              filter: "invert(1)",
              opacity: 0.8,
            }}
          />
        </div>

        {/* Login Box */}
        <div
          style={{
            background: "#111",
            border: "1px solid #222",
            padding: "2.5rem",
          }}
        >
          <div style={{ marginBottom: "2rem" }}>
            <p
              style={{
                fontSize: "0.7rem",
                textTransform: "uppercase",
                letterSpacing: "0.25em",
                color: "#c41e3a",
                marginBottom: "0.5rem",
              }}
            >
              Private Access
            </p>
            <h1
              className="font-display"
              style={{
                fontSize: "1.75rem",
                fontWeight: 300,
                color: "#fafafa",
              }}
            >
              Collection Admin
            </h1>
          </div>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "1.5rem" }}>
              <label
                htmlFor="password"
                style={{
                  display: "block",
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "#888",
                  marginBottom: "0.5rem",
                }}
              >
                Password
              </label>
              <div style={{ position: "relative" }}>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  style={{
                    width: "100%",
                    padding: "0.875rem 3rem 0.875rem 1rem",
                    background: "#0a0a0a",
                    border: "1px solid #333",
                    color: "#fafafa",
                    fontSize: "1rem",
                    outline: "none",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#d4a373")}
                  onBlur={(e) => (e.target.style.borderColor = "#333")}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: "absolute",
                    right: "0.75rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "none",
                    border: "none",
                    color: "#666",
                    cursor: "pointer",
                    padding: "0.25rem",
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {error && (
              <p
                style={{
                  color: "#c41e3a",
                  fontSize: "0.875rem",
                  marginBottom: "1rem",
                }}
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                padding: "0.875rem",
                background: loading ? "#333" : "#fafafa",
                color: "#0a0a0a",
                border: "none",
                fontSize: "0.75rem",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                cursor: loading ? "not-allowed" : "pointer",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                if (!loading) e.currentTarget.style.background = "#d4a373";
              }}
              onMouseLeave={(e) => {
                if (!loading) e.currentTarget.style.background = "#fafafa";
              }}
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>

        <p
          style={{
            textAlign: "center",
            marginTop: "2rem",
            fontSize: "0.75rem",
            color: "#555",
          }}
        >
          <a href="/" style={{ color: "#888", textDecoration: "none" }}>
            ← Back to main site
          </a>
        </p>
      </div>
    </div>
  );
}
