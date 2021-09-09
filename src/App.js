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
import About from "./Components/About.js";
import Messages from "./Components/Messages.js";
import Questions from "./Components/Questions.js"

const UserRoutePages = ()=>{
  return(
   <Switch>
     <Route exact path="/user/messages" component={Messages}/>
     <Route exact path="/user/profile" component={Profile}/>
     <Route exact path='/user/feed' component={MainPage}/>
     <Route exact path="/user/questions" component={Questions}/>
     <Route exact path="*" component={PageNotFound}/>
   </Switch>

  )
}

const App = ()=>{

  return (
    <div>
      <Router>
      <Switch>
      <Route exact path='/' component={Home}>
       <Navbar/>
       <Home/>
     </Route>
       <Route path="/user">
          <FeedNavbar/>
          <UserRoutePages/>
       </Route>


      <Route exact path='/login' component={Login} >
      </Route>
      <Route path='/signup' component={SignUp}>
      </Route>
      <Route path='/about' component={About}>
      </Route>
      <Route component={PageNotFound}/>
      </Switch>
      </Router>
    </div>
  )
}

export default App;
