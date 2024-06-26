export interface toDoListInterface {
  taskName: string;
  taskPriority: string;
  taskStatus: "To-Do" | "In-Progress" | "Done";
}

export interface priorityListInterface {
  value: "High" | "Mid" | "Low";
  level: "High" | "Mid" | "Low";
}

export interface statusListInterface {
  value: "To-Do" | "In-Progress " | "Done";
  level: "To-Do" | "In-Progress " | "Done";
}
