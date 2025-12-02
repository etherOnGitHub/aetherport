"use client";

export async function getUser() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/account/`,
        {
            credentials: "include",
            cache: "no-store",
        }
    );

    if (!res.ok) {
        return null;
    }

    return res.json();
}
