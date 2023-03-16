import { useReducer, createContext } from "react";
import { initialTasks } from './TaskFixture';
import TaskContext from "../../../../bookfiles/rq13-steps/src/task/context";

export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);
const INITIAL_TASKS = initialTasks;

export function TasksProvider({children}) {
  const [tasks, dispatch] = useReducer(tasksReducer, INITIAL_TASKS);

  return(
    <TaskContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TaskContext.Provider>
  );
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'addTask': {
      return;
    }
    case 'editTask': {
      return;
    }
    case 'completeTask': {
      return;
    }
    case 'removeTask': {
      return;
    }
    case 'addStep': {
      return;
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
