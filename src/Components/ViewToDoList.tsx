import { useState } from "react";
import { toDoListInterface } from "../Interface/GlobalInterface";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { globalPriorityList } from "./GlovalList";

interface Props {
  Todolist: toDoListInterface[];
  setglobalToDOList: (props: toDoListInterface[]) => void;
}

const ViewToDoList = ({ Todolist, setglobalToDOList }: Props) => {
  const onChangeHandleofCheckBox = (
    index: number,
    statusType: "To-Do" | "In-Progress" | "Done"
  ) => {
    const tempState = [...Todolist];
    tempState[index].taskStatus = statusType;
    setglobalToDOList(tempState);
  };

  const onClickHandlerButton = (index: number) => {
    setglobalToDOList(Todolist.filter((x, idx) => idx !== index));
  };

  const [getEditAbleIndex, setEditAbleIndex] = useState<number>(-1);

  const onTextInputChangeHandler = (text: string, index: number) => {
    const tempList = [...Todolist];
    tempList[index].taskName = text;
    setglobalToDOList(tempList);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setEditAbleIndex(-1);
    }
  };

  const setSetpriorityHandler = (text: string, index: number) => {
    const tempList = [...Todolist];
    tempList[index].taskPriority = text;
    setglobalToDOList(tempList);
  };

  return (
    <div className="overflow-x-auto space-y-4 mx-auto max-w-4xl shadow-md rounded-lg mt-4">
      <table className="min-w-full bg-white border-gray-300">
        <thead className="bg-blue-100">
          <tr className="border">
            <th className="text-center">SL</th>
            <th className="text-center">Task Name</th>
            <th className="text-center">Priority</th>
            <th className="text-center">To-Do</th>
            <th className="text-center">In-Progress</th>
            <th className="text-center">Done</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {Todolist.map((item, index) => {
            return (
              <tr
                key={index}
                className={`border ${
                  item.taskStatus === "To-Do"
                    ? "bg-red-50"
                    : item.taskStatus === "In-Progress"
                    ? "bg-green-50"
                    : "bg-yellow-50"
                }`}
              >
                <td className="text-center border">{index + 1}</td>
                <td className="text-left text-sm border">
                  {" "}
                  {index === getEditAbleIndex ? (
                    <input
                      className="mt-1 block w-full p-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      onChange={(e) =>
                        onTextInputChangeHandler(e.target.value, index)
                      }
                      onBlur={() => setEditAbleIndex(-1)}
                      onKeyDown={handleKeyDown}
                      type="text"
                      value={item.taskName}
                    />
                  ) : (
                    item.taskName
                  )}
                </td>
                <td className="text-center border">
                  {index === getEditAbleIndex ? (
                    <select
                      value={item.taskPriority}
                      onChange={(e) =>
                        setSetpriorityHandler(e.target.value, index)
                      }
                      onBlur={() => setEditAbleIndex(-1)}
                      className="mt-1 block w-full p-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      {globalPriorityList.map((opn) => (
                        <option key={opn.value} value={opn.value}>
                          {opn.level}
                        </option>
                      ))}
                    </select>
                  ) : (
                    item.taskPriority
                  )}
                </td>
                <td className="text-center border">
                  <input
                    type="checkbox"
                    checked={item.taskStatus === "To-Do"}
                    onChange={() => onChangeHandleofCheckBox(index, "To-Do")}
                  />
                </td>
                <td className="text-center border">
                  <input
                    type="checkbox"
                    checked={item.taskStatus === "In-Progress"}
                    onChange={() =>
                      onChangeHandleofCheckBox(index, "In-Progress")
                    }
                  />
                </td>
                <td className="text-center border">
                  <input
                    type="checkbox"
                    checked={item.taskStatus === "Done"}
                    onChange={() => onChangeHandleofCheckBox(index, "Done")}
                  />
                </td>
                <td className="text-center border">
                  <button
                    className="px-2 py-1 text-red-500 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    onClick={() => onClickHandlerButton(index)}
                  >
                    <FaTrashAlt />
                  </button>
                  <button
                    className="px-2 py-1 text-blue-500 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    onClick={() => setEditAbleIndex(index)}
                  >
                    <FaEdit />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ViewToDoList;
