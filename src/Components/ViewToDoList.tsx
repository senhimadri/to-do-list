import { useState } from "react";
import { toDoListInterface } from "../Interface/GlobalInterface";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

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

  return (
    <div className="overflow-x-auto space-y-4 mx-auto max-w-4xl shadow-md rounded-lg mt-4">
      <table className="min-w-full bg-white border border-gray-300 ">
        <thead className="bg-gray-50">
          <tr>
            <th className="text-center">Serial</th>
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
              <tr key={index}>
                <td className="text-center">{index + 1}</td>
                <td className="text-center">
                  {" "}
                  {index === getEditAbleIndex ? (
                    <input
                      className="border"
                      onChange={(e) =>
                        onTextInputChangeHandler(e.target.value, index)
                      }
                      onBlur={() => setEditAbleIndex(-1)}
                      type="text"
                      value={item.taskName}
                    />
                  ) : (
                    item.taskName
                  )}
                </td>
                <td className="text-center">{item.taskPriority}</td>
                <td className="text-center">
                  <input
                    type="checkbox"
                    checked={item.taskStatus === "To-Do"}
                    onChange={() => onChangeHandleofCheckBox(index, "To-Do")}
                  />
                </td>
                <td className="text-center">
                  <input
                    type="checkbox"
                    checked={item.taskStatus === "In-Progress"}
                    onChange={() =>
                      onChangeHandleofCheckBox(index, "In-Progress")
                    }
                  />
                </td>
                <td className="text-center">
                  <input
                    type="checkbox"
                    checked={item.taskStatus === "Done"}
                    onChange={() => onChangeHandleofCheckBox(index, "Done")}
                  />
                </td>
                <td className="text-center">
                  <button
                    className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    onClick={() => onClickHandlerButton(index)}
                  >
                    <FaTrashAlt />
                  </button>
                  <button
                    className="px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
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
