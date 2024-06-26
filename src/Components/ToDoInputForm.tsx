import { useState } from "react";
import { globalPriorityList } from "./GlovalList";
import { toDoListInterface } from "../Interface/GlobalInterface";

interface Props {
  setglobalToDOList: (props: toDoListInterface) => void;
}

const ToDoInputForm = ({ setglobalToDOList }: Props) => {
  const [taskName, setTaskName] = useState("");
  const [priority, setpriority] = useState("Low");

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setglobalToDOList({
      taskName: taskName,
      taskPriority: priority,
      taskStatus: "To-Do",
    });
  };

  return (
    <>
      <form onSubmit={(e) => handleOnSubmit(e)}>
        <label>Task Name</label>
        <input
          type="text"
          className="border"
          onChange={(e) => setTaskName(e.target.value)}
        ></input>{" "}
        <br />
        <label>Set Priority</label>
        <select
          className="border"
          onChange={(e) => setpriority(e.target.value)}
        >
          {globalPriorityList.map((item) => (
            <option key={item.value} value={item.value}>
              {item.level}
            </option>
          ))}
        </select>
        <br />
        <button type="submit" className="border">
          Submit
        </button>
      </form>
    </>
  );
};

export default ToDoInputForm;
