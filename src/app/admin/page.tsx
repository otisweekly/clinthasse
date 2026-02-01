"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState, useMemo } from "react";
import { initialGuitars, Guitar, exportToCSV, getCollectionValueRange } from "@/lib/guitars";

type SortField = "name" | "manufacturer" | "type" | "value";
type SortDir = "asc" | "desc";
type ViewMode = "list" | "grid" | "photos";

export default function AdminPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [guitars, setGuitars] = useState<Guitar[]>(initialGuitars);
  const [selectedGuitar, setSelectedGuitar] = useState<Guitar | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortField, setSortField] = useState<SortField>("name");
  const [sortDir, setSortDir] = useState<SortDir>("asc");
  const [filterType, setFilterType] = useState<string>("all");
  const [filterTag, setFilterTag] = useState<string>("all");
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const [showPhotoViewer, setShowPhotoViewer] = useState(false);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    guitars.forEach(g => g.tags.forEach(t => tags.add(t)));
    return Array.from(tags).sort();
  }, [guitars]);

  // Get all unique types
  const allTypes = useMemo(() => {
    const types = new Set<string>();
    guitars.forEach(g => types.add(g.type));
    return Array.from(types).sort();
  }, [guitars]);

  // Filter and sort guitars
  const filteredGuitars = useMemo(() => {
    let result = [...guitars];

    // Search
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(g =>
        g.name.toLowerCase().includes(q) ||
        g.manufacturer.toLowerCase().includes(q) ||
        g.tags.some(t => t.toLowerCase().includes(q)) ||
        g.serialNumber?.toLowerCase().includes(q)
      );
    }

    // Filter by type
    if (filterType !== "all") {
      result = result.filter(g => g.type === filterType);
    }

    // Filter by tag
    if (filterTag !== "all") {
      result = result.filter(g => g.tags.includes(filterTag));
    }

    // Sort
    result.sort((a, b) => {
      let comparison = 0;
      switch (sortField) {
        case "name":
          comparison = a.name.localeCompare(b.name);
          break;
        case "manufacturer":
          comparison = a.manufacturer.localeCompare(b.manufacturer);
          break;
        case "type":
          comparison = a.type.localeCompare(b.type);
          break;
        case "value":
          comparison = (a.estimatedValue?.high || 0) - (b.estimatedValue?.high || 0);
          break;
      }
      return sortDir === "asc" ? comparison : -comparison;
    });

    return result;
  }, [guitars, searchQuery, sortField, sortDir, filterType, filterTag]);

  const collectionValue = useMemo(() => getCollectionValueRange(guitars), [guitars]);

  if (status === "loading" || !session) {
    return null; // Layout handles auth
  }

  const handleUpdateGuitar = (updatedGuitar: Guitar) => {
    setGuitars(prev => prev.map(g => g.id === updatedGuitar.id ? updatedGuitar : g));
    setSelectedGuitar(updatedGuitar);
    setEditMode(false);
  };

  const handleExportCSV = () => {
    const csv = exportToCSV(guitars);
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `hasse-guitar-collection-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{ background: "#0a0a0a" }}>
      {/* Sub Header */}
      <div style={{ borderBottom: "1px solid #1a1a1a", padding: "0.75rem 1rem", display: "flex", justifyContent: "space-between", alignItems: "center", background: "#0d0d0d" }}>
        <span style={{ color: "#666", fontSize: "0.8rem" }}>
          {guitars.length} instruments • Est. ${collectionValue.low.toLocaleString()} - ${collectionValue.high.toLocaleString()}
        </span>
        <button onClick={handleExportCSV} style={{ background: "#222", border: "none", color: "#888", padding: "0.4rem 0.8rem", fontSize: "0.7rem", cursor: "pointer", textTransform: "uppercase", letterSpacing: "0.05em" }}>
          Export CSV for Insurance
        </button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "380px 1fr", minHeight: "calc(100vh - 52px)" }}>
        {/* Sidebar */}
        <aside style={{ borderRight: "1px solid #222", display: "flex", flexDirection: "column" }}>
          {/* Search & Filters */}
          <div style={{ padding: "1rem", borderBottom: "1px solid #1a1a1a", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <input
              type="text"
              placeholder="Search guitars, serial numbers, tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ width: "100%", padding: "0.6rem 0.8rem", background: "#111", border: "1px solid #222", color: "#fafafa", fontSize: "0.85rem" }}
            />
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <select value={filterType} onChange={(e) => setFilterType(e.target.value)} style={{ flex: 1, padding: "0.4rem", background: "#111", border: "1px solid #222", color: "#888", fontSize: "0.75rem" }}>
                <option value="all">All Types</option>
                {allTypes.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
              <select value={filterTag} onChange={(e) => setFilterTag(e.target.value)} style={{ flex: 1, padding: "0.4rem", background: "#111", border: "1px solid #222", color: "#888", fontSize: "0.75rem" }}>
                <option value="all">All Tags</option>
                {allTags.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
              <span style={{ fontSize: "0.7rem", color: "#555" }}>Sort:</span>
              <select value={sortField} onChange={(e) => setSortField(e.target.value as SortField)} style={{ padding: "0.3rem", background: "#111", border: "1px solid #222", color: "#888", fontSize: "0.7rem" }}>
                <option value="name">Name</option>
                <option value="manufacturer">Manufacturer</option>
                <option value="type">Type</option>
                <option value="value">Value</option>
              </select>
              <button onClick={() => setSortDir(d => d === "asc" ? "desc" : "asc")} style={{ background: "#111", border: "1px solid #222", color: "#888", padding: "0.3rem 0.5rem", fontSize: "0.7rem", cursor: "pointer" }}>
                {sortDir === "asc" ? "↑" : "↓"}
              </button>
            </div>
          </div>

          {/* Guitar List */}
          <div style={{ flex: 1, overflow: "auto" }}>
            {filteredGuitars.map((guitar) => (
              <button
                key={guitar.id}
                onClick={() => { setSelectedGuitar(guitar); setEditMode(false); }}
                style={{
                  width: "100%",
                  textAlign: "left",
                  padding: "0.875rem 1rem",
                  background: selectedGuitar?.id === guitar.id ? "#1a1a1a" : "transparent",
                  border: "none",
                  borderBottom: "1px solid #151515",
                  cursor: "pointer",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "0.25rem" }}>
                  <p style={{ color: "#fafafa", fontSize: "0.85rem", fontWeight: 400 }}>{guitar.name}</p>
                  {guitar.estimatedValue && (
                    <span style={{ color: "#555", fontSize: "0.65rem" }}>
                      ${(guitar.estimatedValue.low / 1000).toFixed(0)}k-{(guitar.estimatedValue.high / 1000).toFixed(0)}k
                    </span>
                  )}
                </div>
                <p style={{ color: "#666", fontSize: "0.7rem", marginBottom: "0.35rem" }}>
                  {guitar.manufacturer} • {guitar.type} • {guitar.imageCount} photos
                </p>
                {guitar.serialNumber && (
                  <p style={{ color: "#c41e3a", fontSize: "0.65rem" }}>S/N: {guitar.serialNumber}</p>
                )}
                <div style={{ display: "flex", gap: "0.25rem", marginTop: "0.35rem", flexWrap: "wrap" }}>
                  {guitar.tags.slice(0, 3).map(tag => (
                    <span key={tag} style={{ background: "#1a1a1a", padding: "0.15rem 0.4rem", fontSize: "0.6rem", color: "#666", borderRadius: "2px" }}>
                      {tag}
                    </span>
                  ))}
                  {guitar.tags.length > 3 && (
                    <span style={{ color: "#444", fontSize: "0.6rem" }}>+{guitar.tags.length - 3}</span>
                  )}
                </div>
              </button>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main style={{ padding: "1.5rem", overflow: "auto" }}>
          {selectedGuitar ? (
            <div>
              {/* Header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "1.5rem", paddingBottom: "1rem", borderBottom: "1px solid #222" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.5rem" }}>
                    <p style={{ fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#888" }}>
                      {selectedGuitar.manufacturer}
                    </p>
                    {selectedGuitar.estimatedValue && (
                      <span style={{ fontSize: "0.7rem", color: "#555" }}>
                        Est. ${selectedGuitar.estimatedValue.low.toLocaleString()} - ${selectedGuitar.estimatedValue.high.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <h1 className="font-display" style={{ fontSize: "1.75rem", fontWeight: 300 }}>{selectedGuitar.name}</h1>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <button
                    onClick={() => setShowPhotoViewer(true)}
                    style={{ padding: "0.5rem 1rem", background: "#222", border: "none", color: "#fafafa", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.05em", cursor: "pointer" }}
                  >
                    View Photos ({selectedGuitar.imageCount})
                  </button>
                  <button
                    onClick={() => setEditMode(!editMode)}
                    style={{ padding: "0.5rem 1rem", background: editMode ? "#c41e3a" : "#333", border: "none", color: "#fafafa", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.05em", cursor: "pointer" }}
                  >
                    {editMode ? "Cancel" : "Edit"}
                  </button>
                </div>
              </div>

              {editMode ? (
                <GuitarEditor guitar={selectedGuitar} onSave={handleUpdateGuitar} allTags={allTags} />
              ) : (
                <GuitarDetails guitar={selectedGuitar} />
              )}
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", color: "#444" }}>
              <p style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>Select a guitar to view details</p>
              <p style={{ fontSize: "0.75rem" }}>{filteredGuitars.length} of {guitars.length} guitars shown</p>
            </div>
          )}
        </main>
      </div>

      {/* Photo Viewer Modal */}
      {showPhotoViewer && selectedGuitar && (
        <PhotoViewer
          guitar={selectedGuitar}
          onClose={() => setShowPhotoViewer(false)}
        />
      )}
    </div>
  );
}

function GuitarDetails({ guitar }: { guitar: Guitar }) {
  const [images, setImages] = useState<string[]>([]);
  const [loadingImages, setLoadingImages] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Fetch images for this guitar
  useEffect(() => {
    async function fetchImages() {
      try {
        const res = await fetch(`/api/guitars/${guitar.folder}`);
        if (res.ok) {
          const data = await res.json();
          setImages(data.urls || []);
        }
      } catch (e) {
        console.error("Failed to load images", e);
      } finally {
        setLoadingImages(false);
      }
    }
    fetchImages();
  }, [guitar.folder]);

  const heroImage = images[0];

  return (
    <div>
      {/* Hero Section with Image */}
      <div
        style={{
          position: "relative",
          height: "300px",
          marginBottom: "1.5rem",
          background: "#111",
          overflow: "hidden",
        }}
      >
        {heroImage && (
          <img
            src={heroImage}
            alt={guitar.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.6,
            }}
          />
        )}
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.3) 100%)",
          }}
        />
        {/* Content overlay */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "1.5rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem", flexWrap: "wrap" }}>
            <span style={{ fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#888" }}>
              {guitar.manufacturer}
            </span>
            <span style={{ color: "#333" }}>•</span>
            <span style={{ fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#888" }}>
              {guitar.subType || guitar.type}
            </span>
            {guitar.estimatedValue && (
              <>
                <span style={{ color: "#333" }}>•</span>
                <span style={{ fontSize: "0.7rem", color: "#d4a373" }}>
                  ${guitar.estimatedValue.low.toLocaleString()} - ${guitar.estimatedValue.high.toLocaleString()}
                </span>
              </>
            )}
          </div>
          <h1 className="font-display" style={{ fontSize: "1.75rem", fontWeight: 300, marginBottom: "0.75rem" }}>
            {guitar.name}
          </h1>
          <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap" }}>
            {guitar.tags.map(tag => (
              <span key={tag} style={{ background: "rgba(255,255,255,0.1)", padding: "0.25rem 0.6rem", fontSize: "0.65rem", color: "#aaa" }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Info Grid */}
      <div style={{ display: "grid", gap: "1.25rem", marginBottom: "2rem" }}>
        {/* Quick Info */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "0.75rem" }}>
          {[
            { label: "Finish", value: guitar.finish },
            { label: "Year", value: guitar.year || "—" },
            { label: "Serial #", value: guitar.serialNumber || "—" },
            { label: "Condition", value: guitar.condition || "—" },
            { label: "Photos", value: `${guitar.imageCount}` },
          ].map((item) => (
            <div key={item.label} style={{ background: "#111", padding: "0.75rem", border: "1px solid #1a1a1a" }}>
              <p style={{ fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#666", marginBottom: "0.2rem" }}>{item.label}</p>
              <p style={{ color: "#ccc", fontSize: "0.85rem" }}>{item.value}</p>
            </div>
          ))}
        </div>

        {/* Specifications */}
        <div style={{ background: "#111", padding: "1rem", border: "1px solid #1a1a1a" }}>
          <h3 style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#666", marginBottom: "0.75rem" }}>Specifications</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.75rem" }}>
            {Object.entries(guitar.specifications).map(([key, value]) => (
              <div key={key}>
                <p style={{ color: "#555", fontSize: "0.7rem", marginBottom: "0.15rem" }}>{key}</p>
                <p style={{ color: "#ccc", fontSize: "0.85rem" }}>{value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Notable Features */}
        <div style={{ background: "#111", padding: "1rem", border: "1px solid #1a1a1a" }}>
          <h3 style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#666", marginBottom: "0.75rem" }}>Notable Features</h3>
          <ul style={{ listStyle: "none", display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
            {guitar.notableFeatures.map((feature, i) => (
              <li key={i} style={{ background: "#1a1a1a", padding: "0.4rem 0.8rem", fontSize: "0.75rem", color: "#aaa" }}>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* History */}
        <div style={{ background: "#111", padding: "1rem", border: "1px solid #1a1a1a" }}>
          <h3 style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#666", marginBottom: "0.75rem" }}>History</h3>
          <p style={{ color: "#aaa", lineHeight: 1.65, fontSize: "0.9rem" }}>{guitar.history}</p>
        </div>

        {/* Notes */}
        {guitar.notes && (
          <div style={{ background: "#151510", padding: "1rem", borderLeft: "3px solid #d4a373" }}>
            <h3 style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#d4a373", marginBottom: "0.5rem" }}>Personal Notes</h3>
            <p style={{ color: "#999", lineHeight: 1.6, fontSize: "0.85rem" }}>{guitar.notes}</p>
          </div>
        )}
      </div>

      {/* Photo Gallery - Masonry Grid */}
      <div>
        <h3 style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#666", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <span style={{ width: "30px", height: "1px", background: "#c41e3a" }} />
          Photo Gallery ({images.length})
        </h3>

        {loadingImages ? (
          <div style={{ color: "#555", padding: "2rem", textAlign: "center" }}>Loading photos...</div>
        ) : images.length === 0 ? (
          <div style={{ color: "#555", padding: "2rem", textAlign: "center", background: "#111", border: "1px solid #1a1a1a" }}>
            No photos found in folder: {guitar.folder}
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "0.75rem",
            }}
          >
            {images.map((url, i) => (
              <div
                key={i}
                onClick={() => setSelectedImage(url)}
                style={{
                  cursor: "pointer",
                  overflow: "hidden",
                  background: "#111",
                  border: "1px solid #1a1a1a",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#333")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#1a1a1a")}
              >
                <img
                  src={url}
                  alt={`${guitar.name} - Photo ${i + 1}`}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.95)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            cursor: "zoom-out",
          }}
        >
          <img
            src={selectedImage}
            alt={guitar.name}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
            }}
          />
          <button
            onClick={() => setSelectedImage(null)}
            style={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              background: "none",
              border: "1px solid #444",
              color: "#888",
              padding: "0.5rem 1rem",
              cursor: "pointer",
              fontSize: "0.75rem",
            }}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}

function GuitarEditor({ guitar, onSave, allTags }: { guitar: Guitar; onSave: (g: Guitar) => void; allTags: string[] }) {
  const [formData, setFormData] = useState({
    serialNumber: guitar.serialNumber || "",
    year: guitar.year || "",
    condition: guitar.condition || "",
    notes: guitar.notes || "",
    tags: guitar.tags.join(", "),
    valueLow: guitar.estimatedValue?.low?.toString() || "",
    valueHigh: guitar.estimatedValue?.high?.toString() || "",
    acquisitionDate: guitar.acquisitionDate || "",
    acquisitionPrice: guitar.acquisitionPrice?.toString() || "",
  });
  const [newSpec, setNewSpec] = useState({ key: "", value: "" });
  const [specs, setSpecs] = useState<Record<string, string>>(guitar.specifications);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...guitar,
      serialNumber: formData.serialNumber || undefined,
      year: formData.year || undefined,
      condition: formData.condition || undefined,
      notes: formData.notes || undefined,
      tags: formData.tags.split(",").map(t => t.trim().toLowerCase()).filter(Boolean),
      estimatedValue: formData.valueLow && formData.valueHigh ? {
        low: parseInt(formData.valueLow),
        high: parseInt(formData.valueHigh),
      } : guitar.estimatedValue,
      acquisitionDate: formData.acquisitionDate || undefined,
      acquisitionPrice: formData.acquisitionPrice ? parseInt(formData.acquisitionPrice) : undefined,
      specifications: specs,
      lastUpdated: new Date().toISOString().split("T")[0],
    });
  };

  const addSpec = () => {
    if (newSpec.key && newSpec.value) {
      setSpecs(prev => ({ ...prev, [newSpec.key]: newSpec.value }));
      setNewSpec({ key: "", value: "" });
    }
  };

  const inputStyle = { width: "100%", padding: "0.6rem 0.8rem", background: "#111", border: "1px solid #222", color: "#fafafa", fontSize: "0.85rem" };
  const labelStyle = { display: "block", fontSize: "0.7rem", textTransform: "uppercase" as const, letterSpacing: "0.1em", color: "#666", marginBottom: "0.35rem" };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", marginBottom: "1.5rem" }}>
        <div>
          <label style={labelStyle}>Serial Number</label>
          <input type="text" value={formData.serialNumber} onChange={(e) => setFormData({ ...formData, serialNumber: e.target.value })} placeholder="Enter serial number" style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Year</label>
          <input type="text" value={formData.year} onChange={(e) => setFormData({ ...formData, year: e.target.value })} placeholder="e.g., 1965" style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Condition</label>
          <select value={formData.condition} onChange={(e) => setFormData({ ...formData, condition: e.target.value })} style={inputStyle}>
            <option value="">Select...</option>
            <option value="Mint">Mint</option>
            <option value="Excellent">Excellent</option>
            <option value="Very Good">Very Good</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
            <option value="Poor">Poor</option>
          </select>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem", marginBottom: "1.5rem" }}>
        <div>
          <label style={labelStyle}>Estimated Value (Low)</label>
          <input type="number" value={formData.valueLow} onChange={(e) => setFormData({ ...formData, valueLow: e.target.value })} placeholder="e.g., 3000" style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Estimated Value (High)</label>
          <input type="number" value={formData.valueHigh} onChange={(e) => setFormData({ ...formData, valueHigh: e.target.value })} placeholder="e.g., 8000" style={inputStyle} />
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem", marginBottom: "1.5rem" }}>
        <div>
          <label style={labelStyle}>Acquisition Date</label>
          <input type="date" value={formData.acquisitionDate} onChange={(e) => setFormData({ ...formData, acquisitionDate: e.target.value })} style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Acquisition Price</label>
          <input type="number" value={formData.acquisitionPrice} onChange={(e) => setFormData({ ...formData, acquisitionPrice: e.target.value })} placeholder="Purchase price" style={inputStyle} />
        </div>
      </div>

      <div style={{ marginBottom: "1.5rem" }}>
        <label style={labelStyle}>Tags (comma-separated)</label>
        <input type="text" value={formData.tags} onChange={(e) => setFormData({ ...formData, tags: e.target.value })} placeholder="e.g., vintage, jazz, hollow-body" style={inputStyle} />
        <p style={{ fontSize: "0.65rem", color: "#444", marginTop: "0.35rem" }}>
          Existing tags: {allTags.slice(0, 10).join(", ")}...
        </p>
      </div>

      {/* Specifications Editor */}
      <div style={{ marginBottom: "1.5rem", background: "#111", padding: "1rem", border: "1px solid #1a1a1a" }}>
        <label style={labelStyle}>Specifications</label>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "0.5rem" }}>
          {Object.entries(specs).map(([key, value]) => (
            <div key={key} style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
              <span style={{ width: "120px", color: "#666", fontSize: "0.8rem" }}>{key}</span>
              <input type="text" value={value} onChange={(e) => setSpecs(prev => ({ ...prev, [key]: e.target.value }))} style={{ ...inputStyle, flex: 1 }} />
              <button type="button" onClick={() => setSpecs(prev => { const n = { ...prev }; delete n[key]; return n; })} style={{ background: "#c41e3a", border: "none", color: "#fff", padding: "0.4rem 0.6rem", cursor: "pointer", fontSize: "0.7rem" }}>×</button>
            </div>
          ))}
          <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}>
            <input type="text" placeholder="New field name" value={newSpec.key} onChange={(e) => setNewSpec(prev => ({ ...prev, key: e.target.value }))} style={{ ...inputStyle, width: "150px" }} />
            <input type="text" placeholder="Value" value={newSpec.value} onChange={(e) => setNewSpec(prev => ({ ...prev, value: e.target.value }))} style={{ ...inputStyle, flex: 1 }} />
            <button type="button" onClick={addSpec} style={{ background: "#333", border: "none", color: "#fafafa", padding: "0.4rem 0.8rem", cursor: "pointer", fontSize: "0.75rem" }}>Add</button>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: "1.5rem" }}>
        <label style={labelStyle}>Personal Notes</label>
        <textarea value={formData.notes} onChange={(e) => setFormData({ ...formData, notes: e.target.value })} placeholder="Add acquisition story, condition notes, provenance, etc." rows={4} style={{ ...inputStyle, resize: "vertical" }} />
      </div>

      <button type="submit" style={{ padding: "0.75rem 2rem", background: "#d4a373", border: "none", color: "#0a0a0a", fontSize: "0.75rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", cursor: "pointer" }}>
        Save Changes
      </button>
    </form>
  );
}

function PhotoViewer({ guitar, onClose }: { guitar: Guitar; onClose: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const basePath = `/Users/otis/Desktop/Guitars/${guitar.folder}`;

  // Generate image paths based on folder naming convention
  const images = Array.from({ length: guitar.imageCount }, (_, i) => {
    const num = String(i + 1).padStart(2, "0");
    return `${guitar.folder.replace(/^\d+-/, "").replace(/-/g, "-")}-${num}.jpg`;
  });

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.95)", zIndex: 1000, display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <div style={{ padding: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #222" }}>
        <div>
          <h2 style={{ fontSize: "1rem", color: "#fafafa" }}>{guitar.name}</h2>
          <p style={{ fontSize: "0.75rem", color: "#666" }}>{guitar.imageCount} photos • Folder: {guitar.folder}</p>
        </div>
        <button onClick={onClose} style={{ background: "none", border: "1px solid #333", color: "#888", padding: "0.5rem 1rem", cursor: "pointer", fontSize: "0.75rem" }}>
          Close
        </button>
      </div>

      {/* Main Viewer */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem", position: "relative" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ background: "#111", padding: "2rem", border: "1px solid #222", marginBottom: "1rem" }}>
            <p style={{ color: "#888", fontSize: "0.9rem", marginBottom: "1rem" }}>
              Photos located at:
            </p>
            <code style={{ color: "#d4a373", fontSize: "0.8rem", background: "#0a0a0a", padding: "0.5rem 1rem", display: "block" }}>
              /Users/otis/Desktop/Guitars/{guitar.folder}/
            </code>
          </div>
          <p style={{ color: "#666", fontSize: "0.8rem" }}>
            {guitar.imageCount} high-resolution images available
          </p>
          <p style={{ color: "#444", fontSize: "0.75rem", marginTop: "0.5rem" }}>
            To display photos in-app, copy images to public/guitars/ folder
          </p>
        </div>
      </div>

      {/* Thumbnail Strip */}
      <div style={{ padding: "1rem", borderTop: "1px solid #222", overflowX: "auto" }}>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          {Array.from({ length: guitar.imageCount }, (_, i) => (
            <div
              key={i}
              style={{
                width: "60px",
                height: "60px",
                background: "#1a1a1a",
                border: "1px solid #333",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#555",
                fontSize: "0.7rem",
                flexShrink: 0,
              }}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
