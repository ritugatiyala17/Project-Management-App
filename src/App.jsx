// This is a regular code comment [src/assets/no-projects.png]
import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Project from "./components/Project";
import CreateProject from "./components/CreateProject";
import NoProjectSelected from "./components/NoProjectSelected";

import backgroundImage from "./assets/bg-1.jpeg";
function App() {
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

  function handleSelectProject(projectId) {
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
  function handleDeleteProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  }

  function handleAddTask(task) {
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

  function handleClearTask(task) {
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

  return (
    <main
      className="h-screen py-8 flex gap-8 bg-cover bg-left overflow-y-auto"
      // style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Sidebar
        projects={projectsState.projects}
        selectedProjectId={projectsState.selectedProjectId}
        handleCreateProject={handleCreateProject}
        handleSelectProject={handleSelectProject}
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
          handleAddTask={handleAddTask}
          handleClearTask={handleClearTask}
          onDelete={handleDeleteProject}
          handleCompleteTask={handleCompleteTask}
          handleUndoTask={handleUndoTask}
        />
      )}
    </main>
  );
}

export default App;
