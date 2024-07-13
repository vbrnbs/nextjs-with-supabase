import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "@/components/themeProvider";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuizBanner from "@/components/QuizBanner";
import HeroSection from "@/components/Hero";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "王NTUIT",
  description: "The Smart & Simple Digital Signage Solution",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.className}`}>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col items-center">
            <Navigation />
            {/* <HeroSection /> */}
            {/* <QuizBanner /> */}
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
