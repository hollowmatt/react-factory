import './App.css';
import { useReducer, useEffect } from 'react';
import { reducer } from './util/Actions';
const URL = 'https://swapi.dev/api/films';
const INITIAL_STATE = {status: "INITIALIZE", result: null, error: null};


function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  useEffect(() => {
    dispatch({ type: "LOADING" });
    fetch(URL)
      .then(res => res.json())
      .then(({results}) =>
        dispatch({ type: "SUCCESS", payload: results })
      )
      .catch(({message}) =>
        dispatch({ type: "FAILURE", payload: message })
      );
  }, []);
  const { status, error, result } = state;
  if (status === "INITIALIZE") {
    return <h1>Initializing...</h1>
  }
  if (status === "LOADING") {
    return <h1>Loading...</h1>
  }
  if (status === "FAILURE") {
    return <h1>Error occurred: {error}</h1>
  }
  return (
    <>
      <h1>Results are in</h1>
      <ul>
        {result.map(({ title }) => (
          <li key={title}>{title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
