import Link from "next/link";
import { Users, Heart, Bus, Star, BookOpen, Clock, type LucideIcon } from "lucide-react";

export const metadata = {
  title: "Careers | All Star Kids Academy",
  description: "Join the All Star Kids Academy team. We're hiring teachers and staff in Decatur, GA.",
};

const PLATFORM_URL = process.env.NEXT_PUBLIC_PLATFORM_URL ?? "https://allstarkids-platform.vercel.app";

const ICON_MAP: Record<string, LucideIcon> = {
  Users, Heart, Bus, Star, BookOpen, Clock,
};

type JobOpening = {
  id: string;
  title: string;
  description: string;
  icon: string;
  accentColor: string;
};

async function getOpenings(): Promise<JobOpening[]> {
  try {
    const res = await fetch(`${PLATFORM_URL}/api/careers/openings`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export default async function CareersPage() {
  const openings = await getOpenings();

  return (
    <main className="bg-[#fdfaf6] min-h-screen">
      <section className="bg-[#0a1628] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-blue-300 text-sm font-bold uppercase tracking-widest mb-2">Join Our Team</p>
          <h1 className="text-4xl md:text-5xl font-black text-white">Careers</h1>
          <p className="text-blue-200 mt-3 max-w-xl">
            Help us give every child the start they deserve. We&apos;re hiring passionate, dedicated people in Decatur, GA.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-14">
        {openings.length === 0 ? (
          <div className="text-center py-16 text-slate-400">
            <p className="text-lg font-medium">No open positions right now.</p>
            <p className="text-sm mt-1">Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {openings.map(({ id, title, icon, accentColor, description }) => {
              const Icon = ICON_MAP[icon] ?? Users;
              return (
                <div
                  key={id}
                  className="bg-white rounded-2xl shadow-sm border-t-4 p-8 flex flex-col gap-4"
                  style={{ borderColor: accentColor }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `${accentColor}18` }}
                  >
                    <Icon size={24} style={{ color: accentColor }} strokeWidth={2} />
                  </div>
                  <div>
                    <p className="font-extrabold text-[#0a1628] text-lg leading-snug">{title}</p>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed flex-1">{description}</p>
                  <Link
                    href={`${PLATFORM_URL}/careers/apply?role=${encodeURIComponent(title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-center font-black text-sm px-6 py-3 rounded-md transition-[filter] hover:brightness-110"
                    style={{ background: accentColor, color: "#fff" }}
                  >
                    Apply Now
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </section>

      <section className="bg-[#0a1628] py-14 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-black text-white mb-3">Why work at All Star Kids?</h2>
          <p className="text-blue-200 max-w-xl mx-auto mb-8">
            We&apos;re more than a daycare — we&apos;re a community. Our staff are valued, supported, and part of something that truly matters.
          </p>
          <Link
            href="/contact?message=I%20have%20a%20question%20about%20working%20at%20All%20Star%20Kids%20Academy."
            className="bg-[#fbbf24] text-[#0a1628] font-black text-sm px-8 py-3.5 rounded-md hover:brightness-110 transition-[filter] inline-block"
          >
            Get in Touch →
          </Link>
        </div>
      </section>
    </main>
  );
}
