import { TasksProvider } from './components/TaskContext';
import AddTask from './components/AddTask.js';
import TaskList from './components/TaskList.js';

export default function App() {
  return (
    <TasksProvider>
      <h1>Task Manager</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}

