import { useContext } from "react";
import { TasksContext } from "./context/TasksContext";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const { tasks } = useContext(TasksContext);
  return tasks.map(t => <TaskItem key={t.id} task={t} />);
}
