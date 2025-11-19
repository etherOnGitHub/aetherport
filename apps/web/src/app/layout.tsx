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
                {/* { NAVBAR } */}
                <div className="relative h-0 overflow-visible w-full top-0 left-0">
                    <div className="absolute h-2 w-full bg-(--bar-red) barIndexRed top-0 overflow-visible"></div>
                    <div className="absolute h-2 w-full bg-(--bar-purple) barIndexPurple top-2 overflow-visible"></div>
                    <div className="absolute h-2 w-full bg-(--bar-teal) barIndexTeal top-4 overflow-visible"></div>
                    <div className="absolute h-2 w-full bg-(--bar-amber) barIndexAmber top-6 overflow-visible"></div>
                    <div className="absolute h-8 w-full bg-(--bg) z-50 rotatedNavBar -top-7"></div>
                    <div className="absolute h-4 w-full bg-(--bar-red) translate-1 rotatedNavBar barIndexRed overflow-visible top-0"></div>
                    <div className="absolute h-4 w-full bg-(--bar-purple) translate-2 rotatedNavBar barIndexPurple overflow-visible top-1"></div>
                    <div className="absolute h-4 w-full bg-(--bar-teal) translate-3 rotatedNavBar barIndexTeal overflow-visible top-2"></div>
                    <div className="absolute h-4 w-full bg-(--bar-amber) translate-4 rotatedNavBar barIndexAmber overflow-visible top-3"></div>

                    <nav className="absolute flex text-center justify-stretch h-[63px] px-4 gap-4 mt-8 pl-15 w-full">
                        {/* navbar title and pic */}
                        <h1 className="text-3xl">aetherwave</h1>
                        <div className="grow"></div>
                        <li className="list-none ">
                            <a href="">home</a>
                            <a href="">projects</a>
                            <a href="">docs</a>
                            <a href="">about</a>
                        </li>
                    </nav>
                </div>
                {children}
            </body>
        </html>
    );
}
