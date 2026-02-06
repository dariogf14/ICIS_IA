import { createContext, useState } from "react";
import { TASKS as initialTasks } from "../data/tasks";

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState(initialTasks);

  const addTask = (task) => {
    setTasks((prev) => [...prev, { ...task, id: prev.length + 1 }]);
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <TasksContext.Provider value={{ tasks, addTask, deleteTask }}>
      {children}
    </TasksContext.Provider>
  );
};
