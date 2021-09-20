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
import {CHECK_TOKEN_URL,GET_USER_URL} from "./Endpoints/API_ENDPOINTS";
import { useHistory } from "react-router-dom";
import {useSetLoggedInTrue} from "./utility-functions/useSetLogin";
import jwt_decode from "jwt-decode";

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

    const getUserAndSet = (myToken)=>{
      const data = {
        token : myToken
      }

      axios.post(GET_USER_URL, {"body":data}, {
       headers: {
       'Content-Type': 'application/json',
       'Authorization':'Bearer '+myToken
       }
     }
   ).then(resp=>{

     if(resp.data != null)
     {
       setTimeout(()=>{
         setIsLoading(false);
         setUser(resp.data);
       },1000);
     } else {
       setTimeout(()=>{
         setIsLoading(false);
         setLoggedIn(false);
       },1000);
     }

   }).catch(err=>{
     console.log(err);
     setTimeout(()=>{
         setIsLoading(false);
         setLoggedIn(false);
     },1000);
   })
  }


  const reloadhDataAfterRefresh = ()=>{
    const myToken = document.cookie.split(";")[0].split("=")[1];
    if(myToken)
    {

      fetch(CHECK_TOKEN_URL,{
          method:"POST",
          headers: {"Content-type": "application/json;charset=UTF-8"},
          body:JSON.stringify({
            token:myToken
          })
      }).then(resp=>{

        console.log("hello");
        if(resp.status == 200){
          setLoggedIn(true);
          getUserAndSet(myToken);

        } else{
          setTimeout(()=>{
              setIsLoading(false);
              setLoggedIn(false);
          },1000);
        }
        console.log("Hello from response:",resp);
      }).catch(err=>{
        console.log("Hello from catch statement");
        console.log(err);
            setTimeout(()=>{
                setIsLoading(false);
                setLoggedIn(false);
            },1000);
          });
    } else {
      setTimeout(()=>{
          setIsLoading(false);
          setLoggedIn(false);
      },1000);
    }
  }


  const updateUser = (user)=>{
    setUser(user);
  }

  const updateToken = (tk)=>{
    data.token = tk;
  }

  const updateRefreshToken = (tk)=>{
    data.refreshToken = tk;
  }

  const [loggedIn, setLoggedIn] = useState(false);
  let [user,setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const data = {
    user:user,
    setUser:setUser,
    token:'',
    refreshToken:'',
    setLoggedIn:setLoggedIn,
    setIsLoading:setIsLoading,
    isLoading:isLoading,
    reload:reloadhDataAfterRefresh,
    updateUser:updateUser,
    updateToken:updateToken,
    updateRefreshToken:updateRefreshToken,
    getUserAndSet:getUserAndSet
  }



  useEffect(()=>{
    reloadhDataAfterRefresh();

},[]);


 //
 // if(isLoading)
 // {
 //   return(
 //     <Loading/>
 //   )
 // } else {
 //   return (
 //     <div>
 //       <Router>
 //     <AppContext.Provider value={data}>
 //         <Switch>
 //         <Route exact path='/' component={Home}>
 //           <Navbar/>
 //           <Home/>
 //         </Route>
 //
 //     <Route path="/user" key="data" render ={()=>{
 //         if(loggedIn)
 //         {
 //           return(
 //             <>
 //             <FeedNavbar key="data"/>
 //             <UserRoutePages/>
 //             </>
 //           )
 //         } else {
 //           return(
 //             <Redirect to='/login'/>
 //           )
 //         }
 //
 //     }}/>
 //
 //       <Route exact path = "/register-success" component={Success}/>
 //       <Route exact path='/login' component={Login} >
 //       </Route>
 //       <Route path='/signup' component={SignUp}>
 //       </Route>
 //       <Route path='/about' component={About}>
 //       </Route>
 //       <Route component={PageNotFound}/>
 //       </Switch>
 //       </AppContext.Provider>
 //       </Router>
 //
 //     </div>
 //   )
 // }
 return(
   <div>
    <p>Hello</p>
   </div>
 )
}

export default App;
