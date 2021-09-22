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
import {CHECK_TOKEN_URL,GET_USER_URL,REFRESH_TOKEN_URL} from "./Endpoints/API_ENDPOINTS";
import { useHistory } from "react-router-dom";
import {useSetLoggedInTrue} from "./utility-functions/useSetLogin";
import jwt_decode from "jwt-decode";
import {clearCookies,isTokenExpired,getStoredTokens,setCookie} from "./utility-functions/utility-functions.js";

const _ = require("lodash");

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

const AuthenticatedRoute = (props)=>{
  console.log(props);
  if(props.loggedIn)
  {
    return(
      <>
       <FeedNavbar key="data"/>
       <UserRoutePages/>
       </>)
  } else {

    return(
      <Redirect to='/login'/>
    )
  }
}


const App = ()=>{

const [loggedIn, setLoggedIn] = useState(false);
let [user,setUser] = useState({});
const [isLoading, setIsLoading] = useState(true);


const  setCookie = (cName, cValue, expDays)=> {
        let date = new Date();
        date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

const updateUserProperty = (userObj)=>{
  setUser(userObj);
}

const refreshTokenFunc = ()=>{
  console.log("Refresh token function was called!");
  setIsLoading(true);
  let {refreshToken} = getStoredTokens();
  if(refreshToken != '')
  {
     axios.post(REFRESH_TOKEN_URL,{
        token:refreshToken
        }
   ).then(resp=>{
       if(resp.status == 200)
       {
         const d = new Date();
         d.setTime(d.getTime()+1*60*60*60*1000);
         let expires = "expires="+d.toUTCString();
         const newToken = resp.data.token;
         setLoggedIn(true);
         setCookie('token',newToken,1);
         getUserAndSet(newToken);
       } else{
         clearCookies();
         setLoggedIn(false);
         setIsLoading(false);
       }
     }).catch(err=>{
       console.log(err);
      clearCookies();
      setLoggedIn(false);
      setTimeout(()=>{
        setIsLoading(false);
      },500);
     })
  } else {
    clearCookies();
    setLoggedIn(false);
    setTimeout(()=>{
      setIsLoading(false);
    },500);
  }
}


const getUserAndSet = (myToken)=>{
  const data = {
    token : myToken
  }

axios({
  url:GET_USER_URL,
  method:'post',
  headers:{
    'Content-Type': 'application/json',
    'Authorization':'Bearer '+myToken
  },
  data:data
}).then(resp=>{
  console.log(resp);
  if(resp.status == 200)
  {
    setUser(resp.data.user);
    setLoggedIn(true);
    setTimeout(()=>{
      setIsLoading(false);
    },2000);
  }
}).catch(err=>{
  console.log(err);
  setTimeout(()=>{
    setLoggedIn(true);
    setIsLoading(false);
  },1000);
})

}

const reloadDataAfterRefresh = ()=>{

    let {token,refreshToken} = getStoredTokens();
    token = token.trim();
    refreshToken = refreshToken.trim();

   if(token != '' && refreshToken != '')
   {

     fetch(CHECK_TOKEN_URL,{
         method:"POST",
         headers: {"Content-type": "application/json;charset=UTF-8"},
         body:JSON.stringify({
          token:token
         })
     }).then(resp=>{

       if(resp.status == 200)
       {
         getUserAndSet(token);

       } else {
         if(isTokenExpired(token))
         {
           refreshTokenFunc();
           return;
         }
         clearCookies();
         setTimeout(()=>{
           setLoggedIn(false);
           setIsLoading(false);
         },500);
       }

      }).catch(err=>{
        if(isTokenExpired(token))
        {
          refreshTokenFunc();
          return;
        }
         console.log(err);
         clearCookies();
         setLoggedIn(false);
         setTimeout(()=>{
           setIsLoading(false);
         },500);
      });
   } else {
     clearCookies();
     setLoggedIn(false);
     setTimeout(()=>{
       setIsLoading(false);
     },500);
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

  const data = {
    user:user,
    setUser:setUser,
    token:'',
    refreshToken:'',
    setLoggedIn:setLoggedIn,
    setIsLoading:setIsLoading,
    isLoading:isLoading,
    reload:reloadDataAfterRefresh,
    updateUser:updateUser,
    updateToken:updateToken,
    updateRefreshToken:updateRefreshToken,
    getUserAndSet:getUserAndSet,
    refreshToken:refreshTokenFunc,
    updateUserProperty:updateUserProperty
  }

useEffect(()=>{
    reloadDataAfterRefresh();
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
     <AppContext.Provider value={data}>
         <Switch>
         <Route exact path='/' component={Home}>
           <Navbar/>
           <Home/>
         </Route>
     <Route path="/user" key="data">
         <AuthenticatedRoute loggedIn={loggedIn} />
     </Route>
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
