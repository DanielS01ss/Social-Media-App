import React from 'react';
import sample from '../media/video.mp4';
import '../Styles/main.css';
import {Link} from 'react-router-dom';

const Home = () =>{

  return(
      <div className='main'>
      {/*  <video className="video-tag" autoPlay loop muted>
          <source src={sample} type="video/mp4"></source>
        </video> */}
       <div>
      </div>
      <div className="mainText">
        <p className='titleStyle'>Wanna make new friends?</p>
        <Link className='mainBtn'>Yes of course!</Link>
      </div>
      <div className="downDiv">

      </div>
      </div>
  )
}

export default Home;
