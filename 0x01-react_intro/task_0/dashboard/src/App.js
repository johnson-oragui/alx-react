import './App.css';
import holbertonLogo from './holbertonLogo.jpg';

function App() {
  return (
    <div className="App">

        <header className="App-header">
          <img src={holbertonLogo} className="App-logo" alt="logo" />
          <h1 className="h1-header">School dashboard</h1>
        </header>


      <div className="App-body">
        <body>
            <p>
              <b>Login to access the full dashboard</b>
            </p>
        </body>
      </div>

      <div className="App-footer">
        <p>
          <b>
            <i>Copyright 2020 - holberton School</i></b>
          
        </p>
      </div>
    </div>
  );
}

export default App;
