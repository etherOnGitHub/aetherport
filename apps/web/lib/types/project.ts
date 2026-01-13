import { Tag } from "./tag";

export type Project = {
    id: number;
    title: string;
    slug: string;
    tagline?: string;
    description?: string;
    image_url?: string;
    gallery_images?: unknown[];
    tags: Tag[];
    github_link?: string;
    live_link?: string;
    extra_links?: unknown[];
    completed?: boolean;
    featured?: boolean;
    order?: number;
    created_at: string;
    updated_at: string;
};
