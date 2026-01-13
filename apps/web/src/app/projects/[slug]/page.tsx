import { getProjectBySlug } from "../../../../lib/server-api/getProjects";
import Image from "next/image";

type PageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function ProjectPage({ params }: PageProps) {
    const { slug } = await params;
    const project = await getProjectBySlug(slug);

    return (
        <main className="mx-auto max-w-5xl p-6 mt-16">
            {/* title */}
            <h1 className="text-2xl">{project.title}</h1>
            <p className="mt-4 opacity-80">Slug: {slug}</p>
            {/* tagline */}
            {project.tagline && (
                <p className="mt-4 italic opacity-80">{project.tagline}</p>
            )}
            {/* tags */}
            {project.tags?.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag.id}
                            className="rounded-full border px-3 py-1 text-xs opacity-70"
                        >
                            {tag.name}
                        </span>
                    ))}
                </div>
            )}
            {/* hero */}
            {project.image_url && (
                <Image
                    src={project.image_url}
                    alt={project.title}
                    width={800}
                    height={400}
                    className="mt-8 w-full rounded-lg object-cover"
                />
            )}
            {/* description */}
            {project.description && (
                <p className="mt-8 leading-relaxed">{project.description}</p>
            )}
            {/* links */}
            <div className="mt-8 flex gap-4">
                {project.github_link && (
                    <a
                        href={project.github_link}
                        target="_blank"
                        rel="noreferrer"
                        className="underline"
                    >
                        GitHub
                    </a>
                )}

                {project.live_link && (
                    <a
                        href={project.live_link}
                        target="_blank"
                        rel="noreferrer"
                        className="underline"
                    >
                        Live
                    </a>
                )}
            </div>
        </main>
    );
}
