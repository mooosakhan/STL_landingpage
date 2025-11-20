import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // keep your global styles

const inter = Inter({
  subsets: ["latin"],
  display: "swap", // ensures fast render and no flash of unstyled text
  variable: "--font-inter", // optional: creates a CSS variable
});


export const metadata: Metadata = {
  title: "Digital Transformation Consultant & Services Provider",
  description: "Providing expert consulting services for digital transformation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.className}  antialiased `}
      >
      {children}
      </body>
    </html>
  );
}
