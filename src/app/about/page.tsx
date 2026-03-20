import { staff } from "@/data/staff";
import Link from "next/link";
import { School, Heart, Handshake, Sprout, Medal } from "lucide-react";

export const metadata = {
  title: "About | All Star Kids Academy",
  description: "Learn about All Star Kids Academy — our story, mission, and the dedicated team behind Decatur's premier early learning center.",
};

const values = [
  { Icon: Heart,      accentColor: "#f43f5e", title: "Child-Centered",   body: "Every decision we make puts the child's development, safety, and happiness first." },
  { Icon: Handshake,  accentColor: "#6366f1", title: "Family Partnership", body: "We see ourselves as an extension of your family, keeping communication open and honest." },
  { Icon: Sprout,     accentColor: "#22c55e", title: "Growth Mindset",    body: "We believe every child can grow and succeed with the right encouragement and environment." },
  { Icon: Medal,      accentColor: "#f97316", title: "Excellence",        body: "From our curriculum to our facilities, we hold ourselves to the highest standards." },
];

export default function AboutPage() {
  return (
    <main className="bg-[#fdfaf6] min-h-screen">
      {/* Page header */}
      <section className="bg-[#0a1628] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-blue-300 text-sm font-bold uppercase tracking-widest mb-2">Our Story</p>
          <h1 className="text-4xl md:text-5xl font-black text-white">About All Star Kids</h1>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl font-black text-[#0a1628] mb-4">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              All Star Kids Academy was founded with one simple belief: every child deserves a safe, nurturing space to explore, learn, and grow. Located in Decatur, GA, we've been serving families in the Atlanta metro area with comprehensive early childhood education and care.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Your success is our priority. We provide a personal approach, tailoring learning methods to each child's individual needs — because no two stars shine the same way.
            </p>
          </div>
          {/* Placeholder visual */}
          <div className="animate-fade-in-up delay-200 bg-[#e8f0fe] rounded-3xl aspect-video flex items-center justify-center">
            <School size={64} strokeWidth={1.5} className="text-[#0a1628]/60 animate-float-slow" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#f5f0e8] py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-[#0a1628] mb-10 text-center">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {values.map(({ Icon, accentColor, title, body }, i) => (
              <div key={title} className={`bg-white rounded-2xl p-6 shadow-sm animate-fade-in-up delay-${(i + 1) * 100}`}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: `${accentColor}18`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 12,
                  }}
                >
                  <Icon size={20} color={accentColor} strokeWidth={2} />
                </div>
                <h3 className="font-extrabold text-[#0a1628] mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-black text-[#0a1628] mb-10 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {staff.map((s, i) => (
            <div key={s.id} className={`text-center animate-fade-in-up delay-${(i + 1) * 100}`}>
              {/* Photo placeholder */}
              <div className="w-full aspect-[4/3] bg-[#e8f0fe] rounded-2xl flex items-center justify-center mb-4">
                <span className="text-4xl font-black text-[#0a1628]/30">{s.initials}</span>
              </div>
              <p className="font-extrabold text-[#0a1628]">{s.name}</p>
              <p className="text-xs text-[#fbbf24] font-bold uppercase tracking-wide mb-2">{s.title}</p>
              <p className="text-sm text-slate-500 leading-relaxed">{s.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a1628] py-12 px-6 text-center">
        <h2 className="text-2xl font-black text-white mb-2">Come see us in person</h2>
        <p className="text-blue-200 mb-6">We'd love to show you around and answer your questions.</p>
        <Link
          href="/contact"
          className="btn-shimmer inline-block text-blue-950 font-black text-base px-8 py-3.5 rounded-xl shadow-md shadow-yellow-200 hover:scale-105 transition-transform"
        >
          Get in Touch →
        </Link>
      </section>
    </main>
  );
}
