import React,{useRef,useState,useContext,useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserCog} from '@fortawesome/free-solid-svg-icons';
import {faImages} from '@fortawesome/free-solid-svg-icons';
import "../Styles/Settings.css";
import Post from "../images/dummy-post.jpg";
import Button from '@material-ui/core/Button';
import userProfilePhoto from "../images/person.jpg";
import TextField from '@material-ui/core/TextField';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import {AppContext} from "../Context/AppContext";


const Settings = ()=>{

const ContextApp = useContext(AppContext);
const inputFile = useRef(null);
const hiddenCoverPhotoInput = useRef(null);
const hiddenProfilePhotoInput = useRef(null);
const coverPhotoImage = useRef(null);
const profilePhotoImage = useRef(null);

const handleCoverPhotoInput = (evt)=>{
  hiddenCoverPhotoInput.current.click();
}

const handleProfilePhotoInput = (evt)=>{
  hiddenProfilePhotoInput.current.click()
}

const [countryFrom,setCountryFrom] = useState("");
const [regionFrom,setRegionFrom] = useState("");
const [countryLives,setCountryLives] = useState("");
const [regionLives,setRegionLives] = useState("");
const [username,setUsername] = useState("");
const [description,setDescription] = useState("");
const [coverPictureErr, setCoverPictureErr] = useState(false);
const [profilePictureErr, setProfilePictureErr] = useState(false);
const [successProfileImg,setSuccessProfileImg] = useState(false);
const [successCoverImg,setSuccessCoverImg] = useState(false);

const handleSetUsername = (txt)=>{
    const val = txt.target.value;
    setUsername(val);
}

const handleDescription = (txt)=>{
  const val = txt.target.value;
  setDescription(val);
}

const selectCountryFrom = (val)=> {
  setCountryFrom(val);
}

const selectRegionFrom = (val)=>{
  setRegionFrom(val);
}

const selectCountryLives = (val)=> {
  setCountryLives(val);
}

const selectRegionLives = (val)=>{
  setRegionLives(val);
}


function imageSize(url) {
    const img = document.createElement("img");

    const promise = new Promise((resolve, reject) => {
      img.onload = () => {
        const width  = img.naturalWidth;
        const height = img.naturalHeight;
        resolve({width, height});
      };
      img.onerror = reject;
    });
    img.src = url;
    return promise;
}

const uploadImage =(imgData,imgType)=>{
    const userId = ContextApp.user.user._id;



}

const handleCoverImageUpload = async(evt)=>{

  setCoverPictureErr(false);
  const file = evt.target.files[0];
  const renderedData = URL.createObjectURL(file);
  coverPhotoImage.current.src = renderedData;
  const imageDimensions = await imageSize(renderedData);
  const fileReader = new FileReader();
  fileReader.readAsDataURL(file);
  fileReader.onload = ev=>{
    console.log(imageDimensions);
    console.log()
    if(imageDimensions.width<=imageDimensions.height || imageDimensions.width<1000)
    {
      setCoverPictureErr(true);

    } else{
        uploadImage(ev.target.result.split("base64,")[1],"cover");
    }
  }

}


 if(ContextApp.user.user)
 {
   return(
     <div className="settings-container">
        <div className="user-settings-header">
        <FontAwesomeIcon icon={faUserCog} className="settings-header-icon" />
          <h1 className="user-settings-header-title">User Settings</h1>
        </div>

        <div className="settings-card">
          <h3>Cover Image</h3>
           <img className="profile-background-image user-settings-bkg-img" ref={coverPhotoImage} src={`data:image/jpeg;base64,${ContextApp.user.user.coverPicture}`}  alt="bkg image"/>
            <p className="sub-note"><em>Note:</em> Image width must be greater than image height and width should be greater than 1000px</p>
            {coverPictureErr &&  <p className="img-load-error">Image DOES NOT RESPECT REQUIREMENTS ( SEE NOTE ABOVE)</p>}
            {successCoverImg && <p className="img-load-success">Image uploaded successfully!</p> }
           <div className="settings-action-container">

             <button  onClick={handleCoverPhotoInput} className="browse-img-btn">
               <FontAwesomeIcon icon={faImages}  className="browse-img-icon"/>
                 <span className="browse-btn-text"> Browse </span>
             </button>
             <input type="file"   accept=".jpg, .jpeg, .png" ref={hiddenCoverPhotoInput} onChange={handleCoverImageUpload} style={{"display":"none"}}/>

             <Button disabled={coverPictureErr} variant="contained" className="btn" color="primary">
               Save!
             </Button>
           </div>
        </div>

        <div className="settings-card">
          <h3>Profile Image</h3>
         <img className="person-avatar-profile user-settings-person-main-photo" ref={profilePhotoImage} src={`data:image/jpeg;base64,${ContextApp.user.user.profilePicture}`}/>
          <div className="img-sub-msg">
            <p className="sub-note" style={{marginBottom:"0px"}}><em>Note:</em> Image height and image width must be the same</p>
            {profilePictureErr &&  <p style={{marginBottom:"20px"}} className="img-load-error">Image DOES NOT RESPECT REQUIREMENTS ( SEE NOTE ABOVE)</p>}
            {successProfileImg && <p className="img-load-success">Image uploaded successfully!</p>}
          </div>
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
              value={username}
              onChange = {handleSetUsername}
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
            value={description}
            onChange={handleDescription}
            />
              <Button variant="contained" className="btn" color="primary">
                Change
              </Button>
           </div>
        </div>

        <div className="settings-card">
         <h3>From</h3>
           <div className="change-name-input">
         <CountryDropdown
           value={countryFrom}
             onChange={(val) =>{selectCountryFrom(val)}} />
           <RegionDropdown
             country={countryFrom}
             value={regionFrom}
             onChange={(val) => {selectRegionFrom(val)}} />
              <Button variant="contained" className="btn btn-left-margin"  color="primary">
                Change
              </Button>
           </div>
        </div>
        <div className="settings-card">
         <h3>Lives in</h3>
           <div className="change-name-input">
         <CountryDropdown
           value={countryLives}
             onChange={(val) =>selectCountryLives(val)} />
           <RegionDropdown
             country={countryLives}
             value={regionLives}
             onChange={(val) => selectRegionLives(val)} />
              <Button variant="contained" className="btn btn-left-margin"  color="primary">
                Change
              </Button>
           </div>
        </div>
        <div className="settings-card">
         <h3>Relationship Status</h3>
           <div className="change-name-input">
             <input type="text"/>
             <select className="settings-select-input" name="relationship-status">
               <option value="Married">Married</option>
               <option value="Single">Single</option>
               <option value="In a relationship">In a relationship</option>
             </select>
              <Button variant="contained" className="btn "  color="primary">
                Change
              </Button>
           </div>
        </div>

        <div className="settings-card">
         <h3>Studied at</h3>
           <div className="change-name-input">

           <TextField
            id="outlined-multiline-static"
            label="Where did you studied?"
            multiline
            style={{width:"80%"}}
            rows={2}
            value="University"
            />
              <Button variant="contained" className="btn" color="primary">
                Change
              </Button>
           </div>
        </div>

     </div>
   )

 } else {
   return (<div></div>);
 }


}

export default Settings;
