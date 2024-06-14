import { GeistSans } from "geist/font/sans";
import { Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/themeProvider";
import "./globals.css";


const grotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '700'],
  // display: 'swap',
  // variable: '--font-grotesk',
})

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "ShipStreamer",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
      <html lang="en" className={`${GeistSans.className} ${grotesk.className}`}>
        <body className="bg-background text-foreground">
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main className="min-h-screen flex flex-col items-center">
          {children}
          </main>
          </ThemeProvider>
          
        </body>
      </html>
  );
}