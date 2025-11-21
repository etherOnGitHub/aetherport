import "server-only";

export const API_URL = process.env.API_URL || "http://localhost:8000";

export async function fetchAPI(path: string) {
    const res = await fetch(`${API_URL}${path}`, {
        next: { revalidate: 5 }, // caching
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch API: ${res.statusText}`);
    }

    return res.json();
}
