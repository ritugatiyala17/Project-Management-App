import Button from "./Button";

export default function Sidebar({
  projects,
  handleProjectSelect,
  handleCreateProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 md:w-72 px-8 py-16 bg-stone-900 text-stone-50 rounded-r-xl overflow-y-auto">
      <h2 className="mb-8 md:text-xl font-bold uppercase text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={handleCreateProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClasses =
            "w-full text-left px-2 py-2 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";
          if (project.id === selectedProjectId) {
            cssClasses += " text-stone-200 bg-stone-800";
          } else {
            cssClasses += " text-stone-400";
          }
          return (
            <li key={project.id}>
              <button
                className={cssClasses}
                onClick={() => handleProjectSelect(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
