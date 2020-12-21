type componentType = {
  name: string;
  done: boolean;
  tasks: componentType[];
};

class Project {
  name!: string;

  tasks!: componentType[];
}

export type { componentType };
export default Project;
