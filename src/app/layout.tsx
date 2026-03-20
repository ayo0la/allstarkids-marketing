import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { Providers } from "@/components/providers";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "All Star Kids Academy | Decatur, GA",
  description:
    "Premier early learning academy in Decatur, GA. Infant & Toddler, Preschool, Georgia Pre-K, After School, and Summer Camp programs.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={nunito.variable}>
      <body>
        <Providers>
          <Nav />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
