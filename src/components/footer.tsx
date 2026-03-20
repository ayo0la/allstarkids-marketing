import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/",         label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/about",    label: "About" },
  { href: "/gallery",  label: "Gallery" },
  { href: "/contact",  label: "Contact" },
  { href: "/enroll",   label: "Enroll" },
];

const social = [
  { href: "https://www.facebook.com/p/All-Star-Kids-Academy-61565962763578/", label: "Facebook",  icon: "f" },
  { href: "https://www.instagram.com/allstarkidsacademy.ga/", label: "Instagram", icon: "ig" },
  { href: "https://www.tiktok.com/@allstarkidsacademyga", label: "TikTok",    icon: "tt" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-3 gap-10">
        {/* Col 1: Brand */}
        <div>
          <div className="bg-white rounded-xl p-2 inline-block mb-4">
            <Image src="/logo.webp" alt="All Star Kids Academy" width={56} height={40} className="object-contain" />
          </div>
          <p className="text-blue-200 text-sm leading-relaxed max-w-[200px]">
            Where every child becomes a star.
          </p>
          <div className="flex gap-3 mt-5">
            {social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-xs font-bold transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Col 2: Nav */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-4">Navigation</p>
          <ul className="space-y-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-blue-200 hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Contact */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-4">Contact</p>
          <ul className="space-y-3 text-sm text-blue-200">
            <li>📍 4518 Covington Hwy<br />Decatur, GA 30035</li>
            <li>📞 <a href="tel:4042842327" className="hover:text-white transition-colors">(404) 284-2327</a></li>
            <li>🕐 Mon–Fri: 6:00 AM – 6:30 PM</li>
            <li>✉️ <a href="mailto:info@allstarkidsacademyga.com" className="hover:text-white transition-colors">info@allstarkidsacademyga.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 text-center text-xs text-blue-400 py-5">
        © {new Date().getFullYear()} All Star Kids Academy. All rights reserved.
      </div>
    </footer>
  );
}
