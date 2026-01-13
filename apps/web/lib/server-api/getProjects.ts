"use server";

import { fetchAPI } from "./serverFetch";
import type { Project } from "../types/project";

export async function getProjects(): Promise<Project[]> {
    return fetchAPI("/projects/");
}
