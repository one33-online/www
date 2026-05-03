import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Instrument_Sans,
  Instrument_Serif,
} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
});

// Used exclusively in Concept D — do not apply globally
const cormorantGaramond = Cormorant_Garamond({
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "One33",
  description:
    "A South African reconciliation organisation working toward genuine reconciliation between people across the divides that history has built.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={cn(
        "h-full antialiased",
        instrumentSans.variable,
        instrumentSerif.variable,
        cormorantGaramond.variable,
        "font-sans"
      )}
      lang="en"
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
