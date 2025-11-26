"use client";

import { useState } from "react";
import Image from "next/image";
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
                <nav className="absolute flex h-[63px] px-4 gap-4 mt-8 pl-6 w-full justify-between items-center z-20">
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
                <div className="absolute w-[95%] flex items-center justify-center z-10">
                    <ul
                        className={`transition-all w-full gap-6 ml-2 text-lg justify-items-center space-y-5 flex-col"
                    ${
                        isOpen
                            ? "translate-y-30 opacity-100"
                            : " opacity-0 pointer-events-none h-0 "
                    }
                `}
                    >
                        <li>
                            <a href="">home</a>
                        </li>
                        <li>
                            <a href="">portfolio</a>
                        </li>
                        <li>
                            <a href="">bruh</a>
                        </li>
                        <li>
                            <a href="">list</a>
                        </li>
                        <li>
                            <a href="">Login</a>
                        </li>
                    </ul>
                </div>
            </>
        );
    } else {
        return (
            <nav className="absolute flex h-[63px] px-4 gap-4 mt-8 pl-15 w-full justify-between items-center">
                {/* navbar title and pic */}
                <div className="flex items-center">
                    <span className="flex mr-2 -translate-y-1 text-3xl ml-2">
                        aetherwave
                    </span>
                    <div className="ml-6 mr-6 opacity-50">|</div>
                    <ul className="flex flex-row gap-6 ml-2 text-lg">
                        <li>
                            <a href="">home</a>
                        </li>
                        <li className="opacity-50">|</li>
                        <li>
                            <a href="">portfolio</a>
                        </li>
                        <li className="opacity-50">|</li>
                        <li>
                            <a href="">about me</a>
                        </li>
                        <li className="opacity-50">|</li>
                        <li>
                            <a href=""></a>
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
