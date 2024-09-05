import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import { Suspense } from "react";
import "tailwindcss/tailwind.css";
import "./globals.css";

const description = "D Trombett's home page";
const title = "D Trombett";
const font = Roboto({
	subsets: ["latin"],
	display: "swap",
	weight: "400",
});

export const metadata: Metadata = {
	applicationName: title,
	authors: [{ name: "D Trombett", url: "https://github.com/DTrombett" }],
	creator: "D Trombett",
	description,
	generator: "next-on-pages",
	icons: { icon: "/favicon.ico" },
	keywords: [
		"react",
		"nextjs",
		"portfolio",
		"dtrombett",
		"trombett",
		"curriculum",
	],
	metadataBase: new URL("https://trombett.org"),
	openGraph: {
		type: "website",
		countryName: "Italy",
		description,
		locale: "it",
		siteName: title,
		title,
		url: "https://trombett.org",
		emails: "contact@trombett.org",
		// TODO
		// images: "/image.png"
	},
	publisher: "D Trombett",
	title,
	twitter: {
		card: "summary_large_image",
		description,
		creator: "@dtrombett",
		title,
		// TODO
		// images: "/image.png",
	},
};

export const viewport: Viewport = { themeColor: "#27272A" };

const RootLayout = async ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => (
	<html lang="en">
		<body
			className={`${font.className} flex flex-col items-center min-h-screen py-8 px-4 text-white bg-zinc-800`}
		>
			<Suspense>{children}</Suspense>
		</body>
	</html>
);

export default RootLayout;
