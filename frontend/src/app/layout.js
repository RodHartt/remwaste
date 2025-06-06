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
  title: "RemWaste",
  description: "A waste management app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
        ${geistSans.variable} ${geistMono.variable} 
        antialiased 
        min-h-screen 
        bg-gradient-to-r 
        from-blue-200 to-blue-400
        dark:from-black dark:to-gray-700
      `}
      >
        {children}
      </body>
    </html>
  );
}
