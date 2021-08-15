import './App.css';
import Nav from './components/Nav/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './views/Home/Home';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <>
      <Router>
        <Nav></Nav>
        <Switch>
          <Route exact path="/">
              <Home></Home>
          </Route>
          <Route exact path="/cart">
              <Cart></Cart>
          </Route>
        </Switch>
      </Router>

    </>
  );
}

export default App;
