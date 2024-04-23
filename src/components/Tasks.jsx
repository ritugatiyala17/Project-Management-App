import { useState, useRef } from "react";

export default function Tasks({
  tasks,
  handleAddTask,
  handleClearTask,
  handleCompleteTask,
  handleUndoTask,
}) {
  const [task, setTask] = useState({
    id: Math.random(),
    title: "",
    isComplete: false,
  });

  const completedTasks = tasks.filter((task) => task.isComplete);
  const todoTasks = tasks.filter((task) => !task.isComplete);

  function addTask(t) {
    handleAddTask(t);
    setTask({
      id: Math.random(),
      title: "",
      isComplete: false,
    });
  }

  function formattedDate(date) {
    return new Date(date).toLocaleString(`en-US`, {
      timezone: "UTC+05:30",
      year: "numeric",
      month: "short",
      day: "numeric",
      minute: "numeric",
      hour: "numeric",
    });
  }
  // const taskRef = useRef();
  // function handleSaveTask() {
  //   const enteredTask = taskRef.current.value;
  //   handleAddTask({
  //     id: Math.random(),
  //     title: enteredTask,
  //     createdAt: new Date(),
  //   });
  // }
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <div className="flex items-center gap-4">
        <input
          // ref={taskRef}
          type="text"
          // className="border-stone-200 bg-stone-200 text-black focus-visible:border-stone-300 rounded w-[50%] p-1"
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
        ></input>
        <button
          className="ml-4 text-stone-700 hover:text-stone-950 hover:underline"
          onClick={() => addTask(task)}
          // onClick={handleSaveTask}
        >
          Add Task
        </button>
      </div>
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          The project does not have any tasks yet.
        </p>
      )}

      {todoTasks.length > 0 && (
        <ul
          className="mt-8"
          // className="p-4 mt-8 rounded-md bg-stone-200"
        >
          {todoTasks.map((task) => {
            return (
              <li
                key={task.id}
                className="px-4 py-2 mb-3 rounded-lg bg-stone-200 text-black w-full flex justify-between items-start"
                // className="flex justify-between my-4"
              >
                <div className="flex flex-col items-start">
                  <span>{task.title}</span>
                  <span className="text-xs font-light text-stone-500">
                    {formattedDate(task.createdAt)}
                  </span>
                </div>

                <div>
                  <button
                    className="text-sm text-stone-700 hover:text-green-700 hover:font-medium mr-4"
                    onClick={() => handleCompleteTask(task)}
                  >
                    Complete
                  </button>
                  <button
                    className="text-sm text-stone-700 hover:text-red-500 hover:font-medium"
                    onClick={() => handleClearTask(task)}
                  >
                    Clear
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      {completedTasks.length > 0 && (
        <>
          <h2 className="font-medium text-stone-600 mt-8 mb-4">Completed</h2>
          <ul>
            {completedTasks.map((task) => {
              return (
                <li
                  key={task.id}
                  className="px-4 py-2 mb-3 rounded-lg bg-stone-100 text-black w-full flex justify-between items-center"
                  // className="flex justify-between my-4"
                >
                  <div className="flex flex-col">
                    <span className="line-through text-stone-600 font-extralight">
                      {task.title}
                    </span>
                    <span className="text-xs font-extralight text-stone-500">
                      {formattedDate(task.modifiedAt)}
                    </span>
                  </div>

                  <button
                    className="text-sm text-stone-700 hover:text-red-500 hover:font-medium"
                    onClick={() => handleUndoTask(task)}
                  >
                    Undo
                  </button>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </section>
  );
}
