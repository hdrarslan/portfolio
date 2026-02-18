/**
 * ── PROJECT DATA ──
 * Edit this file to add, remove, or reorder projects.
 * The layout reads from this array automatically.
 *
 * Categories: "Logo Design", "Product Design", "Social Media", "Animated Visuals"
 * Each project uses a `categories` array for multi-tag filtering.
 */

const EXCLUDED_FILES = ["cf616d33"];

export const isExcluded = (src) =>
  EXCLUDED_FILES.some((frag) => src.includes(frag));

export const projects = [
  {
    id: "soleda-product-design",
    title: "SOLEDA — Product Design",
    categories: ["Product Design"],
    thumb: "/assets/projects/product-design/thumb.jpeg",
    short: "22 Greek mythology–inspired soap label designs.",
    description:
      "22 Greek mythology–inspired soap label designs created for SOLEDA. Each label features a unique illustration and typographic treatment drawn from ancient myths.",
    year: "2025",
    tags: ["product", "packaging", "illustration"],
    media: [
      { type: "image", src: "/assets/projects/product-design/Apollo.jpeg" },
      { type: "image", src: "/assets/projects/product-design/Demeter.jpeg" },
      { type: "image", src: "/assets/projects/product-design/Eurydice.jpeg" },
      { type: "image", src: "/assets/projects/product-design/Fates 1.jpeg" },
      { type: "image", src: "/assets/projects/product-design/Fates 2.jpeg" },
      { type: "image", src: "/assets/projects/product-design/Icarus.jpeg" },
      { type: "image", src: "/assets/projects/product-design/Medya.jpeg" },
      { type: "image", src: "/assets/projects/product-design/Orpheus.jpeg" },
      { type: "image", src: "/assets/projects/product-design/Pan.jpeg" },
      { type: "image", src: "/assets/projects/product-design/Persephone.jpeg" },
      { type: "image", src: "/assets/projects/product-design/A&P.jpeg" },
      { type: "image", src: "/assets/projects/product-design/Untitled_Artwork.jpeg" },
      { type: "image", src: "/assets/projects/product-design/Untitled_Artwork 1.jpeg" },
      { type: "image", src: "/assets/projects/product-design/Untitled_Artwork 2.jpeg" },
      { type: "image", src: "/assets/projects/product-design/Untitled_Artwork 2 2.jpeg" },
      { type: "image", src: "/assets/projects/product-design/Untitled_Artwork 3.jpeg" },
      { type: "image", src: "/assets/projects/product-design/Untitled_Artwork 4.jpeg" },
      { type: "image", src: "/assets/projects/product-design/Untitled_Artwork 5.jpeg" },
      { type: "image", src: "/assets/projects/product-design/Untitled_Artwork 6.jpeg" },
      { type: "image", src: "/assets/projects/product-design/Untitled_Artwork 7.jpeg" },
      { type: "image", src: "/assets/projects/product-design/Untitled_Artwork 8.jpeg" },
      { type: "image", src: "/assets/projects/product-design/Untitled_Artwork 9.jpeg" },
    ],
  },
  {
    id: "soleda-campaign",
    title: "SOLEDA — Campaign Photography & Commercial Film",
    categories: ["Product Design"],
    thumb: "/assets/projects/product-photoshoot/PHOTO-2025-10-09-00-20-11.jpg",
    short: "Product photography and commercial film for SOLEDA soaps.",
    description:
      "10 product visuals and a commercial film documenting how we make the soaps. Photography, art direction, and video production for the SOLEDA brand.",
    year: "2025",
    tags: ["photography", "commercial", "film"],
    media: [
      { type: "video", src: "/assets/projects/product-photoshoot/Dr. Ancient Commercial Shoot.mp4" },
      { type: "image", src: "/assets/projects/product-photoshoot/PHOTO-2025-10-09-00-20-11.jpg" },
      { type: "image", src: "/assets/projects/product-photoshoot/PHOTO-2025-10-11-21-35-50.jpg" },
      { type: "image", src: "/assets/projects/product-photoshoot/PHOTO-2025-10-11-21-35-50 2.jpg" },
      { type: "image", src: "/assets/projects/product-photoshoot/PHOTO-2025-10-15-01-24-16.jpg" },
      { type: "image", src: "/assets/projects/product-photoshoot/PHOTO-2025-10-15-01-25-03.jpg" },
      { type: "image", src: "/assets/projects/product-photoshoot/PHOTO-2025-10-15-02-10-50.jpg" },
      { type: "image", src: "/assets/projects/product-photoshoot/PHOTO-2025-10-15-22-32-49.jpg" },
      { type: "image", src: "/assets/projects/product-photoshoot/PHOTO-2025-10-16-22-46-35.jpg" },
      { type: "image", src: "/assets/projects/product-photoshoot/dionysus_ön_alt.JPEG" },
      { type: "image", src: "/assets/projects/product-photoshoot/zeus_ön.JPEG" },
    ],
  },
  {
    id: "soleda-social-media",
    title: "SOLEDA — Social Media Visuals",
    categories: ["Social Media"],
    thumb: "/assets/projects/soleda-social-media/IMG_2830.jpg",
    short: "Instagram account visuals for SOLEDA.",
    description:
      "Social media visual design for the SOLEDA Instagram account. Includes feed screenshots showcasing the brand's visual identity across posts and stories.",
    year: "2025",
    tags: ["social media", "instagram"],
    media: [
      { type: "image", src: "/assets/projects/soleda-social-media/IMG_2830.jpg" },
      { type: "image", src: "/assets/projects/soleda-social-media/IMG_2831.jpg" },
      { type: "image", src: "/assets/projects/soleda-social-media/IMG_2832.jpg" },
    ],
  },
  {
    id: "queer-psy-force",
    title: "Queer Psy Force Lab — Identity & Website",
    categories: ["Logo Design", "Social Media"],
    thumb: "/assets/projects/queer-psy-force/thumb.png",
    short: "Brand identity and website design for Queer Psy Force Lab.",
    description:
      "Complete brand identity and website design for Queer Psy Force Lab. Includes logo design sheets, logo + website mockups, and the final live website.",
    year: "2024",
    tags: ["logo", "website", "branding"],
    media: [
      { type: "image", src: "/assets/projects/queer-psy-force/qyx logo.png" },
      { type: "image", src: "/assets/projects/queer-psy-force/IMG_2834.JPG" },
      { type: "image", src: "/assets/projects/queer-psy-force/website-logo-design.png" },
      { type: "image", src: "/assets/projects/queer-psy-force/website-screenshot.png" },
    ],
    externalLink: "https://www.queerpsy-forcelab.com/",
  },
  {
    id: "servas-logo",
    title: "Servas Peace School Uganda — Logo Design",
    categories: ["Logo Design"],
    thumb: "/assets/projects/servas-logo/thumb.png",
    short: "Logo design options for Servas Peace School Uganda.",
    description:
      "Three logo design options created for Servas Peace School Uganda, presented as stacked vertical concepts.",
    year: "2025",
    tags: ["logo", "branding"],
    media: [
      { type: "image", src: "/assets/projects/servas-logo/servas-logo.png" },
    ],
  },
  {
    id: "weeping-demon",
    title: "The Weeping Demon — Stop Motion Short Film Project",
    categories: ["Animated Visuals"],
    thumb: "/assets/projects/stop-motion/thumb.png",
    short: "Stop motion short film with character design and animation.",
    description:
      "A stop motion animation project featuring character concept sheets, editing process documentation, a phonetic lip sync puppet test, and the final short film.",
    year: "2022",
    tags: ["stop motion", "animation", "short film"],
    media: [
      { type: "image", src: "/assets/projects/stop-motion/concept_sheet.png" },
      { type: "image", src: "/assets/projects/stop-motion/edit.JPG" },
      { type: "video", src: "/assets/projects/stop-motion/mouth.mov" },
      { type: "video", src: "/assets/projects/stop-motion/final_animation.mov" },
    ],
  },
  {
    id: "sticker-series",
    title: "Sticker Series — Graphic Objects",
    categories: ["Logo Design", "Product Design"],
    thumb: "/assets/projects/sticker-designs/thumb.png",
    short: "Graphic sticker designs with custom illustrations.",
    description:
      "A series of graphic sticker designs featuring custom illustrations and bold typography.",
    year: "2022",
    tags: ["graphic design", "stickers", "illustration"],
    media: [
      { type: "image", src: "/assets/projects/sticker-designs/Konu.png" },
      { type: "image", src: "/assets/projects/sticker-designs/sticker-hades.jpg" },
      { type: "image", src: "/assets/projects/sticker-designs/sticker-1.png" },
      { type: "image", src: "/assets/projects/sticker-designs/sticker-2.png" },
      { type: "image", src: "/assets/projects/sticker-designs/sticker-3.jpg" },
    ],
  },
];

export const CATEGORIES = [
  "All",
  "Logo Design",
  "Product Design",
  "Social Media",
  "Animated Visuals",
];
