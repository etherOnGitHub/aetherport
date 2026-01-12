"use server";

export const API_URL = process.env.API_URL ?? process.env.API_BASE_URL ?? null;

export async function fetchAPI(path: string, options?: RequestInit) {
    const isAuthRoute = path.startsWith("auth/") || path.startsWith("users/");
    const res = await fetch(`${API_URL}${path}`, {
        ...options,
        next: isAuthRoute ? undefined : { revalidate: 5 }, // caching
        headers: {
            "Content-Type": "application/json",
            ...options?.headers,
        },
    });

    if (!res.ok) {
        throw new Error(
            `Failed to fetch API: ${res.statusText}, Status Code: ${res.status}`
        );
    }

    return res.json();
}
