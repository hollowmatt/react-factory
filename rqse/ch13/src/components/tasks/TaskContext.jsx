import { useReducer, createContext } from "react";
import { initialTasks } from './TaskFixture';

export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);
const INITIAL_TASKS = initialTasks;

export function TasksProvider({children}) {
  const [tasks, dispatch] = useReducer(tasksReducer, INITIAL_TASKS);

  return(
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'addTask': {
      return [...tasks, {
        id: tasks.length,
        title: action.title
      }];
    }
    case 'editTask': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'completeTask': {
      return;
    }
    case 'removeTask': {
      return tasks.filter(t => t.id !== action.id);
    }
    case 'addStep': {
      console.log("data: " + action.id + ", " + action.step);
      return tasks.map(t => {
        if (t.id === action.id) {
          return {
            ...t, 
            steps: t.steps.concat([{
              num: t.steps.length, desc: action.step, complete: false
            }])
          };
        } else {
          return t;
        }
      });
    }
    case 'editStep': {
      return;
    }
    case 'completeStep': {
      return;
    }
    case 'moveStep': {
      return;
    }
    case 'removeStep': {
      return;
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
