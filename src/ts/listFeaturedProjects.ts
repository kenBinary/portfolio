import type { Project } from "../types/project";
import { createProjectCard } from "../components/project-card";

async function getFeaturedProjects(): Promise<Project[]> {
  try {
    const response = await fetch("/src/data/featuredProjects.json");
    return await response.json();
  } catch (error) {
    console.error("Failed to load projects data:", error);
    return [];
  }
}

export async function listFeaturedProjects(): Promise<void> {
  const featuredProjects = await getFeaturedProjects();
  const projectListContainer = document.getElementById("project-list");

  if (!projectListContainer) {
    console.error("Project list container not found");
    return;
  }

  const projectsHTML = featuredProjects
    .map((project) => createProjectCard(project))
    .join("");

  projectListContainer.innerHTML = projectsHTML;
}
