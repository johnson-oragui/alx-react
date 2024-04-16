import './App.css';
import holbertonLogo from './holbertonLogo.jpg';
const { getFullYear, getFooterCopy } = require('./utils');

function App() {
  return (
    <div className="App">

        <div className="App-header">
          <img src={holbertonLogo} className="App-logo" alt="logo" />
          <h1 className="h1-header">School dashboard</h1>
        </div>

        <div className="App-body">
            <p>
              <b>Login to access the full dashboard</b>
            </p>
        </div>

      <div className="App-footer">
          <p>
            <b>
              <i>Copyright {getFullYear()} - {getFooterCopy(true)}</i></b>
            
          </p>
      </div>
      
    </div>
  );
}

export default App;
