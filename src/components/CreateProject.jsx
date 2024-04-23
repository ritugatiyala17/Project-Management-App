import { useState, useRef } from "react";
import Input from "./Input";
import Button from "./Button";
import Modal from "./Modal";

const CreateProject = ({ onSave, onCancel }) => {
  // const [project, setProject] = useState({
  //   title: "",
  //   description: "",
  //   dueDate: "2024-03-31",
  //   tasks: [],
  // });

  // Refs

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();

  function handleSaveProject() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    // Validation rules

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      // Show error modal
      modal.current.open();
      return;
    }
    onSave({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="mb-4 text-stone-600">
          Oops ... Looks like you forgot to enter a value.
        </p>
        <p className="mb-4 text-stone-600">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <Button onClick={handleSaveProject}>Save</Button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>
      </div>
    </>
    // <form
    //   className="sm:w-[25rem] md:w-[35rem] mt-16"
    //   onSubmit={(e) => e.preventDefault()}
    // >
    //   <menu className="flex items-center justify-end gap-4 my-4">
    //     <li>
    //       <button className="text-stone-800 hover:text-stone-950">
    //         Cancel
    //       </button>
    //     </li>
    //     <li>
    //       <Button type="submit" onClick={handleSaveProject}>
    //         Save
    //       </Button>
    //     </li>
    //   </menu>
    //   <Input ref={title} label="Title" textarea={false} type="text" required />
    //   {/* <Input
    //     label="Title"
    //     textarea={false}
    //     type="text"
    //     required
    //     value={project.title}
    //     onChange={(e) => setProject({ ...project, title: e.target.value })}
    //   /> */}
    //   <Input
    //     ref={description}
    //     label="Description"
    //     textarea={true}
    //     type="text"
    //     required
    //   />
    //   {/* <Input
    //     label="Description"
    //     textarea={true}
    //     type="text"
    //     required
    //     value={project.description}
    //     onChange={(e) =>
    //       setProject({ ...project, description: e.target.value })
    //     }
    //   /> */}
    //   <Input
    //     ref={dueDate}
    //     label="Due Date"
    //     textarea={false}
    //     type="date"
    //     required
    //   />
    //   {/* <Input
    //     label="Due Date"
    //     textarea={false}
    //     type="date"
    //     required
    //     value={project.dueDate}
    //     onChange={(e) => setProject({ ...project, dueDate: e.target.value })}
    //   /> */}
    //   {/* <p className="flex flex-col gap-1 my-4">
    //     <label className="text-sm font-bold uppercase text-stone-500">
    //       Title
    //     </label>
    //     <input
    //       type="text"
    //       name="title"
    //       required
    //       className="w-full p-1 mt-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
    //       value={project.title}
    //       onChange={(e) => setProject({ ...project, title: e.target.value })}
    //     />
    //   </p>
    //   <p className="flex flex-col gap-1 my-4">
    //     <label className="text-sm font-bold uppercase text-stone-500">
    //       Description
    //     </label>
    //     <textarea
    //       type="text"
    //       name="description"
    //       required
    //       className="w-full p-1 mt-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
    //       value={project.description}
    //       onChange={(e) =>
    //         setProject({ ...project, description: e.target.value })
    //       }
    //     />
    //   </p>
    //   <p className="flex flex-col gap-1 my-4">
    //     <label className="text-sm font-bold uppercase text-stone-500">
    //       Due Date
    //     </label>
    //     <input
    //       type="date"
    //       name="dueDate"
    //       required
    //       className="w-full p-1 mt-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
    //       value={project.dueDate}
    //       onChange={(e) => setProject({ ...project, dueDate: e.target.value })}
    //     />
    //   </p> */}

    //   {/* <button
    //     type="submit"
    //     className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    //     onClick={() => handleSubmitProject(project)}
    //   >
    //     Cancel
    //   </button> */}
    //   {/* <button
    //     type="submit"
    //     className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    //     onClick={() => handleSubmitProject(project)}
    //   >
    //     Save
    //   </button> */}
    // </form>
  );
};

export default CreateProject;
