export const dynamic = "force-dynamic";

import Projects from "../components/content/Projects";
import { getProjects } from "../../../lib/server-api/getProjects";

export default async function ProjectsPage() {
    const projects = await getProjects();

    return (
        <main className="container mx-auto px-4 py-32">
            <h1 className="text-3xl font-bold mb-6">Projects</h1>
            <Projects projects={projects} />
        </main>
    );
}
