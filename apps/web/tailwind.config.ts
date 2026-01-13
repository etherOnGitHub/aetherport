/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";
const sharedConfig = require("../../packages/config/tailwind.config") as Config;

const config: Config = {
    ...sharedConfig,
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
};

export default config;
