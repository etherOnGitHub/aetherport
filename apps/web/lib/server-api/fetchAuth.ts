"use server";

import { cookies } from "next/headers";

export async function fetchAuth(path: string) {
    const cookieStore = await cookies();
    const access = cookieStore.get("access")?.value;
    const refresh = cookieStore.get("refresh")?.value;

    const res = await fetch(`${process.env.API_URL}${path}`, {
        headers: {
            "Content-Type": "application/json",
            Cookie: `access=${access}; refresh=${refresh}`,
        },
        cache: "no-store",
    });

    if (!res.ok) {
        return null;
    }

    return res.json();
}
