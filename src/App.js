import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Login from './Components/Login.js';
import Home from './Components/Home.js';
import Navbar from './Components/Navbar.js';
import SignUp from './Components/SignUp.js';
import MainPage from './Components/MainPage.js';
import FeedNavbar from './Components/FeedNavbar.js';
import Test from "./Components/Test.js";
import PageNotFound from './Components/PageNotFound.js';
import Profile from "./Components/Profile.js";

const App = ()=>{

  return (
    <div>
      <Router>

      <Switch>
      <Route exact path='/' component={Home}>
       <Navbar/>
       <Home/>
     </Route>
       <Route  path='/user'>
        <FeedNavbar/>
        <Route  path='/user/feed' component={MainPage}/>
       </Route>
       <Route path="/user/profile" component={Profile}/>

      <Route exact path='/login' component={Login} >
      </Route>
      <Route path='/singup' component={SignUp}>
      </Route>
      <Route component={PageNotFound}/>
      </Switch>
      </Router>
    </div>

  )

}

export default App;
