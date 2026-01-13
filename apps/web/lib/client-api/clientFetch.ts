"use client";

export function getAPIURL() {
    return process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";
}

export async function fetchFromAPIClient(
    path: string,
    options: RequestInit = {}
) {
    const res = await fetch(`${getAPIURL()}${path}`, {
        ...options,
        credentials: options.credentials ?? "include",
        cache: options.cache ?? "no-store",
        headers: {
            ...(options.headers ?? {}),
        },
    });

    if (!res.ok) {
        throw new Error(`API error: ${res.status}`);
    }

    if (res.status === 204) return null;

    return res.json();
}
