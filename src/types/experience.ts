export interface Role {
  title: string;
  department: string;
}

export interface Experience {
  company: string;
  link?: string;
  startDate: string;
  endDate: string;
  roles: Role[];
}
