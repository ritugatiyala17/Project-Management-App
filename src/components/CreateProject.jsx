import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const CreateProject = ({ handleSubmitProject }) => {
  const [project, setProject] = useState({
    title: "",
    description: "",
    dueDate: "2024-03-31",
    tasks: [],
  });
  return (
    <form
      className="sm:w-[25rem] md:w-[35rem] mt-16"
      onSubmit={(e) => e.preventDefault()}
    >
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <Button type="submit" onClick={() => handleSubmitProject(project)}>
            Save
          </Button>
        </li>
      </menu>
      <Input
        label="Title"
        textarea={false}
        type="text"
        required
        value={project.title}
        onChange={(e) => setProject({ ...project, title: e.target.value })}
      />
      <Input
        label="Description"
        textarea={true}
        type="text"
        required
        value={project.description}
        onChange={(e) =>
          setProject({ ...project, description: e.target.value })
        }
      />
      <Input
        label="Due Date"
        textarea={false}
        type="date"
        required
        value={project.dueDate}
        onChange={(e) => setProject({ ...project, dueDate: e.target.value })}
      />
      {/* <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercase text-stone-500">
          Title
        </label>
        <input
          type="text"
          name="title"
          required
          className="w-full p-1 mt-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          value={project.title}
          onChange={(e) => setProject({ ...project, title: e.target.value })}
        />
      </p>
      <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercase text-stone-500">
          Description
        </label>
        <textarea
          type="text"
          name="description"
          required
          className="w-full p-1 mt-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          value={project.description}
          onChange={(e) =>
            setProject({ ...project, description: e.target.value })
          }
        />
      </p>
      <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercase text-stone-500">
          Due Date
        </label>
        <input
          type="date"
          name="dueDate"
          required
          className="w-full p-1 mt-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          value={project.dueDate}
          onChange={(e) => setProject({ ...project, dueDate: e.target.value })}
        />
      </p> */}

      {/* <button
        type="submit"
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={() => handleSubmitProject(project)}
      >
        Cancel
      </button> */}
      {/* <button
        type="submit"
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={() => handleSubmitProject(project)}
      >
        Save
      </button> */}
    </form>
  );
};

export default CreateProject;
