import 'bulma/css/bulma.min.css';

const App = () => {
      return (
        <div classname="main"> 
          <div className="buttons">
            <div className="column">
              <button className="button is-primary is-small is-outlined">Primary</button>
              <button className="button is-link is-large is-disabled">Link</button>
              <button className="button is-info">Info</button>
              <button className="button is-success">Success</button>
              <button className="button is-warning">Warning</button>
              <button className="button is-danger">Danger</button>
            </div>
            <div className="column">
              <button className="button is-black">Black</button>
              <button className="button is-white">White</button>
              <button className="button is-dark">Dark</button>
              <button className="button is-light">Light</button>
            </div>
          </div>
        </div>
      )
  }
  
export default App;
