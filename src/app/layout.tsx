import { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Learn AI with Us...!",
  description:
    "LearnAIwithUs is a platform by students, for students, exploring the fields of Artificial Learning (ML & DL), and Data Science. We’re here to make learning collaborative, fun, and open to everyone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Prism.js CSS for syntax highlighting */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.27.0/themes/prism-okaidia.min.css"
          rel="stylesheet"
        />
        {/* Material icons */}
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        {/* Prism.js JS (for syntax highlighting functionality) */}
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.27.0/prism.min.js"
          defer
        />
        {/* Prism.js All Languages bundle (for support of all code languages) */}
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.27.0/prism-all.min.js"
          defer
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
