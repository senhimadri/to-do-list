import {
  priorityListInterface,
  statusListInterface,
  toDoListInterface,
} from "../Interface/GlobalInterface";

export const globalToDoList: toDoListInterface[] = [];

export const globalPriorityList: priorityListInterface[] = [
  { value: "High", level: "High" },
  { value: "Mid", level: "Mid" },
  { value: "Low", level: "Low" },
];

export const globalStatusList: statusListInterface[] = [
  { value: "To-Do", level: "To-Do" },
  { value: "In-Progress ", level: "To-Do" },
  { value: "Done", level: "Done" },
];
