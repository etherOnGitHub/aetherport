"use client";

import HomePage from "./testAPI";

export default function Navbar() {
    return (
        <nav className="absolute flex h-[63px] px-4 gap-4 mt-8 pl-15 w-full justify-between ">
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
                        <a href="">bruh</a>
                    </li>
                    <li className="opacity-50">|</li>
                    <li>
                        <a href="">list</a>
                    </li>
                </ul>
            </div>
            <div>
                <HomePage />
            </div>
            <div className="items-center flex mr-10">
                <a href="">Login</a>
            </div>
        </nav>
    );
}
