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
        }, 50);

        // Fallback
        const fake = setInterval(() => {
            setProgress((prev) => {
                const next = prev + 4;
                return next > 100 ? 100 : next;
            });
        }, 60);

        function handleLoaded() {
            setLoaded(true);
            setProgress(100);
            clearInterval(fake);
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
            setTimeout(() => setDone(true), 400);
        }
    }, [loaded, minTime]);

    // Failsafe in case 'load' event doesn't fire
    useEffect(() => {
        const failsafe = setTimeout(() => {
            setProgress(100);
            setLoaded(true);
            setMinTime(true);
        }, 4000);

        return () => clearTimeout(failsafe);
    }, []);

    return (
        <div
            id="splash-loader"
            className={`absolute z-9999 flex flex-col items-center justify-center transition-opacity duration-500 w-full h-full backdrop-blur-3xl bg-blend-saturation
        ${done ? "opacity-0 pointer-events-none" : "opacity-100"}
      `}
        >
            {/* hero */}
            <Image
                src="/images/brand/AW_transparent.png"
                alt="Logo"
                width={150}
                height={150}
                loading="eager"
                className="w-auto"
            />
            {/* Spinner */}
            <div className="w-10 h-10 border-4 border-t-white mix-blend-color-burn rounded-full animate-spin mb-6"></div>

            {/* Loading bar */}
            <div className="w-64 h-2 rounded-full overflow-hidden">
                <div
                    className="h-full loadingBar transition-all"
                    style={{ width: progress + "%" }}
                />
            </div>

            <p className="mt-4 text-sm tracking-widest">{progress}% loaded</p>
        </div>
    );
}
