import { useState } from "react";
export default function Tasks({ taskList, handleAddTask, handleClearTask }) {
  const [task, setTask] = useState({
    id: taskList.length + 1,
    title: "",
    type: "Yoga",
    createdAt: new Date(),
  });
  function addTask(t) {
    handleAddTask(t);
    setTask({
      id: taskList.length + 1,
      title: "",
      type: "Yoga",
      createdAt: new Date(),
    });
  }
  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          className="border-stone-200 bg-stone-200 text-black focus-visible:border-stone-300 rounded w-[50%] p-1"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
        ></input>
        <button className="ml-4 text-stone-700" onClick={() => addTask(task)}>
          Add Task
        </button>
      </div>

      <div>
        {!taskList && (
          <p className="mt-4">The project does not have any tasks yet.</p>
        )}
        {taskList &&
          taskList.map((task) => {
            return (
              <div
                key={task.id}
                className="px-5 py-4 mb-3 rounded-lg bg-stone-200 text-black w-full flex justify-between items-center"
              >
                <div>{task.title}</div>
                <button
                  className="text-stone-600"
                  onClick={() => handleClearTask(task)}
                >
                  Clear
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}
