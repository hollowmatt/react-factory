import { Task } from "./Task";
import { TasksContext } from "./TaskContext";
import { useContext } from 'react';

export default function TaskList() {
  const tasks = useContext(TasksContext);
  return (
    <ol className="lane">
      {tasks.map(task => (          
        <Task task={task} key={task.id} />
      ))}
    </ol>
  );
}


