import type { Metadata } from "next";
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
	description: "Welcome to our AI site. Made with AI & Teach you AI. We will learn & experiment with AI and explore the power of it",
};

export default function RootLayout({
	children,
	}: Readonly<{
	children: React.ReactNode;
	}>) {
	return (
		<html lang="en">
		<body
			className={`${geistSans.variable} ${geistMono.variable} antialiased`}
		>
			<div className="sticky top-0 w-full bg-gray-900 text-white text-center py-2">
          The site is under construction
        </div>
			{/* <Navbar /> */}
			{children}
		</body>
		</html>
	);
}
