"use client";

import { useEffect, useState } from "react";
import { fetchFromAPIClient } from "@/lib/client-api/clientFetch";

type Status = "loading" | "online" | "offline";

function StatusIcon({ status }: { status: Status }) {
    if (status === "loading") {
        return (
            <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                aria-label="Checking API status"
                role="img"
            >
                {/* Faint circle track */}
                <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="#4b5563"
                    strokeWidth="3"
                    fill="none"
                    opacity="0.4"
                />
                {/* Animated arc */}
                <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="#e5e7eb"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                    strokeDasharray="40 80"
                >
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 12 12"
                        to="360 12 12"
                        dur="0.8s"
                        repeatCount="indefinite"
                    />
                </circle>
            </svg>
        );
    }
    const colour = status === "online" ? "#22c55e" : "#ef4444";
    const label = status === "online" ? "API Online" : "API Offline";

    return (
        <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            aria-label={label}
            role="img"
            style={{
                display: "block",
                color: "transparent",
            }}
        >
            <circle
                cx="6"
                cy="6"
                r="5"
                style={{ fill: colour }}
                fill={colour}
            />
        </svg>
    );
}

export default function ApiStatus() {
    const [status, setStatus] = useState<Status>("loading");
    useEffect(() => {
        let cancelled = false;

        fetchFromAPIClient("/")
            .then(() => {
                if (!cancelled) setStatus("online");
            })
            .catch(() => {
                if (!cancelled) setStatus("offline");
            });
        return () => {
            cancelled = true;
        };
    }, []);

    return (
        <div className="flex items-center gap-2">
            API Status: <StatusIcon status={status} />
        </div>
    );
}
