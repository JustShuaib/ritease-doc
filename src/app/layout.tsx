import type {Metadata} from "next";
import {Open_Sans} from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ritease",
  description: "Go beyond the basics with files",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.syncfusion.com/ej2/29.1.33/tailwind3.css"
          rel="stylesheet"
        />
      </head>
      <body className={`${openSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
