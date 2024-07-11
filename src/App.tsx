import CreateToDo from "./Components/CreateToDo";
import Login from "./Components/Login";
import WindowWidth from "./Components/WindowWidth";

const App = () => {
  return (
    <>
      <div className="bg-gray-100 p-8">
        <WindowWidth />
      </div>
      <div className="bg-gray-100 p-8">
        <CreateToDo />
      </div>

      <div className="bg-gray-100 p-8">
        <Login />
      </div>
    </>
  );
};

export default App;
