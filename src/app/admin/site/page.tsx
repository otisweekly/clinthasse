"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { defaultSiteContent, SiteContent } from "@/lib/siteContent";

export default function SiteContentPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [content, setContent] = useState<SiteContent>(defaultSiteContent);
  const [activeTab, setActiveTab] = useState<"hero" | "about" | "music" | "contact">("hero");
  const [saved, setSaved] = useState(false);

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

  const handleSave = () => {
    // In a real app, this would save to a database
    console.log("Saving content:", content);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const tabs = [
    { id: "hero", label: "Home Page" },
    { id: "about", label: "About Me" },
    { id: "music", label: "Music" },
    { id: "contact", label: "Contact" },
  ] as const;

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a" }}>
      {/* Simple Header */}
      <header style={{ borderBottom: "1px solid #222", padding: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <a href="/admin" style={{ color: "#888", textDecoration: "none", fontSize: "0.85rem" }}>← Back to Collection</a>
          <span style={{ color: "#333" }}>|</span>
          <span style={{ color: "#fafafa", fontSize: "1rem" }}>Edit Website Content</span>
        </div>
        <div style={{ display: "flex", gap: "0.75rem" }}>
          <a href="/" target="_blank" style={{ background: "#222", border: "none", color: "#888", padding: "0.5rem 1rem", fontSize: "0.8rem", textDecoration: "none" }}>
            View Site
          </a>
          <button
            onClick={handleSave}
            style={{
              background: saved ? "#22c55e" : "#d4a373",
              border: "none",
              color: "#0a0a0a",
              padding: "0.5rem 1.5rem",
              fontSize: "0.8rem",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            {saved ? "Saved!" : "Save Changes"}
          </button>
        </div>
      </header>

      {/* Tab Navigation - Big buttons for easy tapping */}
      <div style={{ borderBottom: "1px solid #222", padding: "0.5rem 1rem", display: "flex", gap: "0.5rem", overflowX: "auto" }}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: "0.75rem 1.5rem",
              background: activeTab === tab.id ? "#1a1a1a" : "transparent",
              border: activeTab === tab.id ? "1px solid #333" : "1px solid transparent",
              color: activeTab === tab.id ? "#fafafa" : "#666",
              fontSize: "0.9rem",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem 1rem" }}>
        {activeTab === "hero" && (
          <HeroEditor content={content} onChange={(hero) => setContent({ ...content, hero })} />
        )}
        {activeTab === "about" && (
          <AboutEditor content={content} onChange={(about) => setContent({ ...content, about })} />
        )}
        {activeTab === "music" && (
          <MusicEditor content={content} onChange={(music) => setContent({ ...content, music })} />
        )}
        {activeTab === "contact" && (
          <ContactEditor content={content} onChange={(contact) => setContent({ ...content, contact })} />
        )}
      </div>
    </div>
  );
}

// Large, easy-to-use input styles
const inputStyle = {
  width: "100%",
  padding: "1rem",
  background: "#111",
  border: "1px solid #222",
  color: "#fafafa",
  fontSize: "1rem",
  borderRadius: "4px",
};

const labelStyle = {
  display: "block",
  fontSize: "0.9rem",
  color: "#888",
  marginBottom: "0.5rem",
  fontWeight: 500 as const,
};

const sectionStyle = {
  marginBottom: "2rem",
};

function HeroEditor({ content, onChange }: { content: SiteContent; onChange: (hero: SiteContent["hero"]) => void }) {
  return (
    <div>
      <h2 style={{ fontSize: "1.5rem", marginBottom: "1.5rem", color: "#fafafa" }}>Home Page</h2>
      <p style={{ color: "#666", marginBottom: "2rem", fontSize: "0.9rem" }}>
        This is what people see first when they visit your website.
      </p>

      <div style={sectionStyle}>
        <label style={labelStyle}>Tagline (appears under your name)</label>
        <input
          type="text"
          value={content.hero.tagline}
          onChange={(e) => onChange({ ...content.hero, tagline: e.target.value })}
          style={inputStyle}
          placeholder="e.g., Broadcaster • Musician • Visual Artist"
        />
      </div>

      <div style={sectionStyle}>
        <label style={labelStyle}>Short Description</label>
        <textarea
          value={content.hero.description}
          onChange={(e) => onChange({ ...content.hero, description: e.target.value })}
          style={{ ...inputStyle, minHeight: "100px", resize: "vertical" }}
          placeholder="A brief description of who you are and what you do"
        />
      </div>
    </div>
  );
}

function AboutEditor({ content, onChange }: { content: SiteContent; onChange: (about: SiteContent["about"]) => void }) {
  return (
    <div>
      <h2 style={{ fontSize: "1.5rem", marginBottom: "1.5rem", color: "#fafafa" }}>About Me</h2>
      <p style={{ color: "#666", marginBottom: "2rem", fontSize: "0.9rem" }}>
        Tell your story. This section helps visitors get to know you.
      </p>

      <div style={sectionStyle}>
        <label style={labelStyle}>Headline</label>
        <input
          type="text"
          value={content.about.headline}
          onChange={(e) => onChange({ ...content.about, headline: e.target.value })}
          style={inputStyle}
        />
      </div>

      <div style={sectionStyle}>
        <label style={labelStyle}>Bio Paragraph 1</label>
        <textarea
          value={content.about.bio[0] || ""}
          onChange={(e) => {
            const newBio = [...content.about.bio];
            newBio[0] = e.target.value;
            onChange({ ...content.about, bio: newBio });
          }}
          style={{ ...inputStyle, minHeight: "120px", resize: "vertical" }}
        />
      </div>

      <div style={sectionStyle}>
        <label style={labelStyle}>Bio Paragraph 2</label>
        <textarea
          value={content.about.bio[1] || ""}
          onChange={(e) => {
            const newBio = [...content.about.bio];
            newBio[1] = e.target.value;
            onChange({ ...content.about, bio: newBio });
          }}
          style={{ ...inputStyle, minHeight: "120px", resize: "vertical" }}
        />
      </div>

      <div style={sectionStyle}>
        <label style={labelStyle}>Bio Paragraph 3</label>
        <textarea
          value={content.about.bio[2] || ""}
          onChange={(e) => {
            const newBio = [...content.about.bio];
            newBio[2] = e.target.value;
            onChange({ ...content.about, bio: newBio });
          }}
          style={{ ...inputStyle, minHeight: "120px", resize: "vertical" }}
        />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", ...sectionStyle }}>
        <div>
          <label style={labelStyle}>Location</label>
          <input
            type="text"
            value={content.about.location}
            onChange={(e) => onChange({ ...content.about, location: e.target.value })}
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>Current Work</label>
          <input
            type="text"
            value={content.about.currentWork}
            onChange={(e) => onChange({ ...content.about, currentWork: e.target.value })}
            style={inputStyle}
          />
        </div>
      </div>

      <div style={sectionStyle}>
        <label style={labelStyle}>Quote (optional)</label>
        <textarea
          value={content.about.quote}
          onChange={(e) => onChange({ ...content.about, quote: e.target.value })}
          style={{ ...inputStyle, minHeight: "80px", resize: "vertical" }}
          placeholder="A personal quote or motto"
        />
      </div>
    </div>
  );
}

function MusicEditor({ content, onChange }: { content: SiteContent; onChange: (music: SiteContent["music"]) => void }) {
  const toggleFeatured = (index: number) => {
    const newTracks = [...content.music.tracks];
    newTracks[index] = { ...newTracks[index], featured: !newTracks[index].featured };
    onChange({ ...content.music, tracks: newTracks });
  };

  return (
    <div>
      <h2 style={{ fontSize: "1.5rem", marginBottom: "1.5rem", color: "#fafafa" }}>Music Section</h2>
      <p style={{ color: "#666", marginBottom: "2rem", fontSize: "0.9rem" }}>
        Manage your album info and choose which songs to feature on your website.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "1rem", ...sectionStyle }}>
        <div>
          <label style={labelStyle}>Album Title</label>
          <input
            type="text"
            value={content.music.albumTitle}
            onChange={(e) => onChange({ ...content.music, albumTitle: e.target.value })}
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>Year</label>
          <input
            type="text"
            value={content.music.albumYear}
            onChange={(e) => onChange({ ...content.music, albumYear: e.target.value })}
            style={inputStyle}
          />
        </div>
      </div>

      <div style={sectionStyle}>
        <label style={labelStyle}>Album Description</label>
        <textarea
          value={content.music.albumDescription}
          onChange={(e) => onChange({ ...content.music, albumDescription: e.target.value })}
          style={{ ...inputStyle, minHeight: "100px", resize: "vertical" }}
        />
      </div>

      <div style={sectionStyle}>
        <label style={labelStyle}>Streaming Links</label>
        <div style={{ display: "grid", gap: "0.75rem" }}>
          <input
            type="url"
            value={content.music.appleMusicUrl}
            onChange={(e) => onChange({ ...content.music, appleMusicUrl: e.target.value })}
            style={inputStyle}
            placeholder="Apple Music URL"
          />
          <input
            type="url"
            value={content.music.spotifyUrl}
            onChange={(e) => onChange({ ...content.music, spotifyUrl: e.target.value })}
            style={inputStyle}
            placeholder="Spotify URL"
          />
        </div>
      </div>

      <div style={sectionStyle}>
        <label style={labelStyle}>Songs (tap to show/hide on website)</label>
        <p style={{ color: "#555", fontSize: "0.8rem", marginBottom: "1rem" }}>
          Green = shown on website, Gray = hidden
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {content.music.tracks.map((track, index) => (
            <button
              key={index}
              onClick={() => toggleFeatured(index)}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1rem",
                background: track.featured ? "#1a2e1a" : "#111",
                border: track.featured ? "1px solid #22c55e" : "1px solid #222",
                color: track.featured ? "#fafafa" : "#666",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              <span style={{ fontSize: "1rem" }}>{track.title}</span>
              <span style={{ fontSize: "0.85rem", color: "#888" }}>{track.duration}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContactEditor({ content, onChange }: { content: SiteContent; onChange: (contact: SiteContent["contact"]) => void }) {
  const updateLink = (index: number, field: "name" | "url", value: string) => {
    const newLinks = [...content.contact.socialLinks];
    newLinks[index] = { ...newLinks[index], [field]: value };
    onChange({ ...content.contact, socialLinks: newLinks });
  };

  return (
    <div>
      <h2 style={{ fontSize: "1.5rem", marginBottom: "1.5rem", color: "#fafafa" }}>Contact Info</h2>
      <p style={{ color: "#666", marginBottom: "2rem", fontSize: "0.9rem" }}>
        How people can reach you and find you online.
      </p>

      <div style={sectionStyle}>
        <label style={labelStyle}>Email Address</label>
        <input
          type="email"
          value={content.contact.email}
          onChange={(e) => onChange({ ...content.contact, email: e.target.value })}
          style={inputStyle}
          placeholder="your@email.com"
        />
      </div>

      <div style={sectionStyle}>
        <label style={labelStyle}>Social Links</label>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {content.contact.socialLinks.map((link, index) => (
            <div key={index} style={{ display: "grid", gridTemplateColumns: "150px 1fr", gap: "0.5rem" }}>
              <input
                type="text"
                value={link.name}
                onChange={(e) => updateLink(index, "name", e.target.value)}
                style={{ ...inputStyle, padding: "0.75rem" }}
                placeholder="Name"
              />
              <input
                type="url"
                value={link.url}
                onChange={(e) => updateLink(index, "url", e.target.value)}
                style={{ ...inputStyle, padding: "0.75rem" }}
                placeholder="https://..."
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
