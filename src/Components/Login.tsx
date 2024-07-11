const Login = () => {
  return (
    <div className="w-auto bg-white">
      <form className="space-y-2 max-w-lg mx-auto p-6 rounded-lg">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            User Name
          </label>
          <input
            type="email"
            className="mt-1 block w-full p-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          ></input>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            className="mt-1 block w-full p-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          ></input>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="submit"
            className="px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
