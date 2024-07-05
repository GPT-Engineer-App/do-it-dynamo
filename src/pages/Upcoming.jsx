import React from "react";

const Upcoming = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Upcoming</h1>
      {/* Add Task Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Add a task"
          className="border rounded p-2 w-full"
        />
        <button className="mt-2 p-2 bg-blue-500 text-white rounded">Add Task</button>
      </div>
      {/* Task List */}
      <ul>
        <li className="flex items-center mb-2">
          <input type="checkbox" className="mr-2" />
          <span>Task 1</span>
          <span className="ml-auto text-gray-500">Due Date</span>
        </li>
        <li className="flex items-center mb-2">
          <input type="checkbox" className="mr-2" />
          <span>Task 2</span>
          <span className="ml-auto text-gray-500">Due Date</span>
        </li>
      </ul>
    </div>
  );
};

export default Upcoming;