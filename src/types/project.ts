export interface Project {
  id: string;
  name: string;
  image: string | null;
  description: string;
  technologies: string[];
  github: string | null;
  demo: string | null;
}

export interface ProjectCategory {
  category: string;
  categoryDesc: string;
  color: string;
  projects: Project[];
}
