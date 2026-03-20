import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Music2, MapPin, Phone, Clock, Mail } from "lucide-react";

const navLinks = [
  { href: "/",         label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/about",    label: "About" },
  { href: "/gallery",  label: "Gallery" },
  { href: "/contact",  label: "Contact" },
  { href: "/enroll",   label: "Enroll" },
];

const social = [
  { href: "https://www.facebook.com/p/All-Star-Kids-Academy-61565962763578/", label: "Facebook",  Icon: Facebook },
  { href: "https://www.instagram.com/allstarkidsacademy.ga/",                 label: "Instagram", Icon: Instagram },
  { href: "https://www.tiktok.com/@allstarkidsacademyga",                     label: "TikTok",    Icon: Music2 },
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
            {social.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Icon size={16} />
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
          <ul className="space-y-4 text-sm text-blue-200">
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin size={15} />
              </div>
              <span>4518 Covington Hwy<br />Decatur, GA 30035</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                <Phone size={15} />
              </div>
              <a href="tel:4042842327" className="hover:text-white transition-colors">(404) 284-2327</a>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                <Clock size={15} />
              </div>
              <span>Mon–Fri: 6:00 AM – 6:30 PM</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                <Mail size={15} />
              </div>
              <a href="mailto:info@allstarkidsacademyga.com" className="hover:text-white transition-colors">info@allstarkidsacademyga.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 text-center text-xs text-blue-400 py-5">
        © {new Date().getFullYear()} All Star Kids Academy. All rights reserved.
      </div>
    </footer>
  );
}
