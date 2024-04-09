import fileImage from "../assets/no-projects.png";

export default function EmptyState({ handleCreateProject }) {
  return (
    <div className="px-5 py-4 mt-[8rem] flex flex-col justify-center items-center m-auto">
      <img src={fileImage} className="w-16 h-auto mb-4" />
      <p className="mb-4 text-xl font-bold text-stone-500">
        No Project Selected
      </p>
      <p className="mb-5 text-md font-normal text-stone-400">
        Select a project or get started with a new one.
      </p>
      <button
        className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
        onClick={() => handleCreateProject(true)}
      >
        Create new project
      </button>
    </div>
  );
}
