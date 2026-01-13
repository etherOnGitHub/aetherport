import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    reactCompiler: false,
    images: {
        domains: ["res.cloudinary.com"],
    },
};

export default nextConfig;
