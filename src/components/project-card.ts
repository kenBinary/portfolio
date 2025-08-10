import {
  cloudDownloadPlaceholder,
  creditCardPlaceholder,
  databasePlaceholder,
  dockIconPlaceholder,
  menuPlaceholder,
} from "../constants/imagePlaceholders";
import type { Project } from "../types/project";

export function createProjectCard(project: Project): string {
  const demoButton = project.demo
    ? `<a
         href="${project.demo}"
         target="_blank"
         class="group cursor-none flex items-center gap-2 justify-center bg-slate-800/80 rounded-sm px-4 py-2 text-sm border border-sky-400/30 hover:border-sky-400/80 font-mono transition-all duration-300"
       >
         <span class="text-emerald-400">$</span>
         <span class="text-amber-400">demo --live</span>
       </a>`
    : "";

  const githubButton = project.github
    ? `<a
         href="${project.github}"
         target="_blank"
         class="group cursor-none flex items-center gap-2 justify-center bg-slate-800/80 rounded-sm px-4 py-2 text-sm border border-sky-400/30 hover:border-sky-400/80 font-mono transition-all duration-300"
       >
         <span class="text-emerald-400">$</span>
         <span class="text-amber-400">view --source</span>
       </a>`
    : "";

  const imageElement = project.image
    ? `<img
         src="${project.image}"
         class="object-contain"
         alt="image of ${project.name}"
       />`
    : `<div class="text-lg font-mono">
        ${createImagePlaceHolder()}
       </div>`;

  const techTags = project.technologies
    .map(
      (tech) => `
        <span class="px-3 py-1 bg-slate-700/50 border border-sky-400/30 text-sky-400 text-xs font-mono rounded transition-all duration-300">
          ${tech}
        </span>`
    )
    .join("");

  return `
    <div class="project-card-3d bg-slate-800/50 border border-slate-700/50 overflow-hidden rounded-xl relative transform-3d perspective-distant">
      <div class="project-glitch-overlay absolute inset-0 bg-gradient-to-r from-transparent via-sky-400/10 to-transparent z-10"></div>

      <div class="p-6 relative overflow-hidden">
        <div class="w-full h-48 bg-gradient-to-br from-sky-400/20 to-blue-500/20 rounded-lg flex items-center justify-center relative overflow-hidden">
          ${imageElement}
        </div>
      </div>

      <div class="p-6">
        <h3 class="text-xl font-bold mb-2 text-sky-400 font-mono">
          ${project.name
            .replace(/-/g, " ")
            .replace(/\b\w/g, (l) => l.toUpperCase())}
        </h3>
        <p class="text-slate-400 mb-4 font-mono text-sm">
          ${project.description}
        </p>
        <div class="flex flex-wrap gap-2 mb-4">
          ${techTags}
        </div>
        <div class="flex gap-2">
          ${demoButton}
          ${githubButton}
        </div>
      </div>
    </div>
  `;
}

function createImagePlaceHolder() {
  const placeHolders = [
    dockIconPlaceholder,
    creditCardPlaceholder,
    databasePlaceholder,
    cloudDownloadPlaceholder,
    menuPlaceholder,
  ];

  const randomIndex = Math.floor(Math.random() * placeHolders.length);
  return placeHolders[randomIndex];
}
