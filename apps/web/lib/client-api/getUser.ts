"use client";

import { fetchFromAPIClient } from "./clientFetch";

export async function getUser() {
    try {
        return await fetchFromAPIClient("/auth/account/");
    } catch {
        return null;
    }
}
