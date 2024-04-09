import { useState } from "react";

const CreateProject = ({ handleSubmitProject }) => {
  const [project, setProject] = useState({
    title: "",
    description: "",
    dueDate: "2024-03-31",
    tasks: [],
  });
  return (
    <form className="mx-auto" onSubmit={(e) => e.preventDefault()}>
      <label className="block text-sm font-medium text-gray-700">Title:</label>
      <input
        type="text"
        name="title"
        placeholder="Project Title"
        required
        className="block w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        value={project.title}
        onChange={(e) => setProject({ ...project, title: e.target.value })}
      />

      <label className="block mt-4 text-sm font-medium text-gray-700">
        Description:
      </label>
      <input
        type="text"
        name="description"
        placeholder="Project Description"
        required
        className="block w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        value={project.description}
        onChange={(e) =>
          setProject({ ...project, description: e.target.value })
        }
      />

      <label className="block mt-4 text-sm font-medium text-gray-700">
        Due Date:
      </label>
      <input
        type="date"
        name="dueDate"
        required
        className="block w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        value={project.dueDate}
        onChange={(e) => setProject({ ...project, dueDate: e.target.value })}
      />

      {/* <button
        type="submit"
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={() => handleSubmitProject(project)}
      >
        Cancel
      </button> */}
      <button
        type="submit"
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={() => handleSubmitProject(project)}
      >
        Save
      </button>
    </form>
  );
};

export default CreateProject;
