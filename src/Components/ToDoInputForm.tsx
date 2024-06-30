import { useState } from "react";
import { globalPriorityList } from "./GlovalList";
import { toDoListInterface } from "../Interface/GlobalInterface";

interface Props {
  setglobalToDOList: (props: toDoListInterface) => void;
}

const ToDoInputForm = ({ setglobalToDOList }: Props) => {
  const [taskName, setTaskName] = useState("");
  const [priority, setpriority] = useState("High");

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
      <form
        onSubmit={(e) => handleOnSubmit(e)}
        className="border space-y-2 max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md"
      >
        <div>
          <h2 className="border text-2xl font-bold mb-6 text-center">
            To Do List
          </h2>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Task Name
          </label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onChange={(e) => setTaskName(e.target.value)}
          ></input>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Set Priority
          </label>
          <select
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onChange={(e) => setpriority(e.target.value)}
          >
            {globalPriorityList.map((item) => (
              <option key={item.value} value={item.value}>
                {item.level}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default ToDoInputForm;
