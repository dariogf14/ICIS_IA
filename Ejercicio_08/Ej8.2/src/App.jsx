import { AuthProvider } from "./context/AuthContext";
import { TasksProvider } from "./context/TasksContext";
import TaskList from "./TaskList";
import UserInfo from "./UserInfo";

export default function App() {
  return (
    <AuthProvider>
      <TasksProvider>
        <UserInfo />
        <TaskList />
      </TasksProvider>
    </AuthProvider>
  );
}
