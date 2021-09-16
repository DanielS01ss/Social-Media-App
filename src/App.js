import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route,Switch,withRouter} from 'react-router-dom';
import Login from './Components/Login.js';
import Loading from './Components/Loading.js';
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
import Questions from "./Components/Questions.js";
import Settings from "./Components/Settings.js";
import Success from "./Components/Success.js";
import {AppContext} from "./Context/AppContext";
import React , {useContext,useEffect, useState} from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import {CHECK_TOKEN_URL} from "./Endpoints/API_ENDPOINTS";
import { useHistory } from "react-router-dom";
import {useSetLoggedInTrue} from "./utility-functions/useSetLogin";

const UserRoutePages = ()=>{
  return(
   <Switch>
     <Route exact path="/user/messages" component={Messages}/>
     <Route exact path="/user/profile" component={Profile}/>
     <Route exact path='/user/feed' component={MainPage}/>
     <Route exact path="/user/questions" component={Questions}/>
     <Route exact path="/user/settings" component={Settings}/>
     <Route exact path="*" component={PageNotFound}/>
   </Switch>

  )
}

const App = ()=>{


  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(()=>{
    const myToken = document.cookie.split(";")[0].split("=")[1];
    console.log(myToken);

    if(myToken)
    {
      let xhr = new XMLHttpRequest();
      xhr.open("GET",CHECK_TOKEN_URL);
      const reqBody =  {
        token:myToken
      }

      xhr.send(JSON.stringify(reqBody));
      xhr.onload =()=>{
        console.log("I've loaded succesfully!");
        console.log(xhr.status);
        if(xhr.status == 200){
          console.log("Hello the status is 200!");
          setLoggedIn(true);
          setTimeout(()=>{
              setIsLoading(false);
          },1000);

        }
      }
      xhr.onerror = ()=>{
        console.log("I've got an error!");
      }
    }

},[]);

 if(isLoading)
 {
   return(
     <Loading/>
   )
 } else {
   return (
     <div>
       <Router>
     <AppContext.Provider >
         <Switch>

         <Route exact path='/' component={Home}>
           <Navbar/>
           <Home/>
         </Route>

     <Route path="/user" key="data" render ={()=>{
         if(loggedIn)
         {
           return(
             <>
             <FeedNavbar key="data"/>
             <UserRoutePages/>
             </>
           )
         } else {
           return(
             <Redirect to='/login'/>
           )

         }

     }}/>

       <Route exact path = "/register-success" component={Success}/>
       <Route exact path='/login' component={Login} >
       </Route>
       <Route path='/signup' component={SignUp}>
       </Route>
       <Route path='/about' component={About}>
       </Route>
       <Route component={PageNotFound}/>
       </Switch>
       </AppContext.Provider>
       </Router>

     </div>
   )
 }

}

export default App;
