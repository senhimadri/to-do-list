import { useState } from "react";
import { toDoListInterface } from "../Interface/GlobalInterface";
import ToDoInputForm from "./ToDoInputForm";
import ViewToDoList from "./ViewToDoList";

const CreateToDo = () => {
  const [globalToDOList, setglobalToDOList] = useState<toDoListInterface[]>([]);

  const Proper = (Todo: toDoListInterface) => {
    setglobalToDOList((previdata) => {
      const newArr = [...previdata, Todo];
      return newArr;
    });
  };

  console.log("View State", globalToDOList);

  return (
    <div>
      <ToDoInputForm setglobalToDOList={Proper} />

      <ViewToDoList
        setglobalToDOList={setglobalToDOList}
        Todolist={globalToDOList}
      />
    </div>
  );
};

export default CreateToDo;
