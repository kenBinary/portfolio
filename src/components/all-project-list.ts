import type { Project, ProjectCategory } from "../types/project";

export function createProjectElement(
  project: Project,
  isLast: boolean
): string {
  const treeChar = isLast ? "└──" : "├──";

  return `
    <div class="project-item text-slate-300 cursor-pointer hover:text-sky-400 transition-colors duration-200 group" 
         data-project-id="${project.id}">
      <div class="flex items-center justify-between">
        <span>${treeChar} ${project.name}/</span>
        <div class="flex gap-2 opacity-100 group-hover:opacity-100">
          ${
            project.github
              ? `
            <a href="${project.github}" target="_blank" 
               class="text-xs px-2 py-1 bg-slate-700/50 border border-sky-400/30 text-sky-400 rounded hover:border-sky-400/80 transition-colors"
               onclick="event.stopPropagation()">
              GitHub
            </a>
          `
              : ""
          }
          ${
            project.demo
              ? `
            <a href="${project.demo}" target="_blank" 
               class="text-xs px-2 py-1 bg-slate-700/50 border border-green-400/30 text-green-400 rounded hover:border-green-400/80 transition-colors"
               onclick="event.stopPropagation()">
              Demo
            </a>
          `
              : ""
          }
        </div>
      </div>
      <div class="project-details ml-4 mt-2 hidden transition-all duration-300">
        <div class="text-xs text-slate-400 mb-2">${project.description}</div>
        <div class="flex flex-wrap gap-1 mb-2">
          ${project.technologies
            .map(
              (tech) => `
            <span class="text-xs px-2 py-1 bg-slate-800/50 border border-slate-600/50 text-slate-300 rounded">
              ${tech}
            </span>
          `
            )
            .join("")}
        </div>
      </div>
    </div>
  `;
}

export function createCategoryElement(category: ProjectCategory): string {
  return `
    <div>
      <div class="text-${category.color} font-semibold flex gap-2 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-folder-icon lucide-folder"
        >
          <path
            d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
          />
        </svg>
       ${category.category}</div>
      <div class="ml-4 space-y-1">
        ${category.projects
          .map((project, index) =>
            createProjectElement(
              project,
              index === category.projects.length - 1
            )
          )
          .join("")}
      </div>
    </div>
  `;
}
