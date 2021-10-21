
import './App.css';
import Doctors from './Components/Doctors/Doctors';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Login from './Components/LogIn/LogIn';
import NotFound from './Components/NotFound/NotFound';
import Booking from './Components/Booking/Booking';
import Services from './Components/Services/Services';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Components/LogIn/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
      <Header></Header>
      
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route  path="/home">
            <Home></Home>
          </Route>
          <Route path="/doctors">
           <Doctors></Doctors>
          </Route>
          <PrivateRoute path="/booking/:doctorId">
           <Booking></Booking>
          </PrivateRoute>
          <Route path="/services">
           <Services></Services>
          </Route>
          <Route path="/login">
           <Login></Login>
          </Route>
          <Route path="*">
           <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
