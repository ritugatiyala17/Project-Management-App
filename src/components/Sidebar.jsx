export default function Sidebar({
  projects,
  handleProjectSelect,
  handleCreateProject,
}) {
  return (
    <div className="px-5 py-4 h-[95vh] bg-black text-white border-r-gray-200 border-r-2 rounded-tr-lg justify-start fixed bottom-0">
      <h1 className="text-2xl my-5 font-extrabold uppercase">Your Projects</h1>
      <button
        className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
        onClick={() => handleCreateProject(true)}
      >
        + Add Project
      </button>

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
    </div>
  );
}
