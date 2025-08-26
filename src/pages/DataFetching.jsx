import { useState, useEffect } from "react";
import viteLogo from "/vite.svg";
import reactLogo from "/react.svg";
import MultiStepForm from "../components/MultiStepForm";
import Modal from "../components/Modal";

function DataFetching() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch users data
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Function to refetch users
  const refetchUsers = () => {
    setUsers([]);
    setLoading(true);
    setError(null);

    // Simulate a delay for demonstration
    setTimeout(async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <div className="flex justify-center space-x-8 mb-8">
            <a
              href="https://vite.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={viteLogo} className="logo h-24" alt="Vite logo" />
            </a>
            <a
              href="https://react.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={reactLogo}
                className="logo react h-24"
                alt="React logo"
              />
            </a>
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
            React + Vite + Tailwind CSS
          </h1>
          <p className="text-lg text-gray-600 mb-10">
            Demonstrating React concepts: useState, useEffect, and data fetching
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 mb-10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold text-gray-800">
              Counter Example
            </h2>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setCount((count) => count + 1)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-lg transition duration-200 transform hover:scale-105"
              >
                Count is {count}
              </button>
              <button
                onClick={() => setCount(0)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg transition duration-200"
              >
                Reset
              </button>
            </div>
          </div>
          <p className="text-gray-600">
            This demonstrates the{" "}
            <code className="bg-gray-100 px-2 py-1 rounded">useState</code> hook
            for managing local component state.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 mb-10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold text-gray-800">
              Data Fetching Example
            </h2>
            <button
              onClick={refetchUsers}
              disabled={loading}
              className={`font-bold py-2 px-6 rounded-lg transition duration-200 ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-700 text-white transform hover:scale-105"
              }`}
            >
              {loading ? "Loading..." : "Refresh Users"}
            </button>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-100 border-l-4 border-red-500 text-red-700">
              <p>Error: {error}</p>
            </div>
          )}

          {loading ? (
            <div className="flex justify-center items-center h-32">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
            </div>
          ) : users.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {users.map((user) => (
                <div
                  key={user.id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
                >
                  <h3 className="font-bold text-lg text-gray-900">
                    {user.name}
                  </h3>
                  <p className="text-indigo-600">{user.email}</p>
                  <p className="text-gray-600 text-sm mt-1">{user.phone}</p>
                  <p className="text-gray-500 text-sm mt-2">{user.website}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">
                No users found. Click "Refresh Users" to load data.
              </p>
            </div>
          )}

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-bold text-gray-800 mb-2">
              React Concepts Demonstrated:
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>
                <code className="bg-gray-100 px-2 py-1 rounded">useEffect</code>{" "}
                for side effects (data fetching)
              </li>
              <li>
                <code className="bg-gray-100 px-2 py-1 rounded">useState</code>{" "}
                for managing loading and error states
              </li>
              <li>Conditional rendering based on state</li>
              <li>Mapping over data to render lists</li>
              <li>Event handling with async functions</li>
            </ul>
          </div>
        </div>

        <MultiStepForm />

        <div className="mt-10 text-center text-gray-500 text-sm">
          <p>
            Edit{" "}
            <code className="bg-gray-100 px-2 py-1 rounded">src/App.jsx</code>{" "}
            and save to test HMR
          </p>
        </div>
      </div>
    </div>
  );
}

export default DataFetching;
