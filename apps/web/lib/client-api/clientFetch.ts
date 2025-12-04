"use client";

export function getAPIURL() {
    return process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
}

export async function fetchFromAPIClient(
    path: string,
    options: RequestInit = {}
) {
    const res = await fetch(`${getAPIURL()}${path}`, {
        credentials: "include",
        cache: "no-store",
        headers: {
            "Content-Type": "application/json",
            ...(options.headers || {}),
        },
    });

    if (!res.ok) {
        throw new Error(`API error: ${res.status}`);
    }

    if (res.status === 204) return null;

    return res.json();
}
