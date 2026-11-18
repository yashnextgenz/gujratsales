import type { Metadata } from "next";
import { Fraunces, Manrope, Noto_Sans_Gujarati } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"], style: ["normal", "italic"] });
const gujarati = Noto_Sans_Gujarati({ variable: "--font-gujarati", subsets: ["gujarati"], weight: ["400", "500", "600", "700"] });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Gujarat Sales | From Farms to Finished Products",
    template: "%s | Gujarat Sales",
  },
  description:
    "Ahmedabad-based B2B solutions business connecting agriculture, food dehydration, industrial technology and market development.",
  icons: { icon: "/logo.png", apple: "/logo.png" },
  openGraph: { images: ["/logo.png"] },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable} ${gujarati.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
