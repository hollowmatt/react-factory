import { useState } from 'react';
import Task from './Task';
import TaskForm from './TaskForm';

function TaskList() {
  const INIT_TASKS = [
    {
      id: 0,
      title: 'Master Karate',
      steps: [
        {
          num: 0,
          desc: "Wax On",
          complete: false
        },
        {
          num: 1,
          desc: "Wax Off",
          complete: false
        }
      ]
    },
    {
      id: 1,
      title: 'This is another task',
      steps: []
    },
    {
      id: 2,
      title: 'Yet a third task',
      steps: []
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
    setTasks((ts) => ts.map((task) => (task.id === id ? { ...task, title } : task)));
  }

  console.log(tasks);
  
  return (
    <ol className="lane">
      {tasks.map(({id, title, steps}) => (
        <Task title={title} key={id} id={id} steps={steps} onDelete={removeTask} onUpdate={onUpdate}/>
      ))}
      <TaskForm add={addTask} />
    </ol>
  );
}

export default TaskList;
