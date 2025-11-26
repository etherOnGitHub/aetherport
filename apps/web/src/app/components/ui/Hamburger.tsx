"use client";

import { MouseEventHandler } from "react";

type HamburgerProps = {
    open: boolean;
    onClick: MouseEventHandler<HTMLButtonElement>;
};

export default function Hamburger({ open, onClick }: HamburgerProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="
                relative flex-col h-10 w-10 items-center justify-items-center z-50
                rounded-md border border-white/10 bg-black/40
                hover:bg-white/10 transition-colors
            
            "
            aria-label="Toggle navigation menu"
            aria-expanded={open}
        >
            <span
                className={`
                    block h-0.5 w-6 rounded-full bg-white
                    transition-transform duration-200 my-1
                    ${open ? "translate-y-1.5 rotate-45" : ""}
                `}
            />
            <span
                className={`
                    block h-0.5 w-6 rounded-full bg-white
                    transition-opacity duration-200 my-1
                    ${open ? "opacity-0" : "opacity-100"}
                `}
            />
            <span
                className={`
                    block h-0.5 w-6 rounded-full bg-white
                    transition-transform duration-200 my-1
                    ${open ? "-translate-y-1.5 -rotate-45" : ""}
                `}
            />
        </button>
    );
}
