"use client";

export const API_URL =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export async function fetchFromAPIClient(path: string) {
    const res = await fetch(`${API_URL}${path}`, {
        headers: { "Content-Type": "application/json" },
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error(`API error: ${res.status}`);
    }

    return res.json();
}
