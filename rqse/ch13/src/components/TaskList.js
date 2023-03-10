import { useState } from 'react';
import Task from './Task';
import TaskForm from './TaskForm';

function TaskList() {
  const INIT_TASKS = [
    {
      id: 0,
      title: 'This is a task'
    },
    {
      id: 1,
      title: 'This is another task'
    },
    {
      id: 2,
      title: 'Yet a third task'
    }
  ];
  const [tasks, setTasks] = useState(INIT_TASKS);
  
  const addTask = (title) => {
    const id = tasks.length;
    setTasks((oldTasks) => [...oldTasks, {id, title}] );
    console.log(tasks);
  };

  const removeTask = (idToDelete) => {
    setTasks((oldTasks) => oldTasks.filter(({id}) => id !== idToDelete));
  }

  const onUpdate = (title, id) => {
    console.log("title: " + title + ", id: " + id);
    setTasks((oldTasks) => {
      oldTasks[oldTasks.findIndex((task) => task.id === id)].title = title
    });
  }

  return (
    <ol className="lane">
      {tasks.map(({id, title}) => (
        <Task title={title} key={id} id={id} onDelete={removeTask} onUpdate={onUpdate}/>
      ))}
      <TaskForm add={addTask} />
    </ol>
  );
}

export default TaskList;
