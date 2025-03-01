export interface Technology {
  name: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: Technology[];
  logo?: string;
  link?: string;
}
