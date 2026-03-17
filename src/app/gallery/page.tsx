"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const categories = ["All", "Classrooms", "Outdoor", "Activities"] as const;
type Category = typeof categories[number];

type GalleryItem = {
  id: number;
  category: Exclude<Category, "All">;
  alt: string;
};

// 12 placeholder slots — replace src with real image paths
const items: GalleryItem[] = [
  { id: 1,  category: "Classrooms",  alt: "Bright, welcoming classroom" },
  { id: 2,  category: "Outdoor",     alt: "Children playing outside" },
  { id: 3,  category: "Activities",  alt: "Art and crafts activity" },
  { id: 4,  category: "Classrooms",  alt: "Reading corner" },
  { id: 5,  category: "Outdoor",     alt: "Playground fun" },
  { id: 6,  category: "Activities",  alt: "Science exploration" },
  { id: 7,  category: "Classrooms",  alt: "Pre-K classroom" },
  { id: 8,  category: "Outdoor",     alt: "Nature walk" },
  { id: 9,  category: "Activities",  alt: "Music time" },
  { id: 10, category: "Classrooms",  alt: "Infant room" },
  { id: 11, category: "Activities",  alt: "STEM activity" },
  { id: 12, category: "Outdoor",     alt: "Summer camp outdoors" },
];

// When real photos are available, add a `src` field to each item and pass to Lightbox slides
const slides = items.map((item) => ({ src: `/gallery/placeholder-${item.id}.jpg`, alt: item.alt }));

export default function GalleryPage() {
  const [active, setActive] = useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const filtered = active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <main className="bg-[#fdfaf6] min-h-screen">
      {/* Header */}
      <section className="bg-[#0a1628] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-blue-300 text-sm font-bold uppercase tracking-widest mb-2">A Glimpse Inside</p>
          <h1 className="text-4xl md:text-5xl font-black text-white">Gallery</h1>
          <p className="text-blue-200 mt-3">See our spaces, our programs, and our community in action.</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        {/* Category tabs */}
        <div className="flex gap-2 flex-wrap mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                active === cat
                  ? "bg-[#0a1628] text-white"
                  : "bg-white border border-slate-200 text-slate-600 hover:border-[#0a1628]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-style grid */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {filtered.map((item) => (
            <button
              key={item.id}
              onClick={() => setLightboxIndex(items.indexOf(item))}
              className="w-full block overflow-hidden rounded-xl group"
            >
              {/* Placeholder: gray aspect-ratio box. Replace with <Image> when real photos arrive. */}
              <div className="aspect-[4/3] bg-[#e8f0fe] flex items-center justify-center rounded-xl group-hover:brightness-90 transition">
                <span className="text-slate-400 text-xs font-semibold">{item.alt}</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={slides}
      />
    </main>
  );
}
