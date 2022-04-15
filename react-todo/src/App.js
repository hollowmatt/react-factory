import './App.css';

function App() {
  const main = () => {
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
      />
      <label
        htmlFor="toggle-all"
      />
      <ul className="todo-list">
        
      </ul>
    </section>
  };

  return (
    <div className="App">
		  <header className="header">
			  <h1>todos</h1>
				  <input
						className="new-todo"
					  placeholder="What needs to be done?"
						autoFocus={true}
				/>
			</header>
			{main}
		</div>
  );
}

export default App;
