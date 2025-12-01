"use client";

import { RefObject, useEffect, useState } from "react";

export default function useObserveResizes<T extends Element>(
    ref: RefObject<T | null>,
    delay = 1000
) {
    const [size, setSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        if (!ref.current) return;

        let last = 0;

        const observer = new ResizeObserver((entries) => {
            const now = Date.now();
            if (now - last < delay) return;
            last = now;

            const rect = entries[0].contentRect;
            setSize({ width: rect.width, height: rect.height });
        });

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [ref, delay]);

    return size;
}
