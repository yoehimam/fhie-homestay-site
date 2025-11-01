import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";


export const metadata: Metadata = {
  title: "FHie Homestay: Kenyamanan di Tengah Keindahan Alam Asri",
  description: "Tempat menginap yang nyaman dengan suasana pemandangan alam yang masih asri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className="antialiased"
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
