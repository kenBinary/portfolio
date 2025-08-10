import type { SkillCategory } from "../types/skill";

interface Icons {
  [key: string]: string;
}

const icons: Icons = {
  Languages: `
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-code-icon lucide-code"
    >
    <path d="m16 18 6-6-6-6" />
    <path d="m8 6-6 6 6 6" />
    </svg>
  `,
  "Frameworks & Libraries": `
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-package-icon lucide-package"
    >
    <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" />
    <path d="M12 22V12" />
    <polyline points="3.29 7 12 12 20.71 7" />
    <path d="m7.5 4.27 9 5.15" />
    </svg>
  `,
  Databases: `
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-database-icon lucide-database"
    >
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5V19A9 3 0 0 0 21 19V5" />
    <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  `,
  Tools: `
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-tool-case-icon lucide-tool-case"
    >
    <path d="M10 15h4" />
    <path d="m14.817 10.995-.971-1.45 1.034-1.232a2 2 0 0 0-2.025-3.238l-1.82.364L9.91 3.885a2 2 0 0 0-3.625.748L6.141 6.55l-1.725.426a2 2 0 0 0-.19 3.756l.657.27" />
    <path d="m18.822 10.995 2.26-5.38a1 1 0 0 0-.557-1.318L16.954 2.9a1 1 0 0 0-1.281.533l-.924 2.122" />
    <path d="M4 12.006A1 1 0 0 1 4.994 11H19a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
    </svg>
  `,
};

export function createSkillCard(skillCategory: SkillCategory): string {
  const skillItems = skillCategory.skills
    .map(
      (skill) => `
        <div class="px-3 py-2 bg-slate-700/30 hover:bg-slate-700/50 rounded-lg text-slate-300 hover:text-white font-mono text-sm transition-all duration-300">${skill}</div>`
    )
    .join("");

  return `
    <div class="bg-slate-800/50 border border-slate-700/50 hover:border-slate-600/50 rounded-2xl p-6 transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden group">
      <div class="absolute top-0 left-0 right-0 h-1 bg-${
        skillCategory.color
      } transform scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100"></div>
      <div class="mb-4">
        ${icons[skillCategory.category]}
        <h3 class="text-xl font-bold text-${skillCategory.color} font-mono">
          ${skillCategory.category}
        </h3>
      </div>
      <div class="space-y-2">
        ${skillItems}
      </div>
    </div>
  `;
}
