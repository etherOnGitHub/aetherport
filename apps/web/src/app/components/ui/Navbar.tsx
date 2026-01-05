"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Hamburger from "./Hamburger";
import useScreenWidth from "../hooks/useScreenWidth";
import ApiStatus from "../status/ApiStatus";

export default function Navbar() {
    const isSmallScreen = useScreenWidth();
    const [isOpen, setOpen] = useState(false);
    const toggle = () => setOpen((prev) => !prev);

    if (isSmallScreen) {
        return (
            <>
                <nav className="absolute flex h-15.75 px-4 gap-4 mt-8 pl-6 w-full justify-between items-center z-20">
                    <div className="flex items-center">
                        <span className="flex mr-2 -translate-y-1 text-3xl justify-items-center">
                            <a href="">
                                <Image
                                    className="ml-5 mt-2"
                                    src="/images/brand/AW2crop.png"
                                    width={50}
                                    height={50}
                                    alt="logo"
                                    loading="lazy"
                                />
                            </a>
                        </span>
                    </div>
                    <div className="justify-end hidden xs:block">
                        <ApiStatus />
                    </div>
                    <Hamburger open={isOpen} onClick={toggle} />
                </nav>
                <div
                    id=""
                    className="absolute w-full h-0 flex items-center justify-center text-center z-10 mt-24 mb-2"
                >
                    <ul
                        className={`transition-all w-full text-lg justify-items-center space-y-6 flex-col items-center nav-div mb-2"
                    ${
                        isOpen
                            ? "translate-y-31.25 opacity-100"
                            : " opacity-0 pointer-events-none"
                    }
                `}
                    >
                        <li className="w-full h-full border border-[--fg] border-r-8 border-l-8">
                            <Link className="w-full h-full" href="">
                                Hub
                            </Link>
                        </li>
                        <li className="w-full h-full border border-[--fg] border-r-8 border-l-8">
                            <Link className="w-full h-full" href="/portfolio">
                                Portfolio
                            </Link>
                        </li>
                        <li className="w-full h-full border border-[--fg] border-r-8 border-l-8">
                            <a className="w-full h-full" href="">
                                About Me
                            </a>
                        </li>
                        <li className="w-full h-full border border-[--fg] border-r-8 border-l-8">
                            <a className="w-full h-full" href="">
                                Links
                            </a>
                        </li>
                        <li className="w-full h-full border border-[--fg] border-r-8 border-l-8 mb-2">
                            <a className="w-full h-full" href="">
                                Login
                            </a>
                        </li>
                    </ul>
                </div>
            </>
        );
    } else {
        return (
            <nav className="absolute flex h-15.75 px-4 gap-4 mt-8 pl-15 w-full justify-between items-center">
                {/* navbar title and pic */}
                <div className="flex items-center">
                    <span className="flex mr-2 -translate-y-1 text-3xl ml-2">
                        <a href="">aetherwave</a>
                    </span>
                    <div className="ml-6 mr-6 opacity-50">|</div>
                    <ul className="flex flex-row gap-6 ml-2 text-lg">
                        <li>
                            <Link href="/">Hub</Link>
                        </li>
                        <li className="opacity-50 no-anim">|</li>
                        <li>
                            <Link href="/portfolio">Portfolio</Link>
                        </li>
                        <li className="opacity-50 no-anim">|</li>
                        <li>
                            <a href="">About Me</a>
                        </li>
                        <li className="opacity-50 no-anim">|</li>
                        <li>
                            <a href="">Links</a>
                        </li>
                    </ul>
                </div>
                <div className="justify-end">
                    <ApiStatus />
                </div>
                <div className="items-center flex mr-10">
                    <a href="">Login</a>
                </div>
            </nav>
        );
    }
}
