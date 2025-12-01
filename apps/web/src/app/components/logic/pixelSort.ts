"use client";

import { createCrawler, crawlStep, Crawler } from "../logic/crawler";

let rafId = 0;
const memory: { x: number; y: number; time: number }[] = [];
const trail = 1000;

export default function startLoop(
    ctx: CanvasRenderingContext2D,
    bufferCtx: CanvasRenderingContext2D,
    width: number,
    height: number,
    delta: number
) {
    let last = 0;
    const speed = 2;

    const crawlers: Crawler[] = [];

    for (let i = 0; i < 20; i++) {
        crawlers.push(createCrawler(width, height, bufferCtx));
    }

    function frame(now: number) {
        if (now - last >= speed) {
            ctx.drawImage(bufferCtx.canvas, width, height);

            for (let i = 0; i < crawlers.length; i++) {
                const crawler = crawlers[i];
                for (let j = 0; j < 2; j++) {
                    crawlStep(ctx, crawler, width, height, delta, memory);
                    if (crawler.done) {
                        crawlers[i] = createCrawler(width, height, bufferCtx);
                        break;
                    }
                }
                crawler.trail = crawler.trail.filter(
                    (p) => now - p.time < trail
                );
                for (const p of crawler.trail) {
                    ctx.fillStyle = crawler.color;
                    ctx.fillRect(p.x, p.y, 1, 1);
                }
            }

            last = now;
        }
        rafId = requestAnimationFrame(frame);
    }

    rafId = requestAnimationFrame(frame);

    return () => cancelAnimationFrame(rafId);
}
