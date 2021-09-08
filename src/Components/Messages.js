import React from "react"
import "../Styles/Messages.css";
import Person from "../images/person.jpg";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';


const Messages = ()=>{


  return(
    <div className="msg-container">
      <div className="msg-left-nav">
      <p className="msg-header">Messages</p>
        <div className="msg-person-container">
          <img src={Person} className="msg-person-image"/>
          <p className="msg-person-name">Person Name</p>
          <p className="previous-msg">You: <span>Hey ce faci?</span></p>
        </div>
      </div>
      <div className="msg-right-nav">
      <form className="msg-form" noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Send a message" variant="outlined" className="msg-input"/>
          <FontAwesomeIcon icon={faPaperPlane} className="msg-send-btn" />
      </form>
      <div className="box3 sb13">
        <p className="msg-text">Salut Geroge, ce mai faci? Cum mai esti? Cum mai este viata ta? Uite astazi am fost la magazin si am stat de vorba cu Marcel, il stii tu pe Marcel ala de vorbeam noi asa si apai mi-o zis ca numai are bani sa isi plateasca rata la casa si ca ar vrea sa plece afara in Germania la un abator ca sa faca un ban</p>
      </div>
        <div className="box3 sb13">
          <p className="msg-text">Salut Geroge, ce mai faci? Cum mai esti? Cum mai este viata ta? Uite astazi am fost la magazin si am stat de vorba cu Marcel, il stii tu pe Marcel ala de vorbeam noi asa si apai mi-o zis ca numai are bani sa isi plateasca rata la casa si ca ar vrea sa plece afara in Germania la un abator ca sa faca un ban</p>
        </div>
        <div className="sb14 box3 answer">
          <p className="msg-text">Salut! Ba eu nu stiu ce sa zic, poate o fi o idee buna, poate nu o fi o idee buna, habar n-am</p>
        </div>
        <div className="sb14 box3 answer">
          <p className="msg-text">Da cu Gigel ai vorbit? El ce o zis?</p>
        </div>
      </div>
    </div>
  )

}

export default Messages;
