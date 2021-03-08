import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header';
import Home from './Home/Home';
import DestinationCardDetails from './DestinationCardDetails/DestinationCardDetails';
import Login from './Login/Login';
import NotFound from './NotFound/NotFound';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
        <Switch>

          <Route exact path='/'>
          <Home></Home>
          </Route>

          <Route path='/home'>
          <Home></Home>
          </Route>

          <Route path="/destination/:placeId">
            <DestinationCardDetails></DestinationCardDetails>
          </Route>
          
          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
      
        </Switch>
      </Router>
    </div>
  );
}

export default App;
