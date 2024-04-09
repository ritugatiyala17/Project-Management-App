import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Project from "./components/Project";

import backgroundImage from "./assets/wallpaperflare.com_wallpaper_hd.jpg";
function App() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Learning React",
      description: "Learn react from the group up",
      dueDate: "Dec 29, 2024",
      tasks: [],
    },
    {
      id: 2,
      title: "Fitness",
      description:
        "All my experiences about health fitness and journalling my journey ",
      dueDate: "Nov 15, 2024",
      tasks: [
        {
          id: 1,
          type: "Gym",
          title: "Arms Workout",
          createdAt: new Date(),
        },
        {
          id: 2,
          type: "Yoga",
          title: "Legs Workout",
          createdAt: new Date(),
        },
        {
          id: 3,
          type: "Yoga",
          title: "Ashtanga",
          createdAt: new Date(),
        },
      ],
    },
  ]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [creatingProject, setCreatingProject] = useState(false);
  function handleProjectSelect(id) {
    setSelectedProject(() => {
      return projects.find((pr) => pr.id === id) || null;
    });
    handleCreateProject(false);
  }
  function handleCreateProject(isCreate) {
    setCreatingProject(isCreate);
  }
  function handleAddTaskToSelectedProject(task) {
    setProjects((prevState) => {
      let projectsList = Array.from(prevState);

      const currentProject = prevState.findIndex(
        (pr) => pr.id === selectedProject.id
      );
      if (currentProject > -1) {
        projectsList[currentProject].tasks.push(task);
      }
      return projectsList;
    });
    setSelectedProject((prevState) => {
      return projects.find((pr) => pr.id === prevState.id) || null;
    });
  }
  function handleClearTaskToSelectedProject(task) {
    setProjects((prevState) => {
      let projectsList = Array.from(prevState);

      const currentProject = prevState.findIndex(
        (pr) => pr.id === selectedProject.id
      );
      if (currentProject > -1) {
        const currentTask = projectsList[currentProject].tasks.findIndex(
          (t) => t.id === task.id
        );
        if (currentTask > -1) {
          projectsList[currentProject].tasks.splice(currentTask, 1);
        }
      }
      return projectsList;
    });
    setSelectedProject((prevState) => {
      return projects.find((pr) => pr.id === prevState.id) || null;
    });
  }
  function handleSubmitProject(project) {
    setProjects((prevState) => {
      let projectsList = Array.from(prevState);
      projectsList.push({ id: prevState.length + 1, ...project });
      setSelectedProject({ id: prevState.length + 1, ...project });
      return projectsList;
    });
    handleCreateProject(false);
  }
  function handleProjectDelete(project) {
    setProjects((prevState) => {
      let projectsList = Array.from(prevState);
      const currentProject = prevState.findIndex((pr) => pr.id === project.id);
      if (currentProject > -1) {
        projectsList.splice(currentProject, 1);
      }
      setSelectedProject(null);
      return projectsList;
    });
  }
  return (
    <>
      <div
        className="flex h-[100vh] bg-cover bg-center"
        // style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="flex-none w-[20%]">
          <Sidebar
            projects={projects}
            handleProjectSelect={handleProjectSelect}
            handleCreateProject={handleCreateProject}
          />
        </div>
        <div className="flex-auto w-[70%] max-w-[70%]">
          <Project
            selectedProject={selectedProject}
            creatingProject={creatingProject}
            handleCreateProject={handleCreateProject}
            handleAddTaskToSelectedProject={handleAddTaskToSelectedProject}
            handleClearTaskToSelectedProject={handleClearTaskToSelectedProject}
            handleSubmitProject={handleSubmitProject}
            handleProjectDelete={handleProjectDelete}
          />
        </div>
      </div>
    </>
  );
}

export default App;
