import { useReducer, createContext } from 'react';

export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);

export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [...tasks, {
        id: action.id,
        text: action.text,
        done: false
      }];
    }
    case 'changed': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const initialTasks = [
  {
    id: 0, 
    text: 'Complete task list app', 
    steps: [
      {
        id: 0, 
        desc: "add steps capability", 
        complete: false
      }, 
      {
        id: 1, 
        desc: "add accordian capability", 
        complete: false
      }
    ], 
    done: false 
  },
  { 
    id: 1, 
    text: 'Add steps to task list', 
    steps: [
      {
        id: 0, 
        desc: "create step component", 
        complete: false
      }, 
      {
        id: 1, 
        desc: "add step form component", 
        complete: false
      }, 
      {
        id: 2, 
        desc: "sort steps", 
        complete: false
      }
    ]
    , done: false
  },
  { 
    id: 2, 
    text: 'Drink latte', 
    steps: [
      {
        id: 0, 
        desc: "turn on machine", 
        complete: true
      }, 
      {
        id: 1, 
        desc: "steam milk", 
        complete: true
      }, 
      {
        id: 2, 
        desc: "draw shot", 
        complete: true
      }, 
      {
        id: 3, 
        desc: "enjoy", 
        complete: true
      }
    ], 
    done: false
  }
];