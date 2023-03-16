import { useContext } from 'react';
import { TasksContext } from './TaskContext';
import Task from './Task';
import TaskForm from './TaskForm';

function TaskList() {
  const tasks = useContext(TasksContext);
  console.log(tasks);
  return (
    <ol className="lane">
      {tasks.map((task) => (
        <Task task={task} key={task.id} />
      ))}
      <TaskForm />
    </ol>
  );
}

export default TaskList;
