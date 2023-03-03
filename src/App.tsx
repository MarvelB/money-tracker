import NavBar from 'components/NavBar/NavBar';
import { useAuthContext } from 'hooks/useAuthContext';
import Home from 'pages/Home/Home';
import Login from 'pages/Login/Login';
import Signup from 'pages/Signup/Signup';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {

  const { isAuthReady } = useAuthContext();

  return (
    <div className="App">
      {isAuthReady && (
        <BrowserRouter>

          <NavBar />

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
      )}
    </div>
  );
}

export default App;
