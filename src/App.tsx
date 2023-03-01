import Home from 'pages/Home/Home';
import Login from 'pages/Login/Login';
import Signup from 'pages/Signup/Signup';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/signup">
            <Signup />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
