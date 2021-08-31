import React ,{useEffect} from "react";
import "../Styles/mainPage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRss} from '@fortawesome/free-solid-svg-icons';
import {faCommentDots}  from '@fortawesome/free-solid-svg-icons';
import {faVideo} from '@fortawesome/free-solid-svg-icons';
import {faUserFriends} from '@fortawesome/free-solid-svg-icons';
import {faBookmark} from '@fortawesome/free-solid-svg-icons';
import {faQuestionCircle} from '@fortawesome/free-solid-svg-icons';
import {faBuilding} from '@fortawesome/free-solid-svg-icons';
import {faCalendar} from '@fortawesome/free-solid-svg-icons';
import {faGraduationCap} from '@fortawesome/free-solid-svg-icons';
import {faPhotoVideo} from '@fortawesome/free-solid-svg-icons';
import {faTags} from '@fortawesome/free-solid-svg-icons';
import {faLocationArrow} from '@fortawesome/free-solid-svg-icons';
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons';
import {faComment} from '@fortawesome/free-solid-svg-icons';
import { Input } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Person from "../images/person.jpg";
import Button from '@material-ui/core/Button';
import Birthday from '../images/gift-box.png';
import Add from '../images/snicker.jpg';
import Post from "../images/dummy-post.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const MainPage =()=>{

const classes = useStyles();
const [value, setValue] = React.useState('Controlled');

const handleChange = (event) => {
 setValue(event.target.value);
};

const resFunc = ()=>{

}

useEffect(()=>{
    window.addEventListener('resize',resFunc);

    return()=>{
      window.removeEventListener('resize',resFunc);
    }
},[]);

  return(
    <div className="main-container">
      <div className="side-nav options">

       <div className="item-container">
         <FontAwesomeIcon icon={faRss} className="icon-container"/>
         <span className="inline">Feed</span>
       </div>

       <div className="item-container item-large">
         <FontAwesomeIcon icon={faCommentDots} className="icon-container"/>
         < span className="inline">Chats</span>
       </div>

       <div className="item-container item-large">
         <FontAwesomeIcon icon={faVideo} className="icon-container"/>
         <span className="inline">Videos</span>
       </div>

       <div className="item-container item-large">
         <FontAwesomeIcon icon={faUserFriends} className="icon-container"/>
         <span className="inline">Groups</span>
       </div>

       <div className="item-container item-large">
         <FontAwesomeIcon icon={faBookmark} className="icon-container"/>
         <span className="inline">Bookmarks</span>
      </div>

      <div className="item-container item-large">
        <FontAwesomeIcon icon={faQuestionCircle} className="icon-container"/>
        <span className="inline">Questions</span>
      </div>

      <div className="item-container item-large">
        <FontAwesomeIcon icon={faBuilding} className="icon-container"/>
        <span className="inline">Jobs</span>
      </div>

      <div className="item-container item-large">
        <FontAwesomeIcon icon={faCalendar} className="icon-container"/>
        <span className="inline">Events</span>
      </div>

      <div className="item-container item-large">
        <FontAwesomeIcon icon={faGraduationCap} className="icon-container"/>
        <span className="inline">Courses</span>
      </div>

      </div>
  <div className="main-content">
    <div className="post-card">
     <div className="form-container">
     <div className="person-avatar-container">
       <img src={Person} alt="person" className="person-avatar"/>
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

   <div className="feed-container">

     <div className="post-container">
        <div className="header">
             <img src={Person} className="person-avatar-online"/>
             <p className="post-username">Person Name</p>
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
            <FontAwesomeIcon icon={faThumbsUp} className="icon-container like"/>
            <FontAwesomeIcon icon={faComment} className="icon-container like"/>
         </div>
        </div>
     </div>

     <div className="post-container">
        <img src={Person} className="person-avatar-online"/>
     </div>
    </div>
   <div className="right-nav">
        <div className="birthday-container">
          <img src={Birthday} className="birthday-img"/>
          <span><strong>Costica</strong> and 5 others celebrate their birtday!</span>
        </div>
        <img src={Add} alt="add" className="addImg" />
        <div className="friend-list">
          <ul>
             <li className="person-container"> <img src={Person} className="person-avatar-post"/> <span className="active-dot"></span> <p className="person-username">Person 1</p></li>
          </ul>
        </div>
       </div>
    </div>

    </div>
  )
}

export default MainPage;
