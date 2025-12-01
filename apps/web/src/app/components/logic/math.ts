"use client";

export function expo(min: number, max: number, rate: number) {
    const u = Math.random();
    const scale = -Math.log(1 - u) / rate;
    return Math.min(min + scale, max);
}
