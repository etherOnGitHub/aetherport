"use server";

export async function fetchAuth(path: string, options: RequestInit = {}) {
    const res = await fetch(`${process.env.API_URL}${path}`, {
        ...options,
        credentials: "include",
        cache: "no-store",
        headers: {
            ...(options.headers ?? {}),
        },
    });

    if (!res.ok) return null;

    return res.json();
}
