"use server";

import { fetchAPI } from "./serverFetch";
import type { Project } from "../types/project";

export async function getProjects(): Promise<Project[]> {
    return fetchAPI("/projects/");
}

export async function getProjectBySlug(slug: string): Promise<Project> {
    return fetchAPI(`/projects/${slug}/`);
}
