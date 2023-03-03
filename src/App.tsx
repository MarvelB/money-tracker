import NavBar from 'components/NavBar/NavBar';
import { useAuthContext } from 'hooks/useAuthContext';
import Home from 'pages/Home/Home';
import Login from 'pages/Login/Login';
import Signup from 'pages/Signup/Signup';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {

  const { isAuthReady, user } = useAuthContext();

  return (
    <div className="App">
      {isAuthReady && (
        <BrowserRouter>

          <NavBar />

          <Switch>

            <Route path="/login">
              {!user && <Login />}
              {user && <Redirect to="/" />}
            </Route>

            <Route path="/signup">
              {!user && <Signup />}
              {user && <Redirect to="/" />}
            </Route>

            <Route exact path="/">
              {user && <Home />}
              {!user && <Redirect to="/login" />}
            </Route>

          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
