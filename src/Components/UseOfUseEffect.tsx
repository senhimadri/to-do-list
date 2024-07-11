import { useState, useEffect } from "react";

const UseOfUseEffect = () => {
  const [resourceType, setResourceType] = useState("post");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);

  return (
    <div>
      <h1> UseEffect Implementation</h1>
      <button
        className="px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        onClick={() => setResourceType("posts")}
      >
        Posts
      </button>
      <button
        className="px-4 py-1 bg-red-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        onClick={() => setResourceType("users")}
      >
        Users
      </button>
      <button
        className="px-4 py-1 bg-green-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        onClick={() => setResourceType("comments")}
      >
        Comments
      </button>

      <h3>{resourceType}</h3>

      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </div>
  );
};

export default UseOfUseEffect;
