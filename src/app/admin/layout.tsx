"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div style={{ minHeight: "100vh", background: "#0a0a0a", display: "flex", alignItems: "center", justifyContent: "center", color: "#888" }}>
        Loading...
      </div>
    );
  }

  if (!session) return null;

  const isGuitarsPage = pathname === "/admin" || pathname === "/admin/guitars";
  const isSitePage = pathname === "/admin/site";

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a" }}>
      {/* Top Navigation */}
      <nav style={{
        background: "#0a0a0a",
        borderBottom: "1px solid #222",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}>
        <div style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "60px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <a href="/" style={{ display: "flex", alignItems: "center" }}>
              <img src="/logo.svg" alt="Clint Hasse" style={{ height: "18px", filter: "invert(1)" }} />
            </a>

            <div style={{ display: "flex", gap: "0.25rem" }}>
              <a
                href="/admin"
                style={{
                  padding: "0.5rem 1rem",
                  background: isGuitarsPage ? "#1a1a1a" : "transparent",
                  border: "none",
                  color: isGuitarsPage ? "#fafafa" : "#666",
                  fontSize: "0.85rem",
                  textDecoration: "none",
                  borderRadius: "4px",
                }}
              >
                Guitar Collection
              </a>
              <a
                href="/admin/site"
                style={{
                  padding: "0.5rem 1rem",
                  background: isSitePage ? "#1a1a1a" : "transparent",
                  border: "none",
                  color: isSitePage ? "#fafafa" : "#666",
                  fontSize: "0.85rem",
                  textDecoration: "none",
                  borderRadius: "4px",
                }}
              >
                Edit Website
              </a>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <a
              href="/"
              target="_blank"
              style={{
                color: "#666",
                fontSize: "0.8rem",
                textDecoration: "none",
              }}
            >
              View Site →
            </a>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              style={{
                background: "none",
                border: "1px solid #333",
                color: "#666",
                padding: "0.4rem 0.8rem",
                fontSize: "0.75rem",
                cursor: "pointer",
                borderRadius: "4px",
              }}
            >
              Sign Out
            </button>
          </div>
        </div>
      </nav>

      {children}
    </div>
  );
}
