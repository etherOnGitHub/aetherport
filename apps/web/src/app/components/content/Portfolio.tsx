import Link from "next/link";

type Tag = { id: number; name: string };

type Project = {
    id: number;
    title: string;
    slug: string;
    tagline: string;
    description: string;
    image_url: string;
    gallery_images: unknown[];
    tags: Tag[];
    github_link: string;
    live_link: string;
    extra_links: unknown[];
    completed: boolean;
    featured: boolean;
    order: number;
    created_at: string;
    updated_at: string;
};

async function getProjects(): Promise<Project[]> {
    const base = process.env.API_BASE_URL;
    if (!base) throw new Error("API_BASE_URL is not defined");

    const res = await fetch(`${base}/projects/`, {
        headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) throw new Error(`Failed to fetch projects: ${res.status}`);

    return res.json();
}

export default async function Portfolio() {
    const projects = await getProjects();
    return (
        <main className="mx-auto max-w-5xl p-6 mt-16">
            <h1 className="text-3xl font-semibold">Portfolio</h1>
            <div className="mt-6 grid gap-4 lg:grid-cols-2">
                {projects.map((p) => (
                    <Link
                        key={p.id}
                        href={`/portfolio/${p.slug}`}
                        className="rounded-2xl border p-4 hover:opacity-90"
                    >
                        <h2 className="text-xl font-medium">{p.title}</h2>
                        {p.tagline ? (
                            <p className="mt-2 opacity-80">{p.tagline}</p>
                        ) : null}
                    </Link>
                ))}
            </div>
        </main>
    );
}
