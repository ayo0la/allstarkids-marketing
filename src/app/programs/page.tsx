import { programs } from "@/data/programs";
import ProgramCard from "@/components/program-card";

export const metadata = {
  title: "Programs | All Star Kids Academy",
  description: "Explore our programs for ages 1–12: Infant & Toddler, Preschool, Georgia Pre-K, After School, and Summer Camp.",
};

export default function ProgramsPage() {
  return (
    <main className="bg-[#fdfaf6] min-h-screen">
      {/* Page header */}
      <section className="bg-[#0a1628] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-blue-300 text-sm font-bold uppercase tracking-widest mb-2">What We Offer</p>
          <h1 className="text-4xl md:text-5xl font-black text-white">Our Programs</h1>
          <p className="text-blue-200 mt-3 max-w-xl">
            From infants to preteens — structured, loving programs designed for every stage of childhood.
          </p>
        </div>
      </section>

      {/* Program cards */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((p, i) => (
            <div key={p.id} className={`animate-fade-in-up delay-${(i + 1) * 100}`}>
              <ProgramCard program={p} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white border-t border-slate-100 py-12 px-6 text-center">
        <h2 className="text-2xl font-black text-[#0a1628] mb-2">Ready to get started?</h2>
        <p className="text-slate-500 mb-6">Enrollment takes about 10 minutes — start today.</p>
        <a
          href="/enroll"
          className="btn-shimmer inline-block text-blue-950 font-black text-base px-8 py-3.5 rounded-xl shadow-md shadow-yellow-200 hover:scale-105 transition-transform"
        >
          Enroll Now →
        </a>
      </section>
    </main>
  );
}
