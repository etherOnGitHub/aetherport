import Link from "next/link";
import type { Project } from "../../../../lib/types/project";

type ProjectsProps = {
    projects: Project[];
};

export default function Projects({ projects }: ProjectsProps) {
    if (projects.length === 0) {
        return <p>No projects found.</p>;
    }
    return (
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {projects.map((project) => (
                <Link
                    key={project.id}
                    href={`/projects/${project.slug}`}
                    className="group rounded-2xl border p-5 transition hover:opacity-90"
                >
                    <h2 className="text-xl font-semibold">{project.title}</h2>

                    {project.tagline && (
                        <p className="mt-2 opacity-75">{project.tagline}</p>
                    )}

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
                </Link>
            ))}
        </div>
    );
}
