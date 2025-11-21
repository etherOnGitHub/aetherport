"use client";

import { useEffect, useState } from "react";
import { fetchFromAPIClient } from "@/lib/client-api/clientFetch";

export default function HomePage() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchFromAPIClient("/projects/")
            .then((res) => setData(res))
            .catch((err) => setData({ error: err.message }));
    }, []);

    return (
        <div>
            <h1>API Client Test</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}
