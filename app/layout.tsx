import NavBar from "@/src/components/NavBar";
import "./globals.css";
import { LanguageProvider } from "@/src/context/LanguageContext";
import { Hero } from "@/src/components/Hero";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <LanguageProvider>
          <NavBar />
          <Hero/>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
