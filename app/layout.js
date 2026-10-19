import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Jawad Khan | Full-Stack Web Developer",
    template: "%s | Jawad Khan",
  },

  description:
    "I'm Jawad Khan, a full-stack web developer building modern, responsive web applications with React, Next.js, Node.js, Express, and MongoDB.",

    
openGraph: {
  title: "Jawad Khan | Full-Stack Web Developer",
  description:
    "Explore Jawad Khan's portfolio, full-stack web development projects, and expertise in building modern web applications.",
  url: "",
  siteName: "Jawad Khan Portfolio",
  type: "website",
  images: [
    {
      url: "/images/profile/me.jpeg",
      width: 1200,
      height: 630,
      alt: "Jawad Khan — Full-Stack Web Developer",
    },
  ],
},

};




export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
