import logo from './logo.svg';
import './App.css';

// this took me way too long to figure out :(
//└─$ docker run -it -p 3000:3000 
// -v /home/node/app/node_modules 
// -v ~/frontend:/home/node/app topramen789:frontend

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          BOOM
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;