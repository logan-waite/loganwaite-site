export type Project = {
  github: string;
  link: string;
  name: string;
  description: string;
}

export interface PortfolioState {
  projects: Project[];
}

export interface PortfolioGetters {
  allProjects(state: PortfolioState): Project[];
}
