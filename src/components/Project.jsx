import Tasks from "./Tasks";

export default function Project({
  selectedProject,
  handleAddTaskToSelectedProject,
  handleClearTaskToSelectedProject,
  handleProjectDelete,
}) {
  return (
    <div className="items-start mt-16">
      <div className="flex justify-between items-start">
        <h1 className="text-2xl mb-5">{selectedProject.title}</h1>
        <button
          className="text-stone-600 hover:text-red-600 hover:text-lg"
          onClick={() => handleProjectDelete(selectedProject)}
        >
          Delete
        </button>
      </div>

      <h3 className="text-lg text-stone-700">{selectedProject.description}</h3>
      <h3 className="text-sm text-stone-400">{selectedProject.dueDate}</h3>
      <section className="mt-5">
        <h4 className=" border-t-2 border-t-stone-300 text-lg mb-3 pt-3">
          Tasks
        </h4>
        {/* <section className="flex flex-wrap">
              <p>List of tasks</p>
              <Card />
            </section> */}
        <section className="">
          <Tasks
            taskList={selectedProject.tasks}
            handleAddTask={handleAddTaskToSelectedProject}
            handleClearTask={handleClearTaskToSelectedProject}
          />
        </section>
      </section>
    </div>
  );
}
