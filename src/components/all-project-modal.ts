import type { ProjectCategory } from "../types/project";
import { createCategoryElement } from "./all-project-list";

export function createAllProjectsModal(projectsData: ProjectCategory[]) {
  const modal = document.createElement("div") as HTMLDivElement;

  modal.className =
    "fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm";
  modal.innerHTML = `
      <div class="bg-slate-900/80 border border-slate-700/50 rounded-md backdrop-blur-md shadow-2xl shadow-black/50 mx-4 max-w-4xl w-full max-h-[80vh] overflow-auto custom-scrollbar">
        <div class="bg-slate-800/80 px-4 py-3 flex items-center justify-between border-b border-slate-700/50">
        <div>
          <div class="flex gap-2 items-center">
              <div class="flex gap-2">
                <span class="size-3 rounded-full bg-red-400"></span>
                <span class="size-3 rounded-full bg-amber-400"></span>
                <span class="size-3 rounded-full bg-emerald-400"></span>
              </div>
              <div class="text-slate-300 text-sm font-mono"><span class="text-blue-400">>_</span> kenneth@software-developer:~/projects$</div>
            </div>
          </div>
          <button id="close-projects-modal" class="text-slate-400 hover:text-white ml-auto">x</button>
        </div>

        <div class="p-6 font-mono text-sm">
          <div class="flex items-center gap-2 mb-2">
            <span class="text-emerald-400">$</span>
            <span class="text-amber-400">ls --all-projects --detailed</span>
          </div>
          <div class="text-slate-400 ml-6 space-y-4 mt-4">
            ${projectsData
              .map((category) => createCategoryElement(category))
              .join("")}
          </div>
        </div>
      </div>
    `;
  return modal;
}
