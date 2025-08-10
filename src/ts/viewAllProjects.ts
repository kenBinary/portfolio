import { createAllProjectsModal } from "../components/all-project-modal";
import type { ProjectCategory } from "../types/project";

export function viewAllProjects(): void {
  const allProjectsBtn = document.getElementById("all-projects-btn");
  if (!allProjectsBtn) return;

  allProjectsBtn.addEventListener("click", () => {
    showAllProjectsTerminal();
  });
}

async function loadProjectsData(): Promise<ProjectCategory[]> {
  try {
    const response = await fetch("/src/data/allProjects.json");
    return await response.json();
  } catch (error) {
    console.error("Failed to load projects data:", error);
    return [];
  }
}

async function showAllProjectsTerminal(): Promise<void> {
  const projectsData = await loadProjectsData();

  const modal = createAllProjectsModal(projectsData);
  document.body.appendChild(modal);

  const projectItems = modal.querySelectorAll(".project-item");
  projectItems.forEach((item) => {
    item.addEventListener("click", () => {
      const details = item.querySelector(".project-details") as HTMLElement;
      if (details) {
        details.classList.toggle("hidden");
        if (!details.classList.contains("hidden")) {
          details.style.maxHeight = details.scrollHeight + "px";
        } else {
          details.style.maxHeight = "0px";
        }
      }
    });
  });

  const closeBtn = modal.querySelector("#close-projects-modal");
  closeBtn?.addEventListener("click", () => {
    document.body.removeChild(modal);
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      document.body.removeChild(modal);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.body.removeChild(modal);
    }
  });
}
