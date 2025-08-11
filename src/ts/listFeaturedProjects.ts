import type { Project } from "../types/project";
import { createProjectCard } from "../components/project-card";
import featureProjects from "../data/featuredProjects.json";

export async function listFeaturedProjects(): Promise<void> {
  const featuredProjects = featureProjects as Project[];
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
