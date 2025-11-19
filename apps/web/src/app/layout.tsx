import type { Metadata } from "next";
import { Inter, Michroma } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    weight: ["300", "500"],
    variable: "--font-inter",
});

const michroma = Michroma({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-michroma",
});

export const metadata: Metadata = {
    title: "aetherwave hub",
    description:
        "Central hub for aetherwave projects, docs, and more. Made by Callum/ etherchild. A home for all things etherchild.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body
                className={`${michroma.variable} ${inter.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
