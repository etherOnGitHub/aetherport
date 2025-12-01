"use client";

import { expo } from "../logic/math";

export type Crawler = {
    x: number;
    y: number;
    dx: number;
    dy: number;
    steps: number;
    maxSteps: number;
    color: string;
    done: boolean;

    trail: { x: number; y: number; time: number }[];
};

export function createCrawler(
    width: number,
    height: number,
    bufferCtx: CanvasRenderingContext2D
): Crawler {
    const startX = Math.floor(Math.random() * width);
    const startY = Math.floor(Math.random() * height);

    const dirs: { dx: 1 | -1 | 0; dy: 1 | -1 | 0 }[] = [
        { dx: 1, dy: 0 },
        { dx: -1, dy: 0 },
        { dx: 0, dy: 1 },
        { dx: 0, dy: -1 },
    ];
    const { dx, dy } = dirs[Math.floor(Math.random() * dirs.length)];

    const p = bufferCtx.getImageData(startX, startY, 1, 1).data;
    const color = `rgba(${p[0]}, ${p[1]}, ${p[2]}, ${p[3] / 255})`;

    const maxSteps = Math.floor(expo(2, 200, 0.02));

    return {
        x: startX,
        y: startY,
        dx,
        dy,
        steps: 0,
        maxSteps,
        color,
        done: false,
        trail: [],
    };
}

export function crawlStep(
    ctx: CanvasRenderingContext2D,
    crawler: Crawler,
    width: number,
    height: number,
    delta: number,
    memory: { x: number; y: number }[]
) {
    if (crawler.done) return;

    memory.push({ x: crawler.x, y: crawler.y });

    ctx.fillStyle = crawler.color;
    ctx.fillRect(crawler.x, crawler.y, 1, 1);

    crawler.trail.push({
        x: crawler.x,
        y: crawler.y,
        time: performance.now(),
    });

    crawler.x += crawler.dx;
    crawler.y += crawler.dy;
    crawler.steps++;

    if (
        crawler.x < 0 ||
        crawler.x >= width ||
        crawler.y < 0 ||
        crawler.y >= height ||
        crawler.steps >= crawler.maxSteps
    ) {
        crawler.done = true;
    }
}
