import { useState } from 'react';
import FilterButton from './FilterButton';
import Task from './Task';

function markDone(list, index) {
    return list.map(
        (item, i) => i === index ? {...item, done: true } : item
    )
}

function Todo({initialList}) {
    const [todos, setTodos] = useState(initialList);
    const [hideDone, setHideDone] = useState(false);
    const filteredTodos = hideDone
      ? todos.filter(({done}) => !done)
      : todos;
    return (
      <main>
        <div style={{display: 'flex'}}>
          <FilterButton
            current={hideDone}
            flag={false}
            setFilter={setHideDone}
          >
            Show All
          </FilterButton>
          <FilterButton
            current={hideDone}
            flag={true}
            setFilter={setHideDone}
          >
            Hide Completed
          </FilterButton>
        </div>
        {filteredTodos.map((todo, index) => (
          <Task
            key={todo.task}
            task={todo.task}
            done={todo.done}
            markDone={() => setTodos(todos => markDone(todos, index))}
          />
        ))} 
      </main>
    );
  }

  export default Todo;