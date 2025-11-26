"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function SplashLoader() {
    const [progress, setProgress] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [minTime, setMinTime] = useState(false);
    const [done, setDone] = useState(false);

    useEffect(() => {
        const delay = setTimeout(() => {
            setMinTime(true);
        }, 500);

        // Fallback
        const fake = setInterval(() => {
            setProgress((prev) => {
                if (prev < 80) return prev + 1;
                return prev;
            });
        }, 100);

        function handleLoaded() {
            setLoaded(true);
            setProgress(100);
            setTimeout(() => setDone(true), 1000);
        }

        window.addEventListener("load", handleLoaded);

        return () => {
            window.removeEventListener("load", handleLoaded);
            clearInterval(fake);
            clearTimeout(delay);
        };
    }, []);

    useEffect(() => {
        if (loaded && minTime) {
            setTimeout(() => setDone(true), 1000);
        }
    }, [loaded, minTime]);

    return (
        <div
            className={`
        fixed inset-0 z-9999
        flex flex-col items-center justify-center
        bg-black text-white
        transition-opacity duration-500
        ${done ? "opacity-0 pointer-events-none" : "opacity-100"}
      `}
        >
            {/* hero */}
            <Image
                src="/images/brand/AW_transparent.png"
                alt="Logo"
                width={400}
                height={400}
            />
            {/* Spinner */}
            <div className="w-10 h-10 border-4 border-white/20 border-t-white rounded-full animate-spin mb-6"></div>

            {/* Loading bar container */}
            <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden">
                <div
                    className="h-full bg-white transition-all"
                    style={{ width: progress + "%" }}
                />
            </div>

            <p className="mt-4 text-sm tracking-widest">{progress}% loaded</p>
        </div>
    );
}
