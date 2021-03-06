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
import { createContext, useState } from 'react';
import Registration from './Login/Registration';
import DestinationBookedDetails from './DestinationBookedDetails/DestinationBookedDetails';
import PrivateRoute from './PrivateRoute/PrivateRoute';



export const UserContext = createContext();

function App(props) {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
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
          
          <Route exact path="/login">
            <Login></Login>
          </Route>

          <Route path='/register'>
            <Registration></Registration>
          </Route>

          <PrivateRoute path="/booked/:placeId">
            <DestinationBookedDetails></DestinationBookedDetails>
          </PrivateRoute>


          <Route path="*">
            <NotFound></NotFound>
          </Route>
      
        </Switch>
      </Router>
    </div>
    </UserContext.Provider>
  );
}

export default App;
