// This is a regular code comment [src/assets/no-projects.png]
import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Project from "./components/Project";
import CreateProject from "./components/CreateProject";
import NoProjectSelected from "./components/NoProjectSelected";

import backgroundImage from "./assets/bg-1.jpeg";
function App() {
  /**
   * Code Refactor Start
   */

  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [
      {
        id: 1,
        title: "Learning React",
        description: "Learn react from the group up",
        dueDate: "2024-12-29",
      },
      {
        id: 2,
        title: "Fitness",
        description:
          "All my experiences about health fitness and journalling my journey ",
        dueDate: "2024-11-15",
      },
    ],
    tasks: [
      {
        id: Math.random(),
        title: "Arms Workout",
        projectId: 2,
        createdAt: Date.now(),
        isComplete: false,
      },
      {
        id: Math.random(),
        title: "Legs Workout",
        projectId: 2,
        createdAt: Date.now(),
        isComplete: false,
      },
      {
        id: Math.random(),
        title: "Ashtanga",
        projectId: 2,
        createdAt: Date.now(),
        modifiedAt: Date.now(),
        isComplete: true,
      },
    ],
  });

  const selectedProject = projectsState.projects.find(
    (pr) => pr.id === projectsState.selectedProjectId
  );

  const selectedProjectTasks = projectsState.tasks.filter(
    (task) => task.projectId === projectsState.selectedProjectId
  );

  function handleCreateProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleProjectSelect(projectId) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: projectId,
      };
    });
  }

  function handleSubmitProject(project) {
    setProjectsState((prevState) => {
      const newProject = {
        ...project,
        id: Math.random(),
      };
      return {
        ...prevState,
        selectedProjectId: newProject.id,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleCancelProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddTaskToSelectedProject(task) {
    setProjectsState((prevState) => {
      const newTask = {
        ...task,
        createdAt: Date.now(),
        projectId: projectsState.selectedProjectId,
      };
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function handleClearTaskToSelectedProject(task) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((t) => t.id !== task.id),
      };
    });
  }

  function handleCompleteTask(task) {
    setProjectsState((prevState) => {
      const completedTask = {
        ...task,
        isComplete: true,
        modifiedAt: Date.now(),
      };
      const remainingTasks = prevState.tasks.filter((t) => t.id !== task.id);
      return {
        ...prevState,
        tasks: [...remainingTasks, completedTask],
      };
    });
  }

  function handleUndoTask(task) {
    setProjectsState((prevState) => {
      const remainingTasks = prevState.tasks.filter((t) => t.id !== task.id);
      const undoTask = {
        ...task,
        isComplete: false,
        modifiedAt: Date.now(),
      };
      return {
        ...prevState,
        tasks: [undoTask, ...remainingTasks],
      };
    });
  }

  function handleProjectDelete() {
    setProjectsState((prevState) => {
      // const updatedProjects = Array.from(prevState.projects);
      // const currentProject = updatedProjects.findIndex(
      //   (pr) => pr.id === projectsState.selectedProjectId
      // );
      // if (currentProject > -1) {
      //   updatedProjects.splice(currentProject, 1);
      // }
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  }

  /**
   * Code Refactor End
   */

  // const [projects, setProjects] = useState([
  //   {
  //     id: 1,
  //     title: "Learning React",
  //     description: "Learn react from the group up",
  //     dueDate: "Dec 29, 2024",
  //     tasks: [],
  //   },
  //   {
  //     id: 2,
  //     title: "Fitness",
  //     description:
  //       "All my experiences about health fitness and journalling my journey ",
  //     dueDate: "Nov 15, 2024",
  //     tasks: [
  //       {
  //         id: 1,
  //         type: "Gym",
  //         title: "Arms Workout",
  //         createdAt: new Date(),
  //       },
  //       {
  //         id: 2,
  //         type: "Yoga",
  //         title: "Legs Workout",
  //         createdAt: new Date(),
  //       },
  //       {
  //         id: 3,
  //         type: "Yoga",
  //         title: "Ashtanga",
  //         createdAt: new Date(),
  //       },
  //     ],
  //   },
  // ]);
  // const [selectedProject, setSelectedProject] = useState(null);
  // const [creatingProject, setCreatingProject] = useState(false);
  // function handleProjectSelect(id) {
  //   setSelectedProject(() => {
  //     return projects.find((pr) => pr.id === id) || null;
  //   });
  //   handleCreateProject(false);
  // }
  // function handleCreateProject(isCreate) {
  //   setCreatingProject(isCreate);
  // }
  // function handleAddTaskToSelectedProject(task) {
  //   setProjects((prevState) => {
  //     let projectsList = Array.from(prevState);

  //     const currentProject = prevState.findIndex(
  //       (pr) => pr.id === selectedProject.id
  //     );
  //     if (currentProject > -1) {
  //       projectsList[currentProject].tasks.push(task);
  //     }
  //     return projectsList;
  //   });
  //   setSelectedProject((prevState) => {
  //     return projects.find((pr) => pr.id === prevState.id) || null;
  //   });
  // }
  // function handleClearTaskToSelectedProject(task) {
  //   setProjects((prevState) => {
  //     let projectsList = Array.from(prevState);

  //     const currentProject = prevState.findIndex(
  //       (pr) => pr.id === selectedProject.id
  //     );
  //     if (currentProject > -1) {
  //       const currentTask = projectsList[currentProject].tasks.findIndex(
  //         (t) => t.id === task.id
  //       );
  //       if (currentTask > -1) {
  //         projectsList[currentProject].tasks.splice(currentTask, 1);
  //       }
  //     }
  //     return projectsList;
  //   });
  //   setSelectedProject((prevState) => {
  //     return projects.find((pr) => pr.id === prevState.id) || null;
  //   });
  // }
  // function handleSubmitProject(project) {
  //   setProjects((prevState) => {
  //     let projectsList = Array.from(prevState);
  //     projectsList.push({ id: prevState.length + 1, ...project });
  //     setSelectedProject({ id: prevState.length + 1, ...project });
  //     return projectsList;
  //   });
  //   handleCreateProject(false);
  // }
  // function handleProjectDelete(project) {
  //   setProjects((prevState) => {
  //     let projectsList = Array.from(prevState);
  //     const currentProject = prevState.findIndex((pr) => pr.id === project.id);
  //     if (currentProject > -1) {
  //       projectsList.splice(currentProject, 1);
  //     }
  //     setSelectedProject(null);
  //     return projectsList;
  //   });
  // }
  return (
    <main
      className="h-screen py-8 flex gap-8 bg-cover bg-left overflow-y-auto"
      // style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* <Sidebar
        projects={projects}
        handleProjectSelect={handleProjectSelect}
        handleCreateProject={handleCreateProject}
      />
      {creatingProject && (
        <CreateProject handleSubmitProject={handleSubmitProject} />
      )}
      {!creatingProject && !selectedProject && (
        <NoProjectSelected handleCreateProject={handleCreateProject} />
      )}
      {!creatingProject && selectedProject && (
        <Project
          selectedProject={selectedProject}
          creatingProject={creatingProject}
          handleCreateProject={handleCreateProject}
          handleAddTaskToSelectedProject={handleAddTaskToSelectedProject}
          handleClearTaskToSelectedProject={handleClearTaskToSelectedProject}
          handleSubmitProject={handleSubmitProject}
          handleProjectDelete={handleProjectDelete}
        />
      )} */}

      <Sidebar
        projects={projectsState.projects}
        selectedProjectId={projectsState.selectedProjectId}
        handleCreateProject={handleCreateProject}
        handleProjectSelect={handleProjectSelect}
      />

      {projectsState && projectsState.selectedProjectId === undefined && (
        <NoProjectSelected handleCreateProject={handleCreateProject} />
      )}

      {projectsState && projectsState.selectedProjectId === null && (
        <CreateProject
          onSave={handleSubmitProject}
          onCancel={handleCancelProject}
        />
      )}

      {projectsState && projectsState.selectedProjectId && (
        <Project
          selectedProject={selectedProject}
          tasks={selectedProjectTasks}
          handleAddTaskToSelectedProject={handleAddTaskToSelectedProject}
          handleClearTaskToSelectedProject={handleClearTaskToSelectedProject}
          onDelete={handleProjectDelete}
          handleCompleteTask={handleCompleteTask}
          handleUndoTask={handleUndoTask}
        />
      )}
    </main>
  );
}

export default App;
