"use client";

import useEmblaCarousel from "embla-carousel-react";
import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <section className="bg-[#f5f0e8] py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-[#0a1628] mb-2">What Parents Say</h2>
          <p className="text-slate-500">Trusted by families across Decatur.</p>
        </div>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t) => (
              <div key={t.id} className="flex-[0_0_100%] min-w-0 px-4">
                <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
                  <div className="flex justify-center gap-1 mb-5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={20} fill="#fbbf24" color="#fbbf24" />
                    ))}
                  </div>
                  <blockquote className="text-lg text-slate-700 font-medium leading-relaxed mb-5 italic">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <p className="text-sm font-bold text-[#0a1628]">— {t.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
