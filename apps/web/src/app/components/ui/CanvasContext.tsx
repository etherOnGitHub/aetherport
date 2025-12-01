"use client";

import { useRef, useEffect } from "react";
import useObserveResizes from "../hooks/observeResizes";
import startLoop from "../logic/pixelSort";

export default function CanvasContext({ src }: { src: string }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const size = useObserveResizes(containerRef, 1000);

    function initCanvas(
        ctx: CanvasRenderingContext2D,
        canvas: HTMLCanvasElement,
        src: string
    ) {
        const image = new Image();
        image.src = src;

        const buffer = document.createElement("canvas");
        const bufferCtx = buffer.getContext("2d", { willReadFrequently: true });
        if (!bufferCtx) return;

        image.onload = () => {
            buffer.width = canvas.width;
            buffer.height = canvas.height;

            bufferCtx.drawImage(image, 0, 0, canvas.width, canvas.height);

            ctx.drawImage(buffer, 0, 0);

            startLoop(ctx, bufferCtx, canvas.width, canvas.height, 16);
        };
    }

    useEffect(() => {
        if (!size.width || !size.height) return;
        if (!canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        if (!ctx) return;

        canvas.width = size.width;
        canvas.height = size.height;

        initCanvas(ctx, canvas, src);
    }, [size, src]);

    return (
        <div ref={containerRef} className="relative w-full h-full">
            <canvas ref={canvasRef} className="w-full h-full block" />
        </div>
    );
}
