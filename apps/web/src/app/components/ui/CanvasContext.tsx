"use client";

import { useRef, useEffect } from "react";
import useObserveResizes from "../hooks/observeResizes";
import startLoop from "../logic/pixelSort";

export default function CanvasContext({ src }: { src: string }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const size = useObserveResizes(containerRef, 1000);
    const overSize = 200;

    function initCanvas(
        ctx: CanvasRenderingContext2D,
        canvas: HTMLCanvasElement,
        src: string
    ) {
        const image = new Image();
        image.src = src;

        const buffer = document.createElement("canvas");
        const bufferCtx = buffer.getContext("2d", { willReadFrequently: true });
        if (!bufferCtx) return () => {};

        let binLoop: (() => void) | null = null;
        let cancelled = false;

        image.onload = () => {
            if (cancelled) return;

            buffer.width = canvas.width;
            buffer.height = canvas.height;

            bufferCtx.drawImage(
                image,
                overSize * 2,
                overSize * 2,
                size.width,
                size.height
            );

            ctx.drawImage(buffer, 0, 0);

            binLoop = startLoop(
                ctx,
                bufferCtx,
                buffer.width,
                buffer.height,
                16
            );
        };
        return () => {
            cancelled = true;
            if (binLoop) {
                binLoop();
                binLoop = null;
            }
        };
    }

    useEffect(() => {
        if (!size.width || !size.height) return;
        if (!canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        if (!ctx) return;

        canvas.width = size.width + overSize * 4;
        canvas.height = size.height + overSize * 4;

        const cleanup = initCanvas(ctx, canvas, src);

        return cleanup;
    }, [size, src]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div ref={containerRef} className="relative block">
            <canvas ref={canvasRef} className="block" />
        </div>
    );
}
