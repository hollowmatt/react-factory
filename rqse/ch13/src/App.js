import "./style.css";
import TaskList from "./components/tasks/TaskList";
import { TasksProvider } from "./components/tasks/TaskContext";

function App() {
  return (
    <main>
      <TasksProvider>
        <h1>Task Manager</h1>
        <TaskList />
      </TasksProvider>
    </main>
  );
}

export default App;
