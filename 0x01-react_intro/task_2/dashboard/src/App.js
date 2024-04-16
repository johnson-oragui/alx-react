import './App.css';
import holbertonLogo from './holbertonLogo.jpg';
const { getFullYear, getFooterCopy } = require('./utils');

function App() {
  return (
    <div className="App">

        <div className="App-header">
          <img src={holbertonLogo} className="App-logo" alt="logo" />
          <h1>School dashboard</h1>
        </div>

        <div className="App-body">
            <p>
              <b>Login to access the full dashboard</b>
            </p>

            <form action="#">
              <div>
                <label for="email">email</label>
                <input type="email" id="email" name="email" placeholder="enter email"></input>
              </div>

              <div>
                <label for="password">password</label>
                <input type="password" id="password" name="passwod" placeholder="enter password"></input>
              </div>

              <button type="sumit">OK</button>

            </form>
              
            
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
