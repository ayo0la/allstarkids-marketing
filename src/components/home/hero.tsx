import Link from "next/link";
import { BadgeCheck, Star, Lock } from "lucide-react";
import { Button } from "@heroui/react";

const badges = [
  { icon: BadgeCheck, label: "Licensed & Accredited" },
  { icon: Star,       label: "Georgia Pre-K Provider", gold: true },
  { icon: Lock,       label: "Secure Enrollment" },
];

export default function Hero() {
  return (
    <section className="bg-[#fdfaf6] relative overflow-hidden py-20 px-6">
      {/* Decorative orbs */}
      <div className="absolute top-[-80px] right-[-80px] w-[380px] h-[380px] rounded-full bg-yellow-100/60 blur-[80px] animate-float-slow pointer-events-none" />
      <div className="absolute bottom-[-60px] left-[-60px] w-[300px] h-[300px] rounded-full bg-blue-100/50 blur-[80px] animate-float-slow pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <div className="max-w-2xl animate-fade-in-up">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-blue-600 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-6">
            Premier Early Learning — Decatur, GA
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#0a1628] leading-[1.05] tracking-tight mb-6">
            Where Every Child
            <span className="block text-[#fbbf24]">Becomes a Star</span>
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed max-w-lg mb-8">
            Decatur's premier early learning academy — providing loving, structured care and education from infancy through age 12.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              as={Link}
              href="/enroll"
              className="btn-shimmer text-blue-950 font-black text-base px-8 py-4 rounded-2xl shadow-lg shadow-yellow-300/40 hover:scale-105 transition-transform text-center h-auto"
            >
              Start Enrollment →
            </Button>
            <Button
              as={Link}
              href="/programs"
              className="border-2 border-[#0a1628] text-[#0a1628] font-bold text-base px-8 py-4 rounded-2xl hover:bg-[#0a1628] hover:text-white transition-colors text-center h-auto bg-transparent"
            >
              Explore Programs
            </Button>
          </div>
          {/* Trust badges */}
          <div className="flex flex-wrap gap-2 mt-8">
            {badges.map(({ icon: Icon, label, gold }) => (
              <span
                key={label}
                className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border shadow-sm ${
                  gold
                    ? "bg-yellow-50 border-yellow-200 text-yellow-800"
                    : "bg-white border-slate-200 text-slate-500"
                }`}
              >
                <Icon size={13} strokeWidth={2.5} />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
