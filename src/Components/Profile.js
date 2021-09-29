import React ,{useState,useContext,useEffect} from "react";
import "../Styles/Profile.css";
import bkgImg from "../images/user-bkg.jpg";
import userProfilePhoto from "../images/person.jpg";
import Person from "../images/person.jpg";
import TextField from '@material-ui/core/TextField';
import {faPhotoVideo} from '@fortawesome/free-solid-svg-icons';
import {faTags} from '@fortawesome/free-solid-svg-icons';
import {faLocationArrow} from '@fortawesome/free-solid-svg-icons';
import {faUserPlus} from '@fortawesome/free-solid-svg-icons';
import {faCommentAlt} from '@fortawesome/free-solid-svg-icons';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Post from "../images/dummy-post.jpg";
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons';
import {faComment} from '@fortawesome/free-solid-svg-icons';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {faCity} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {faGraduationCap} from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
import {AppContext} from "../Context/AppContext";
import Loading from '../Components/Loading.js';
import {getStoredTokens} from "../utility-functions/utility-functions.js";
import jwt_decode from "jwt-decode";
import {FETCH_USER_URL} from "../Endpoints/API_ENDPOINTS";
import axios from "axios";
import {useHistory} from "react-router-dom";
import {clearCookies} from "../utility-functions/utility-functions";
import NotFound from "./PageNotFound";
import LoadingDataGif from "../images/loader.gif";

const _ = require("lodash");

const Profile = ({location}) =>{
  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
  const [toggleComments, setToggleComments] = useState(false);
  const [liked,setLiked] = useState(false);
  const [loadingData,setLoadingData] = useState(true);
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');
  const history = useHistory();

  const handleToggleComm = ()=>{
    setToggleComments(!toggleComments);
  }

  const handleLike = ()=>{
    setLiked(!liked);
  }

  const ContextAppData = useContext(AppContext);
  const user = ContextAppData.user;
  const [isLoading,setIsLoading] = useState(true);
  const [displayUserInteract,setDisplayUserInteract] = useState(false);
  const [userNotFound,setUserNotFound] = useState(false);
  const [fetchedUser,setFetchedUser] = useState({});

  const fetchUser = (id,token)=>{

    axios({
      method:'GET',
      url:FETCH_USER_URL(id),
      headers:{
        'Authorization':`Bearer ${token}`
      }
    }).then((resp)=>{
      if(resp.status == 200)
      {
        setFetchedUser(resp.data);
      } else {
        const obj = {
          fetched : false
        }
        setFetchedUser(obj);
      }
    }).catch(err=>{
      console.log(err);
    })
  }

  // useEffect(()=>{
  //
  //   const params = new URLSearchParams(location.search);
  //   const id = params.get('id');
  //   const {token} = getStoredTokens();
  //   console.log(ContextAppData.user._id == id);
  //   if(token && id)
  //   {
  //     if(id == ContextAppData.user._id)
  //     {
  //       setFetchedUser( ContextAppData.user);
  //       setDisplayUserInteract(true);
  //     }
  //     else
  //     {
  //       setDisplayUserInteract(false);
  //       fetchUser(id,token);
  //     }
  //
  //   } else {
  //     if(!token)
  //     {
  //       ContextAppData.setLoggedIn(false);
  //       ContextAppData.setIsLoading(true);
  //       clearCookies()
  //     }
  //   }
  // },[ContextAppData.user])


useEffect(()=>{
  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  const {token} = getStoredTokens();
  if(token && id)
  {
    if(id == ContextAppData.user._id)
    {

      setFetchedUser( ContextAppData.user);
      setDisplayUserInteract(false);
    }
    else
    {
      setDisplayUserInteract(true);
      fetchUser(id,token);
    }

  } else {
    if(!token)
    {
      ContextAppData.setLoggedIn(false);
      ContextAppData.setIsLoading(true);
      clearCookies()
    }
  }
},[location])

  if(!_.isEmpty(fetchedUser))
  {
      if(fetchedUser.fetched)
        return (
          <div style={{paddingTop:"60px"}}>
            <NotFound/>
          </div>
        )
      else
        return(
          <div>
            <div className="main-content-profile" >
              <div className="profile-data-container" >
                <img className="profile-background-image"  src={`data:image/jpeg;base64,${fetchedUser.coverPicture}`} alt="bkg image"/>
                <img className="person-avatar-profile" src={`data:image/jpeg;base64,${fetchedUser.profilePicture}`} />
                <p className="username">{fetchedUser.username}</p>
                <p className="user-desc">{fetchedUser.description}</p>
            {
              displayUserInteract &&

                <div className="user-contact">
                  <p className="user-contact-action">
                  <FontAwesomeIcon icon = {faUserPlus} className = "user-action-icon"/>
                  <span className="user-action-icon-label">Follow</span>
                  </p>
                  <p className="user-contact-action">
                  <FontAwesomeIcon icon = {faCommentAlt} className = "user-action-icon"/>
                  <span className="user-action-icon-label"><Link style={{textDecoration:"none",fontSize:"1.3rem"}} to="/user/messages">Message</Link></span>
                  </p>
                </div>

            }

             </div>
             <div className="user-heading-container">
                 <div className="profile-info no-form">
                   <p className="profile-info-title">User Description</p>
                   <p className="profile-info-item"> <FontAwesomeIcon icon={faHome} className="profile-description-icon"/>From:</p><span>{fetchedUser.from}</span>
                   <p className="profile-info-item"><FontAwesomeIcon icon={faCity} className="profile-description-icon"/>Lives in:</p><span>{fetchedUser.livesIn}</span>
                   <p className="profile-info-item"><FontAwesomeIcon icon={faHeart} className="profile-description-icon"/>Relationship Status:</p>
                   {
                     (() => {
                       switch (fetchedUser.relationship) {
                         case 0:
                           return (<span></span>);
                           break;
                         case 1:
                           return (<span>Married</span>);
                           break;
                         case 2:
                           return (<span>Single</span>);
                           break;
                         case 3:
                           return (<span>In a relationship</span>);
                           break;
                         default:

                       }
                     })()

                   }
                   <p className="profile-info-item"><FontAwesomeIcon icon={faGraduationCap} className="profile-description-icon"/>Studied at:</p><span>{fetchedUser.education}</span>
                 </div>


             </div>
             {/*Posts*/}
             {ContextAppData.userPosts.status ?
             ContextAppData.userPosts.data.map((post)=>{

               return(
                 <div className="user-posts-container ">
                       <div className={displayUserInteract? "profile-post-container":" profile-post-container no-form-before"}>
                         <div className="header">
                             <img src={`data:image/jpeg;base64,${post.postHolder.profilePicture}`} className="person-avatar-online"/>
                             <p className="post-username">{post.postHolder.name}</p>
                            </div>
                            <div className="post-body">
                              <p className="description">
                                {post.desc}
                              </p>
                            <div>
                            {post.img &&  <img src={`data:image/jpeg;base64,${post.img}`} alt="post-image" className="post-image"/>}
                            </div>
                             <div className="post-feedback-section">
                                <FontAwesomeIcon icon={faThumbsUp} style={{cursor:'pointer'}} onClick={handleLike} className={liked?"icon-container like post-elem-clicked":"icon-container"}/>
                                <FontAwesomeIcon icon={faComment} style={{cursor:'pointer'}} onClick={handleToggleComm} className={toggleComments?"icon-container like post-elem-clicked":"icon-container"}/>
                             </div>
                            </div>

                            <div className={toggleComments? "post-comment-section" : "post-comment-section not-display"}>

                               <TextField
                               id="outlined-multiline-static"
                               label="Add comment"
                               multiline
                               style={{width:"80%"}}
                               rows={2}
                               defaultValue=""
                                />
                                <Button variant="contained" className="btn btn-post" color="primary">
                                  Post
                                </Button>
                                <div className="previous-comments">

                                <div className="card-reply">
                                    <div className="card-reply-header">
                                      <img src={Person} alt="person" className="person-avatar question-card-reply-person-image"/>
                                      <p className="card-reply-username">Person name said:</p>
                                    </div>
                                    <p className="card-reply-text-post">Eu sincer nu cred ca merg lucrurile asa cum spui tu, se poate sa gasesti o solutie mai buna</p>
                                </div>
                                </div>
                            </div>
                         </div>
                       </div>
                   )
                })
                     :
                     <div className='loading-data-container'>
                         <img src={LoadingDataGif} className='loading-data-gif'/>
                         <p className='loading-text'>Loading posts...</p>
                     </div>
                 }



             {/*Posts*/}

             </div>
          </div>
         )

  } else {
    return(
      <div style={{paddingTop:"90px"}}>
        <Loading/>
      </div>
    )
  }

}

export default Profile;
