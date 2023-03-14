import { Task } from "./Task";
import { TasksContext } from "./TaskContext";
import { useContext } from 'react';

export default function TaskList() {
  const tasks = useContext(TasksContext);
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <Task
            task={task}
          />
        </li>
      ))}
    </ul>
  );
}


