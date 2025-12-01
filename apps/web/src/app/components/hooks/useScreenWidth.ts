"use client";

import { useEffect, useState } from "react";

export default function useScreenWidth() {
    const BREAKPOINT = 992;
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const update = () => setIsSmallScreen(window.innerWidth < BREAKPOINT);
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);
    return isSmallScreen;
}
