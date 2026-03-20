import ContactForm from "@/components/contact-form";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata = {
  title: "Contact | All Star Kids Academy",
  description: "Get in touch with All Star Kids Academy. Visit us at 4518 Covington Hwy, Decatur, GA 30035 or call (404) 284-2327.",
};

const iconContainerStyle: React.CSSProperties = {
  width: 34,
  height: 34,
  borderRadius: 8,
  background: "rgba(10,22,40,0.06)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
};

export default function ContactPage() {
  return (
    <main className="bg-[#fdfaf6] min-h-screen">
      {/* Header */}
      <section className="bg-[#0a1628] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-blue-300 text-sm font-bold uppercase tracking-widest mb-2">We'd Love to Hear From You</p>
          <h1 className="text-4xl md:text-5xl font-black text-white">Contact Us</h1>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: info */}
        <div className="animate-fade-in-up">
          <h2 className="text-2xl font-black text-[#0a1628] mb-6">Visit or Call</h2>
          <ul className="space-y-5 text-slate-600">
            <li className="flex gap-3">
              <div style={iconContainerStyle}>
                <MapPin size={16} color="#0a1628" strokeWidth={2} />
              </div>
              <div>
                <p className="font-bold text-[#0a1628]">Address</p>
                <p className="text-sm">4518 Covington Hwy<br />Decatur, GA 30035</p>
              </div>
            </li>
            <li className="flex gap-3">
              <div style={iconContainerStyle}>
                <Phone size={16} color="#0a1628" strokeWidth={2} />
              </div>
              <div>
                <p className="font-bold text-[#0a1628]">Phone</p>
                <a href="tel:4042842327" className="text-sm hover:text-[#fbbf24] transition-colors">(404) 284-2327</a>
              </div>
            </li>
            <li className="flex gap-3">
              <div style={iconContainerStyle}>
                <Mail size={16} color="#0a1628" strokeWidth={2} />
              </div>
              <div>
                <p className="font-bold text-[#0a1628]">Email</p>
                <a href="mailto:info@allstarkidsacademyga.com" className="text-sm hover:text-[#fbbf24] transition-colors">info@allstarkidsacademyga.com</a>
              </div>
            </li>
            <li className="flex gap-3">
              <div style={iconContainerStyle}>
                <Clock size={16} color="#0a1628" strokeWidth={2} />
              </div>
              <div>
                <p className="font-bold text-[#0a1628]">Hours</p>
                <p className="text-sm">Monday – Friday: 6:00 AM – 6:30 PM</p>
                <p className="text-sm text-slate-400">Saturday – Sunday: Closed</p>
              </div>
            </li>
          </ul>

          {/* Google Maps embed */}
          <div className="mt-8 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <iframe
              src="https://maps.google.com/maps?q=4518+Covington+Hwy,+Decatur,+GA+30035&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="260"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="All Star Kids Academy location"
            />
          </div>
          {/* Note: Replace the Maps embed src with the real embed URL from Google Maps → Share → Embed a map */}
        </div>

        {/* Right: form */}
        <div className="animate-fade-in-up delay-200">
          <h2 className="text-2xl font-black text-[#0a1628] mb-6">Send a Message</h2>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
