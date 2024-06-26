import { toDoListInterface } from "../Interface/GlobalInterface";

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

  return (
    <>
      <table>
        <tr>
          <th>Serial</th>
          <th>Task Name</th>
          <th>Priority</th>
          <th>To-Do</th>
          <th>In-Progress</th>
          <th>Done</th>
          <th>Action</th>
        </tr>

        {Todolist.map((item, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.taskName}</td>
              <td>{item.taskPriority}</td>
              <td>
                <input
                  type="checkbox"
                  checked={item.taskStatus === "To-Do"}
                  onChange={() => onChangeHandleofCheckBox(index, "To-Do")}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={item.taskStatus === "In-Progress"}
                  onChange={() =>
                    onChangeHandleofCheckBox(index, "In-Progress")
                  }
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={item.taskStatus === "Done"}
                  onChange={() => onChangeHandleofCheckBox(index, "Done")}
                />
              </td>
              <td>
                <button onClick={() => onClickHandlerButton(index)}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default ViewToDoList;
