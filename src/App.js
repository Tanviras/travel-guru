import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header';
import Home from './Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import DestinationHotelDetails from './DestinationHotelDetails/DestinationHotelDetails';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Switch>

          <Route path='/'>
          <Home></Home>
          </Route>

          <Route path='/home'>
          <Home></Home>
          </Route>

          <Route path='/destination/:placeId'>
          <DestinationHotelDetails></DestinationHotelDetails>
          </Route>
          

      
        </Switch>
      </Router>
    </div>
  );
}

export default App;
