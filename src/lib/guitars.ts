export interface Guitar {
  id: string;
  name: string;
  manufacturer: string;
  type: "electric" | "acoustic" | "bass" | "mandolin" | "violin" | "resonator" | "classical" | "archtop";
  subType?: string;
  finish: string;
  year?: string;
  serialNumber?: string;
  specifications: Record<string, string>;
  notableFeatures: string[];
  history: string;
  folder: string;
  imageCount: number;
  images: string[];
  estimatedValue?: {
    low: number;
    high: number;
  };
  tags: string[];
  notes?: string;
  acquisitionDate?: string;
  acquisitionPrice?: number;
  condition?: string;
  dateAdded: string;
  lastUpdated: string;
}

// All 19 guitars from the PRD - NO GUESSING, only documented info
export const initialGuitars: Guitar[] = [
  {
    id: "01-gretsch-g6120",
    name: "Gretsch G6120 Chet Atkins Hollow Body",
    manufacturer: "Gretsch",
    type: "electric",
    subType: "Semi-hollow body",
    finish: "Western Orange Stain",
    specifications: {
      "Body": "Laminated maple, single cutaway",
      "Neck": "Maple, 22 frets",
      "Pickups": "Filter'Tron humbuckers",
      "Hardware": "Bigsby B6 vibrato tailpiece, gold hardware",
    },
    notableFeatures: [
      "Chet Atkins signature on pickguard",
      "F-holes",
      "Bound body and neck"
    ],
    history: "The G6120 was introduced in 1954 as Chet Atkins' signature model. It became iconic in rockabilly, country, and rock music. Artists like Eddie Cochran, Duane Eddy, and Brian Setzer have made this guitar legendary.",
    folder: "01-Gretsch-G6120-Chet-Atkins",
    imageCount: 7,
    images: [],
    estimatedValue: { low: 2500, high: 5000 },
    tags: ["hollow-body", "signature", "vintage-style", "rockabilly"],
    dateAdded: "2026-01-31",
    lastUpdated: "2026-01-31",
  },
  {
    id: "02-gibson-es-295",
    name: "Gibson ES-295",
    manufacturer: "Gibson",
    type: "electric",
    subType: "Hollow body",
    finish: "Bullion Gold",
    specifications: {
      "Body": "Laminated maple, full depth",
      "Neck": "Mahogany, 22 frets, rosewood fingerboard",
      "Pickups": "P-90 single-coil pickups",
      "Hardware": "Trapeze tailpiece, gold hardware",
    },
    notableFeatures: [
      "Ornate floral pickguard",
      "Parallelogram inlays",
      "All-gold finish"
    ],
    history: "Produced from 1952-1958, the ES-295 was Gibson's flashiest guitar of the era. Scotty Moore famously used one with Elvis Presley in the early Sun Records days. The distinctive gold finish and floral pickguard make it one of Gibson's most visually striking instruments.",
    folder: "02-Gibson-ES-295-Gold",
    imageCount: 4,
    images: [],
    estimatedValue: { low: 4000, high: 12000 },
    tags: ["hollow-body", "gold", "vintage-style", "elvis"],
    dateAdded: "2026-01-31",
    lastUpdated: "2026-01-31",
  },
  {
    id: "03-gibson-les-paul-custom",
    name: "Gibson Les Paul Custom",
    manufacturer: "Gibson",
    type: "electric",
    subType: "Solid body",
    finish: "Ebony (Black Beauty)",
    specifications: {
      "Body": "Mahogany with maple cap",
      "Neck": "Mahogany, ebony fingerboard, 22 frets",
      "Pickups": "Humbucker pickups",
      "Hardware": "Tune-o-matic bridge, stop bar tailpiece, gold hardware",
    },
    notableFeatures: [
      "Multi-ply binding",
      "Split diamond headstock inlay",
      "Block inlays"
    ],
    history: "Introduced in 1954 as the 'Black Beauty,' the Les Paul Custom was designed as an upscale version of the Standard. Its elegant appointments and powerful tone made it a favorite of players from Frampton to Zakk Wylde.",
    folder: "03-Gibson-Les-Paul-Custom-Black",
    imageCount: 3,
    images: [],
    estimatedValue: { low: 3000, high: 8000 },
    tags: ["solid-body", "les-paul", "black-beauty"],
    dateAdded: "2026-01-31",
    lastUpdated: "2026-01-31",
  },
  {
    id: "04-fender-telecaster",
    name: "Fender Telecaster",
    manufacturer: "Fender",
    type: "electric",
    subType: "Solid body",
    finish: "Blonde (Butterscotch)",
    specifications: {
      "Body": "Ash",
      "Neck": "Maple, 21 frets",
      "Pickups": "Single-coil Telecaster pickups",
      "Hardware": "3-saddle bridge, chrome hardware",
    },
    notableFeatures: [
      "White pickguard",
      "Ashtray bridge cover"
    ],
    history: "The Telecaster (originally Broadcaster, 1950) was the world's first commercially successful solid-body electric guitar. Its simple design and versatile tone have made it essential in country, rock, and blues.",
    folder: "04-Fender-Telecaster-Blonde",
    imageCount: 5,
    images: [],
    estimatedValue: { low: 1500, high: 5000 },
    tags: ["solid-body", "telecaster", "country", "classic"],
    dateAdded: "2026-01-31",
    lastUpdated: "2026-01-31",
  },
  {
    id: "05-fender-esquire",
    name: "Fender Esquire",
    manufacturer: "Fender",
    type: "electric",
    subType: "Solid body",
    finish: "Blonde",
    specifications: {
      "Body": "Ash",
      "Neck": "Maple, rosewood fingerboard, 21 frets",
      "Pickups": "Single bridge pickup",
      "Hardware": "3-saddle bridge, chrome hardware",
    },
    notableFeatures: [
      "Single pickup configuration",
      "No truss rod on earliest models"
    ],
    history: "The Esquire (1950) was the single-pickup predecessor to the Telecaster. It represents the birth of the solid-body electric guitar revolution. Collectors prize early Esquires for their historical importance and distinctive tone.",
    folder: "05-Fender-Esquire",
    imageCount: 14,
    images: [],
    estimatedValue: { low: 3000, high: 15000 },
    tags: ["solid-body", "historic", "single-pickup", "collector"],
    dateAdded: "2026-01-31",
    lastUpdated: "2026-01-31",
  },
  {
    id: "06-epiphone-casino",
    name: "Epiphone Casino",
    manufacturer: "Epiphone",
    type: "electric",
    subType: "Thin-line hollow body",
    finish: "Vintage Sunburst",
    specifications: {
      "Body": "Laminated maple, fully hollow",
      "Neck": "Mahogany, rosewood fingerboard, 22 frets",
      "Pickups": "P-90 single-coil pickups",
      "Hardware": "Trapeze tailpiece, nickel hardware",
    },
    notableFeatures: [
      "Parallelogram inlays",
      "F-holes",
      "Epiphone logo on pickguard"
    ],
    history: "The Casino became legendary as the guitar of choice for all three guitar-playing Beatles. John Lennon's stripped natural Casino became one of the most iconic guitars in rock history.",
    folder: "06-Epiphone-Casino-Sunburst",
    imageCount: 6,
    images: [],
    estimatedValue: { low: 800, high: 3000 },
    tags: ["hollow-body", "beatles", "p90", "sunburst"],
    dateAdded: "2026-01-31",
    lastUpdated: "2026-01-31",
  },
  {
    id: "07-epiphone-les-paul-custom",
    name: "Epiphone Les Paul Custom",
    manufacturer: "Epiphone",
    type: "electric",
    subType: "Solid body",
    finish: "Ebony",
    specifications: {
      "Body": "Mahogany with maple veneer top",
      "Neck": "Mahogany, rosewood fingerboard",
      "Pickups": "ProBucker humbuckers",
      "Hardware": "LockTone Tune-o-matic bridge, gold hardware",
    },
    notableFeatures: [
      "Multi-ply binding",
      "Split diamond inlay"
    ],
    history: "Epiphone's interpretation of the classic Les Paul Custom offers the iconic 'Black Beauty' aesthetic at an accessible price point, continuing the legacy of the Gibson original.",
    folder: "07-Epiphone-Les-Paul-Custom",
    imageCount: 5,
    images: [],
    estimatedValue: { low: 400, high: 800 },
    tags: ["solid-body", "les-paul", "epiphone"],
    dateAdded: "2026-01-31",
    lastUpdated: "2026-01-31",
  },
  {
    id: "08-danelectro-longhorn",
    name: "Danelectro Longhorn Bass",
    manufacturer: "Danelectro",
    type: "bass",
    subType: "Electric bass",
    finish: "Black (Copper Burst visible in some images)",
    specifications: {
      "Body": "Masonite top and back, poplar frame",
      "Neck": "Poplar, rosewood fingerboard",
      "Pickups": "Lipstick tube pickups",
      "Scale Length": "29.75\" (Baritone)",
    },
    notableFeatures: [
      "Distinctive 'longhorn' body shape",
      "Concentric stacked knobs"
    ],
    history: "Designed by Nathan Daniel in 1958, the Longhorn's unconventional shape and tone have made it a cult favorite. The lipstick tube pickups produce a distinctive hollow tone used by players from Duane Eddy to Mark Sandman (Morphine).",
    folder: "08-Danelectro-Longhorn-Bass",
    imageCount: 18,
    images: [],
    estimatedValue: { low: 800, high: 2000 },
    tags: ["bass", "longhorn", "lipstick-pickups", "unique"],
    dateAdded: "2026-01-31",
    lastUpdated: "2026-01-31",
  },
  {
    id: "09-gibson-j200",
    name: "Gibson J-200 Super Jumbo",
    manufacturer: "Gibson",
    type: "acoustic",
    subType: "Jumbo",
    finish: "Antique Natural",
    specifications: {
      "Body": "Maple back and sides, spruce top",
      "Neck": "Maple, rosewood fingerboard",
      "Scale Length": "25.5\"",
    },
    notableFeatures: [
      "Ornate 'moustache' bridge",
      "Crown headstock inlay",
      "Elaborate pickguard with floral/vine pattern"
    ],
    history: "Introduced in 1937 as the 'King of the Flat-Tops,' the J-200 has been played by Elvis Presley, Bob Dylan, Emmylou Harris, and countless others. Its bold projection and visual elegance make it Gibson's flagship acoustic.",
    folder: "09-Gibson-J200-Super-Jumbo",
    imageCount: 8,
    images: [],
    estimatedValue: { low: 2500, high: 6000 },
    tags: ["acoustic", "jumbo", "king-of-flat-tops", "iconic"],
    dateAdded: "2026-01-31",
    lastUpdated: "2026-01-31",
  },
  {
    id: "10-martin-dreadnought",
    name: "Martin Dreadnought Acoustic",
    manufacturer: "Martin",
    type: "acoustic",
    subType: "Dreadnought",
    finish: "Natural",
    specifications: {
      "Body": "Rosewood back and sides, spruce top",
      "Neck": "Mahogany",
    },
    notableFeatures: [
      "Soundhole pickup installed",
      "Martin headstock logo"
    ],
    history: "Martin's dreadnought design (introduced 1916) became the standard acoustic guitar shape. The powerful bass response and balanced tone define the sound of American folk, country, and bluegrass music.",
    folder: "10-Martin-Dreadnought-Acoustic",
    imageCount: 5,
    images: [],
    estimatedValue: { low: 1500, high: 4000 },
    tags: ["acoustic", "dreadnought", "folk", "bluegrass"],
    dateAdded: "2026-01-31",
    lastUpdated: "2026-01-31",
  },
  {
    id: "11-fontaine-gypsy-jazz",
    name: "Fontaine Gypsy Jazz Guitar",
    manufacturer: "Fontaine",
    type: "acoustic",
    subType: "Gypsy jazz (Selmer-style)",
    finish: "Natural",
    specifications: {
      "Body": "Laminated maple, oval soundhole",
      "Neck": "Walnut, ebony fingerboard",
    },
    notableFeatures: [
      "Venetian cutaway",
      "Steel strings",
      "Floating bridge",
      "Distinctive tailpiece"
    ],
    history: "Modeled after the Selmer-Maccaferri guitars made famous by Django Reinhardt, these instruments are essential for playing gypsy jazz (jazz manouche). The loud, cutting tone projects over rhythm guitars without amplification.",
    folder: "11-Fontaine-Gypsy-Jazz-Guitar",
    imageCount: 8,
    images: [],
    estimatedValue: { low: 1000, high: 3000 },
    tags: ["gypsy-jazz", "django", "selmer-style", "swing-deville"],
    dateAdded: "2026-01-31",
    lastUpdated: "2026-01-31",
  },
  {
    id: "12-della-segale-gypsy-jazz",
    name: "Della Segale Gypsy Jazz Guitar",
    manufacturer: "Della Segale",
    type: "acoustic",
    subType: "Gypsy jazz (Selmer-style)",
    finish: "Natural",
    specifications: {
      "Body": "Spruce top, maple back and sides",
      "Neck": "Maple, ebony fingerboard with mother-of-pearl block inlays",
    },
    notableFeatures: [
      "D-hole or oval soundhole",
      "Bent laminate top construction"
    ],
    history: "Della Segale instruments represent the modern continuation of the Selmer tradition, handcrafted by skilled luthiers who specialize in the unique construction techniques required for gypsy jazz guitars.",
    folder: "12-Della-Segale-Gypsy-Jazz-Guitar",
    imageCount: 11,
    images: [],
    estimatedValue: { low: 1500, high: 4000 },
    tags: ["gypsy-jazz", "handcrafted", "selmer-style", "swing-deville"],
    dateAdded: "2026-01-31",
    lastUpdated: "2026-01-31",
  },
  {
    id: "13-spanish-flamenco",
    name: "Spanish Flamenco/Classical Guitar",
    manufacturer: "Unknown",
    type: "classical",
    subType: "Classical/Flamenco",
    finish: "Natural (French polish)",
    specifications: {
      "Body": "Cypress back and sides, spruce top",
      "Neck": "Cedar, ebony fingerboard",
    },
    notableFeatures: [
      "Decorative rosette",
      "Slotted headstock",
      "Traditional fan bracing"
    ],
    history: "Spanish classical and flamenco guitars represent centuries of lutherie tradition. The lighter cypress construction of flamenco guitars produces the bright, percussive tone essential for flamenco music.",
    folder: "13-Spanish-Flamenco-Classical",
    imageCount: 3,
    images: [],
    estimatedValue: { low: 500, high: 2000 },
    tags: ["classical", "flamenco", "nylon-string", "spanish"],
    dateAdded: "2026-01-31",
    lastUpdated: "2026-01-31",
  },
  {
    id: "14-heritage-archtop",
    name: "Heritage Archtop",
    manufacturer: "Heritage",
    type: "archtop",
    subType: "Hollow body archtop jazz guitar",
    finish: "Natural",
    specifications: {
      "Body": "Carved spruce top, carved maple back",
      "Neck": "Maple, ebony fingerboard",
    },
    notableFeatures: [
      "F-holes",
      "Floating pickup",
      "Trapeze tailpiece"
    ],
    history: "Heritage Guitar Inc. was founded in 1985 by former Gibson employees in the original Kalamazoo factory. Their archtops continue the golden era Gibson tradition with meticulous craftsmanship.",
    folder: "14-Heritage-Archtop",
    imageCount: 4,
    images: [],
    estimatedValue: { low: 2000, high: 5000 },
    tags: ["archtop", "jazz", "kalamazoo", "heritage"],
    dateAdded: "2026-01-31",
    lastUpdated: "2026-01-31",
  },
  {
    id: "15-benedetto-custom-1989",
    name: "Benedetto Custom Archtop (1989)",
    manufacturer: "Benedetto",
    type: "archtop",
    subType: "Hollow body archtop jazz guitar",
    finish: "Honey Blonde / Sunburst variants",
    year: "1989",
    specifications: {
      "Body": "Hand-carved spruce top, carved maple back and sides",
      "Neck": "Maple, ebony fingerboard",
      "Inscription": "Custom made for my patient friend Clint Hasse - S-1989 - Bob Benedetto",
    },
    notableFeatures: [
      "Signature Benedetto tailpiece",
      "Suspended pickup",
      "Clint Hasse pickguard",
      "Personally inscribed by Bob Benedetto"
    ],
    history: "THE CROWN JEWEL OF THE COLLECTION. Bob Benedetto is widely regarded as the world's greatest living archtop guitar builder. A personally inscribed, hand-built Benedetto from 1989 represents the pinnacle of American lutherie. These instruments command prices of $20,000-$50,000+ and are played by the world's finest jazz guitarists.",
    folder: "15-Benedetto-Archtop-Custom-1989",
    imageCount: 36,
    images: [],
    estimatedValue: { low: 25000, high: 50000 },
    tags: ["archtop", "custom", "crown-jewel", "benedetto", "jazz", "masterpiece"],
    dateAdded: "2026-01-31",
    lastUpdated: "2026-01-31",
  },
  {
    id: "16-national-resonator",
    name: "National Resonator Guitar",
    manufacturer: "National",
    type: "resonator",
    subType: "Resonator guitar",
    finish: "Nickel-plated brass body",
    specifications: {
      "Body": "Metal (brass or German silver)",
      "Neck": "Mahogany",
    },
    notableFeatures: [
      "Metal resonator cone",
      "Decorative coverplate with geometric pattern"
    ],
    history: "National resonator guitars (first produced 1927) were designed for volume before electric amplification. The metallic tone became essential in blues and Hawaiian music. Played by legends from Son House to Mark Knopfler.",
    folder: "16-National-Resonator",
    imageCount: 3,
    images: [],
    estimatedValue: { low: 1500, high: 4000 },
    tags: ["resonator", "blues", "metal-body", "pre-electric"],
    dateAdded: "2026-01-31",
    lastUpdated: "2026-01-31",
  },
  {
    id: "17-gibson-f5-mandolin",
    name: "Gibson F-5 Mandolin",
    manufacturer: "Gibson",
    type: "mandolin",
    subType: "F-style mandolin",
    finish: "Sunburst",
    specifications: {
      "Body": "Carved spruce top, carved maple back and sides",
      "Neck": "Maple, ebony fingerboard",
    },
    notableFeatures: [
      "Scroll and points",
      "Flowerpot headstock inlay",
      "The Gibson logo"
    ],
    history: "The Gibson F-5, designed by Lloyd Loar in 1922, is the most sought-after mandolin ever made. Original Loar-signed F-5s sell for $200,000+. The design set the standard for all professional mandolins that followed.",
    folder: "17-Gibson-F5-Mandolin",
    imageCount: 4,
    images: [],
    estimatedValue: { low: 5000, high: 15000 },
    tags: ["mandolin", "f-style", "lloyd-loar", "bluegrass"],
    dateAdded: "2026-01-31",
    lastUpdated: "2026-01-31",
  },
  {
    id: "18-violin",
    name: "Violin",
    manufacturer: "Unknown",
    type: "violin",
    subType: "Violin (possibly viola based on size)",
    finish: "Traditional varnish",
    specifications: {
      "Body": "Spruce top, maple back and sides",
    },
    notableFeatures: [
      "Traditional scroll",
      "Friction tuning pegs",
      "F-holes"
    ],
    history: "The violin represents centuries of stringed instrument evolution. While specific maker details require closer examination, its presence in this collection suggests a quality instrument worthy of the accompanying guitars.",
    folder: "18-Violin",
    imageCount: 4,
    images: [],
    estimatedValue: { low: 500, high: 5000 },
    tags: ["violin", "bowed", "classical", "strings"],
    dateAdded: "2026-01-31",
    lastUpdated: "2026-01-31",
  },
  {
    id: "19-acoustic-flame-maple",
    name: "Acoustic Guitar (Flame Maple)",
    manufacturer: "Unknown",
    type: "acoustic",
    subType: "Grand Auditorium or similar",
    finish: "Natural",
    specifications: {
      "Body": "Highly figured flame maple back and sides, spruce top",
    },
    notableFeatures: [
      "Exceptional wood figuring",
      "Professional build quality"
    ],
    history: "The exceptional flame maple figuring on this instrument suggests a high-end custom or limited edition guitar. Further examination of labels or serial numbers would help identify the specific maker.",
    folder: "19-Acoustic-Guitar-Flame-Maple",
    imageCount: 12,
    images: [],
    estimatedValue: { low: 1000, high: 4000 },
    tags: ["acoustic", "flame-maple", "custom", "figured-wood"],
    dateAdded: "2026-01-31",
    lastUpdated: "2026-01-31",
  },
];

// Helper to calculate total collection value
export function getCollectionValueRange(guitars: Guitar[]): { low: number; high: number } {
  return guitars.reduce(
    (acc, guitar) => ({
      low: acc.low + (guitar.estimatedValue?.low || 0),
      high: acc.high + (guitar.estimatedValue?.high || 0),
    }),
    { low: 0, high: 0 }
  );
}

// Export to CSV for insurance
export function exportToCSV(guitars: Guitar[]): string {
  const headers = [
    "Name",
    "Manufacturer",
    "Type",
    "Year",
    "Serial Number",
    "Finish",
    "Est. Value (Low)",
    "Est. Value (High)",
    "Condition",
    "Tags",
    "Notes"
  ];

  const rows = guitars.map(g => [
    g.name,
    g.manufacturer,
    g.type,
    g.year || "",
    g.serialNumber || "",
    g.finish,
    g.estimatedValue?.low?.toString() || "",
    g.estimatedValue?.high?.toString() || "",
    g.condition || "",
    g.tags.join("; "),
    g.notes || ""
  ]);

  const csvContent = [
    headers.join(","),
    ...rows.map(row => row.map(cell => `"${cell.replace(/"/g, '""')}"`).join(","))
  ].join("\n");

  return csvContent;
}
