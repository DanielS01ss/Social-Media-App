import React from "react";
import "../Styles/Profile.css";
import bkgImg from "../images/user-bkg.jpg";
import userProfilePhoto from "../images/person.jpg";

const Profile = () =>{

  return(
    <div>
      <div className="main-content-profile" >
        <div className="profile-data-container" >
          <img className="profile-background-image" src={bkgImg}  alt="bkg image"/>
          <img className="person-avatar-profile" src={userProfilePhoto}/>
          <p className="username"> Shara Watzhaka</p>
          <p className="user-desc">I am a book lover, and I also love skying and flying with the plane. I've always dreamed as a child to fly and to see myself being a programmer</p>
       </div>
      <div>
          <p>User Description</p>
          
      </div>
      </div>
    </div>
  )
}

export default Profile;
