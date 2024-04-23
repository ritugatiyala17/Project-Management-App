import Tasks from "./Tasks";

export default function Project({
  selectedProject,
  tasks,
  handleAddTaskToSelectedProject,
  handleClearTaskToSelectedProject,
  onDelete,
  handleCompleteTask,
  handleUndoTask,
}) {
  const formattedDate = new Date(selectedProject.dueDate).toLocaleDateString(
    `en-US`,
    {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {selectedProject.title}
          </h1>
          <button
            className="text-stone-600 hover:text-red-600 hover:font-medium"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
        <p className="text-stone-600 whitespace-pre-wrap">
          {selectedProject.description}
        </p>
        <p className="text-stone-400">{formattedDate}</p>
      </header>
      <Tasks
        tasks={tasks}
        handleAddTask={handleAddTaskToSelectedProject}
        handleClearTask={handleClearTaskToSelectedProject}
        handleCompleteTask={handleCompleteTask}
        handleUndoTask={handleUndoTask}
      />
    </div>
  );
}
