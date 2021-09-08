import React ,{useEffect,useState} from "react"
import "../Styles/Messages.css";
import Person from "../images/person.jpg";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

const Messages = ()=>{

  const [mobileView,setMobileView] = useState(false);
  const [toggled,setToggled] = useState(false);

  const myFunction = ()=>{
    if(window.innerWidth<1000)
    {
          setMobileView(true);
          setToggled(false);
    } else{
      setMobileView(false);
      setToggled(true);
    }
  }

  const handlePersonsListToggle = ()=>{
    setToggled(!toggled);
  }
  useEffect(()=>{
    myFunction();
    window.addEventListener("resize",myFunction);
    return ()=>{
      window.removeEventListener("resize",myFunction);
    }
  },[]);

  return(
    <div className="msg-container">
    {toggled &&  <div className={mobileView? "msg-left-nav-mobile":"msg-left-nav"}>
        <div className="msg-left-close">
          <FontAwesomeIcon icon={faTimes} className="msg-left-close-btn" onClick={handlePersonsListToggle}/>
        </div>
      <p className="msg-header">Messages</p>
        <div className="msg-person-container">
          <img src={Person} className="msg-person-image"/>
          <p className="msg-person-name">Person Name</p>
          <p className="previous-msg">You: <span>Hey ce faci?</span></p>
        </div>
      </div> }


      <div className="msg-right-nav">
      <form className="msg-form" noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Send a message" variant="outlined" className="msg-input"/>
          <FontAwesomeIcon icon={faPaperPlane} className="msg-send-btn" />
      </form>
    {!toggled && mobileView && <button onClick={handlePersonsListToggle} className={mobileView?"toggle-pers-list":"not-displayed"}> <FontAwesomeIcon icon={faArrowLeft} style={{marginRight:"10"}}/>See persons <FontAwesomeIcon icon={faUser}/> </button>}
    <div className="msg-texts-container">
        <div className="box3 sb13">
          <p className="msg-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

</p>
        </div>
          <div className="box3 sb13">
            <p className="msg-text">SLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
          <div className="sb14 box3 answer">
            <p className="msg-text">Salut! Ba eu nu stiu ce sa zic, poate o fi o idee buna, poate nu o fi o idee buna, habar n-am</p>
          </div>
          <div className="sb14 box3 answer">
            <p className="msg-text">Da cu Gigel ai vorbit? El ce o zis?</p>
          </div>
      </div>


      </div>
    </div>
  )

}

export default Messages;
