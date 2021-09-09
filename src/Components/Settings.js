import React,{useRef} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserCog} from '@fortawesome/free-solid-svg-icons';
import {faImages} from '@fortawesome/free-solid-svg-icons';
import "../Styles/Settings.css";
import Post from "../images/dummy-post.jpg";
import Button from '@material-ui/core/Button';
import userProfilePhoto from "../images/person.jpg";
import TextField from '@material-ui/core/TextField';

const Settings = ()=>{

const inputFile = useRef(null);
const hiddenCoverPhotoInput = useRef(null);
const hiddenProfilePhotoInput = useRef(null);

const handleCoverPhotoInput = (evt)=>{
  hiddenCoverPhotoInput.current.click();
}

const handleProfilePhotoInput = (evt)=>{
  hiddenProfilePhotoInput.current.click()
}


    return(
      <div className="settings-container">
         <div className="user-settings-header">
         <FontAwesomeIcon icon={faUserCog} className="settings-header-icon" />
           <h1 className="user-settings-header-title">User Settings</h1>
         </div>

         <div className="settings-card">
           <h3>Cover Image</h3>
            <img className="profile-background-image user-settings-bkg-img" src={Post}  alt="bkg image"/>
            <div className="settings-action-container">
              <button  onClick={handleCoverPhotoInput} className="browse-img-btn">
                <FontAwesomeIcon icon={faImages}  className="browse-img-icon"/>
                 	<span className="browse-btn-text"> Browse </span>
              </button>
              <input type="file" ref={hiddenCoverPhotoInput} style={{"display":"none"}}/>

              <Button variant="contained" className="btn" color="primary">
                Save!
              </Button>
            </div>
         </div>

         <div className="settings-card">
           <h3>Profile Image</h3>
          <img className="person-avatar-profile user-settings-person-main-photo" src={userProfilePhoto}/>
            <div className="settings-action-container user-main-image-btn">
            <button onClick={handleProfilePhotoInput} className="browse-img-btn">
              <FontAwesomeIcon icon={faImages} className="browse-img-icon"/>
               Browse
            </button>
            <input type="file" ref={hiddenProfilePhotoInput} style={{"display":"none"}}/>
              <Button  variant="contained" className="btn" color="primary">
                Save!
              </Button>
            </div>
         </div>

         <div className="settings-card">
          <h3>Username</h3>
            <div className="change-name-input">

              <TextField
               id="outlined-multiline-static"
               label="Profile Name"
               multiline
               style={{width:"80%"}}
               rows={2}
               value="Person Name"
               />
               <Button variant="contained" className="btn" color="primary">
                 Change
               </Button>
            </div>
         </div>

         <div className="settings-card">
          <h3>Description</h3>
            <div className="change-name-input">

            <TextField
             id="outlined-multiline-static"
             label="Profile Description"
             multiline
             style={{width:"80%"}}
             rows={2}
             value="Details"
             />
               <Button variant="contained" className="btn" color="primary">
                 Change
               </Button>
            </div>
         </div>

      </div>
    )
}

export default Settings;
