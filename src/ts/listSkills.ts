import type { SkillCategory } from "../types/skill";
import { createSkillCard } from "../components/skill-card";
import skillsData from "../data/skills.json";

export function listSkills() {
  const skills = skillsData as SkillCategory[];
  const skillsContainer = document.getElementById("skills-list");

  if (!skillsContainer) {
    console.error("Skills list container not found");
    return;
  }

  const skillsHTML = skills
    .map((skillCategory) => createSkillCard(skillCategory))
    .join("");

  skillsContainer.innerHTML = skillsHTML;
}
