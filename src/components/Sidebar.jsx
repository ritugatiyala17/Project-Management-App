import Button from "./Button";

export default function Sidebar({
  projects,
  handleProjectSelect,
  handleCreateProject,
}) {
  return (
    <aside className="w-1/3 md:w-72 px-8 py-16 bg-stone-900 text-stone-50 rounded-r-xl">
      <h1 className="mb-8 md:text-xl font-bold uppercase text-stone-200">
        Your Projects
      </h1>
      <Button onClick={handleCreateProject}>+ Add Project</Button>
      <section className="mt-11">
        {projects.map((pr) => {
          return (
            <div
              key={pr.id}
              onClick={() => handleProjectSelect(pr.id)}
              className="px-4 py-3 rounded-md bg-stone-900 text-stone-100 hover:bg-stone-600 hover:text-stone-300 cursor-pointer"
            >
              {pr.title}
            </div>
          );
        })}
      </section>
    </aside>
  );
}
