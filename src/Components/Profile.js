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

const Profile = () =>{
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
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');

  const handleToggleComm = ()=>{
    setToggleComments(!toggleComments);
  }

  const handleLike = ()=>{
    setLiked(!liked);
  }

  const ContextAppData = useContext(AppContext);
  const user = ContextAppData.user;
  const [isLoading,setIsLoading] = useState(true);

  useEffect(()=>{


  },[ContextAppData.user])

 if(ContextAppData.user.user)
 {
   return(
     <div>
       <div className="main-content-profile" >
         <div className="profile-data-container" >
           <img className="profile-background-image"  src={`data:image/jpeg;base64,${ContextAppData.user.user.coverPicture}`} alt="bkg image"/>
           <img className="person-avatar-profile" src={`data:image/jpeg;base64,${ContextAppData.user.user.profilePicture}`} />
           <p className="username">{ContextAppData.user.user.username}</p>
           <p className="user-desc">{ContextAppData.user.user.description}</p>
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
        </div>
        <div className="user-heading-container">
            <div className="profile-info">
              <p className="profile-info-title">User Description</p>
              <p className="profile-info-item"> <FontAwesomeIcon icon={faHome} className="profile-description-icon"/>From:</p><span>{ContextAppData.user.user.from}</span>
              <p className="profile-info-item"><FontAwesomeIcon icon={faCity} className="profile-description-icon"/>Lives in:</p><span>{ContextAppData.user.user.city}</span>
              <p className="profile-info-item"><FontAwesomeIcon icon={faHeart} className="profile-description-icon"/>Relationship Status:</p>
              {
                (() => {
                  switch (ContextAppData.user.user.relationship) {
                    case 1:
                      return (<span>Single</span>);
                      break;
                    case 2:
                      return (<span>In a relationship</span>);
                      break;
                    case 3:
                      return (<span>In a relationship</span>);
                      break;
                    default:

                  }
                })()

              }
              <p className="profile-info-item"><FontAwesomeIcon icon={faGraduationCap} className="profile-description-icon"/>Studied at:</p><span>{ContextAppData.user.user.university}</span>
            </div>
            <div className="profile-submit-post">
             <div className="profile-form-container">
               <div className="person-avatar-container">
                 <img src={`data:image/jpeg;base64,${ContextAppData.user.user.profilePicture}`} alt="person" className="person-avatar"/>
               </div>
                  <form className={`${classes.root} text-input`} noValidate autoComplete="off">
                  <TextField
               id="outlined-multiline-static"
               label="What is on your mind?"
               multiline
               style={{width:"80%"}}
               rows={2}
               defaultValue=""
                />
                <div className="media-type-container">
                  <div className="media-type">
                      <FontAwesomeIcon icon={faPhotoVideo} className="icon-container photo-video"/>
                      <p className="media-icon-desc ">Photo or Video</p>
                  </div>

                  <div className="media-type">
                      <FontAwesomeIcon icon={faTags} className="icon-container tag"/>
                      <p className="media-icon-desc">Tag</p>
                  </div>

                  <div className="media-type">
                    <FontAwesomeIcon icon={faLocationArrow} className="icon-container location"/>
                    <p className="media-icon-desc">Location</p>
                  </div>
                  <Button variant="contained" className="btn" color="primary">
                    Share!
                  </Button>
                </div>

                </form>
               </div>
            </div>
        </div>
        <div className="user-posts-container">

            <div className="profile-post-container">
              <div className="header">
                  <img src={`data:image/jpeg;base64,${ContextAppData.user.user.profilePicture}`} className="person-avatar-online"/>
                  <p className="post-username">{ContextAppData.user.user.username}</p>
                 </div>
                 <div className="post-body">
                   <p className="description">Lorem ipsum dolor sit amet, copiosae percipit temporibus cu sit. An clita causae deleniti mea, te etiam ocurreret nec, te mel aliquam omittam. Nisl laoreet invenire eam ne, cu noster semper blandit his. Ius in essent complectitur, prompta facilisi electram mel eu, mea eu eripuit ceteros definiebas. Usu ne causae delectus intellegat.

         Sit te elitr utinam, cu inani iisque fastidii cum. Pri ut alia brute incorrupte, eum sanctus suscipiantur ut, at nisl copiosae vivendum has. His graeci docendi constituam at, vidit tincidunt cu vim. Eum facilis albucius et.

         Vidit habeo te nam. Aliquid consequat quaerendum pro in. Repudiare laboramus vim ne, soluta euripidis disputando ut vim. Mea ut eripuit pericula, pri cu modo viderer iracundia. An sit incorrupte theophrastus, vel ea deterruisset conclusionemque, ad eam fugit nostrud sententiae. Docendi convenire evertitur est an.

         Ferri oblique ad pro. Qui cu veri ponderum. Id probo inimicus usu, vix labore ponderum ut. Timeam liberavisse consectetuer pri at, cu malis civibus est. Mazim soleat an sea, qui at quot reprimique. Usu et posse vulputate.

         Ut est illum discere appellantur, vel porro exerci no. Mei tamquam maiestatis ad, nemore omittam volutpat in eum, clita soluta eum in. Stet tantas eum ne. Scripta inimicus reprimique ea sit, pri an inani consulatu urbanitas.  </p>
                 <div>
                   <img src={Post} alt="post-image" className="post-image"/>
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
       </div>
     </div>
   )
 } else {
   return <div></div>
 }



}

export default Profile;
