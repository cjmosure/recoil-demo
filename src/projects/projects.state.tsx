import { atom, selector } from "recoil";
import uniq from "lodash/uniq";

export interface Project {
  name: string;
  status: "active" | "archived";
  tags: string[];
  description: string;
}

export const projectsState = atom<Project[]>({
  key: "projects",
  default: [
    {
      name: "Example Project 1",
      status: "active",
      tags: ["example", "project"],
      description: "This is an example project",
    },
    {
      name: "Example Project 2",
      status: "active",
      tags: ["example", "project", "new"],
      description: "This is an another example project",
    },
  ],
});

export const projectTags = selector({
  key: "ProjectTags",
  get: ({ get }) => {
    const projects = get(projectsState);
    return uniq(projects.map((project) => project.tags).flat(1));
  },
});

export interface ProjectStatus {
  selectedProject: Project | null;
}

export const projectStatus = atom<ProjectStatus>({
  key: "projectStatus",
  default: {
    selectedProject: null,
  },
});
