import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photo Album",
  description: "A beautiful page-flip photo album built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-black antialiased">
        {children}
      </body>
    </html>
  );
}