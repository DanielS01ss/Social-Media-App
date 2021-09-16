import React ,{useState, useEffect,useContext} from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import "../Styles/feedNavbar.css";
import {faTimes} from '@fortawesome/free-solid-svg-icons';
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
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {faGift} from '@fortawesome/free-solid-svg-icons';
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons';
import {faComments} from '@fortawesome/free-solid-svg-icons';
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faCog} from '@fortawesome/free-solid-svg-icons';
import {faDoorOpen} from '@fortawesome/free-solid-svg-icons';
import Person from "../images/person.jpg";
import Birthday from '../images/gift-box.png';
import {Link} from "react-router-dom";
import axios from "axios";
import {DELETE_TOKEN_URL} from "../Endpoints/API_ENDPOINTS.js";
import {AppContext} from "../Context/AppContext";
import {useHistory} from "react-router-dom";
import {clearCookies} from "../utility-functions/utility-functions.js";


const useStyles = makeStyles((theme) => ({
 grow: {
   flexGrow: 1,
 },
 menuButton: {
   marginRight: theme.spacing(2),
 },
 title: {
   display: 'none',
   [theme.breakpoints.up('sm')]: {
     display: 'block',
   },
 },
 search: {
   position: 'relative',
   borderRadius: theme.shape.borderRadius,
   backgroundColor: alpha(theme.palette.common.white, 0.15),
   '&:hover': {
     backgroundColor: alpha(theme.palette.common.white, 0.25),
   },
   marginRight: theme.spacing(2),
   marginLeft: 0,
   width: '100%',
   [theme.breakpoints.up('sm')]: {
     marginLeft: theme.spacing(3),
     width: 'auto',
   },
 },
 searchIcon: {
   padding: theme.spacing(0, 2),
   height: '100%',
   position: 'absolute',
   pointerEvents: 'none',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
 },
 inputRoot: {
   color: 'inherit',
 },
 inputInput: {
   padding: theme.spacing(1, 1, 1, 0),
   // vertical padding + font size from searchIcon
   paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
   transition: theme.transitions.create('width'),
   width: '100%',
   [theme.breakpoints.up('md')]: {
     width: '20ch',
   },
 },
 sectionDesktop: {
   display: 'none',
   [theme.breakpoints.up('md')]: {
     display: 'flex',
   },
 },
 sectionMobile: {
   display: 'flex',
   [theme.breakpoints.up('md')]: {
     display: 'none',
   },
 },
}));

export default function PrimarySearchAppBar() {
 const classes = useStyles();
 const [anchorEl, setAnchorEl] = React.useState(null);
 const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

 const isMenuOpen = Boolean(anchorEl);
 const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

 const handleProfileMenuOpen = (event) => {
   setAnchorEl(event.currentTarget);

 };

 const handleMobileMenuClose = () => {
   setMobileMoreAnchorEl(null);
 };

 const history = useHistory();
 const handleLogout = ()=>{
  if(document.cookie)
  {
    const refreshTk = document.cookie.split(";")[1].split("=")[1];
    clearCookies();
    AppContextData.isLoggedIn = false;
    const reqData = {
      token:refreshTk
    }

    axios({
      method:'delete',
      url:DELETE_TOKEN_URL,
      data:reqData
    }).then(resp=>{
      console.log(resp);
    }).catch(err=>{
      console.log(err);
    });
  }
  else {
    console.log("No cookies today!");
  }

  history.push("/");
 }


 const handleMenuClose = (evt) => {
   console.log(evt.target.textContent);
   if(evt.target.textContent == 'Logout')
   {

   }
   setAnchorEl(null);
   handleMobileMenuClose();
 };

 const handleMobileMenuOpen = (event) => {
   setMobileMoreAnchorEl(event.currentTarget);
 };

 const handleNotificationsMenu = ()=>{
    ///for mobile menu we have : handleMobileMenuClose -<< it is the actual function name
    ///under 960px we have the menu for mobile rendered
    if(window.innerWidth<960)
    {
      handleMobileMenuClose();
    }
    setRenderNotifications(!renderNotifications);
 }

 const handleMessagesMenu = ()=>{
   if(window.innerWidth<960)
   {
     handleMobileMenuClose();
   }
   setRenderMessages(!renderMessages);
 }

 const menuId = 'primary-search-account-menu';
 const renderMenu = (
   <Menu

     anchorEl={anchorEl}
     anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
     id={menuId}
     keepMounted
     transformOrigin={{ vertical: 'top', horizontal: 'right' }}
     open={isMenuOpen}
     onClose={handleMenuClose}
   >
     <MenuItem onClick={handleMenuClose} name="Profile"><FontAwesomeIcon icon={faUser} style={{marginRight:"10"}}/> <Link style={{textDecoration:"none",color:"#000"}} to="/user/profile"> Profile</Link></MenuItem>
     <MenuItem onClick={handleMenuClose} name="Settings"><FontAwesomeIcon icon={faCog} style={{marginRight:"10"}}/> <Link style={{textDecoration:"none",color:"#000"}} to="/user/settings"> Settings </Link></MenuItem>
     <MenuItem onClick={handleMenuClose} name="Logout" onClick={handleLogout}><FontAwesomeIcon icon={faDoorOpen} style={{marginRight:"10"}}/> Logout </MenuItem>
   </Menu>
 );

 const mobileMenuId = 'primary-search-account-menu-mobile';
 const renderMobileMenu = (
   <Menu
     anchorEl={mobileMoreAnchorEl}
     anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
     id={mobileMenuId}
     keepMounted
     transformOrigin={{ vertical: 'top', horizontal: 'right' }}
     open={isMobileMenuOpen}
     onClose={handleMobileMenuClose}
   >
     <MenuItem onClick={handleMessagesMenu}>
       <IconButton aria-label="show 4 new mails" color="inherit">
         <Badge badgeContent={4} color="secondary">
           <MailIcon />
         </Badge>
       </IconButton>
       <p>Messages</p>
     </MenuItem>
     <MenuItem onClick={handleNotificationsMenu}>
       <IconButton aria-label="show 11 new notifications"  color="inherit">
         <Badge badgeContent={11} color="secondary">
           <NotificationsIcon />
         </Badge>
       </IconButton>
       <p>Notifications</p>
     </MenuItem>
     <MenuItem onClick={handleProfileMenuOpen}>
       <IconButton
         aria-label="account of current user"
         aria-controls="primary-search-account-menu"
         aria-haspopup="true"
         color="inherit"
       >
         <img src={Person} className="person-icon-nav"/>
       </IconButton>
       <p>Profile</p>
     </MenuItem>
   </Menu>
 );


  const [open, setOpen] = useState(false);

  const toggleDrawer = ()=>{
    setOpen(!open);
  }

  const handleDrawerAtResize = ()=>{
    if(window.innerWidth>=1200)
      setOpen(false);
  }


  const notifications = [];
  const [renderHamMenu,setRenderHamMenu] = useState(true);
  const [renderNotifications, setRenderNotifications] = useState(false);
  const [renderMessages,setRenderMessages] = useState(false);
  const [renderHomeBtn,setRenderHomeBtn] = useState(false);

  useEffect(()=>{
    window.addEventListener("resize",handleDrawerAtResize);
    if(window.location.pathname == "/user/profile")
    {
      setRenderHamMenu(false);
    } else {
      setRenderHamMenu(true);
    }

    if(window.location.pathname != "/user/feed")
    {
      setRenderHomeBtn(true);
    } else {
      setRenderHamMenu(false);
    }


    console.log(window.location.pathname);

    return ()=>{

      window.removeEventListener("resize",handleDrawerAtResize);

    }
  })

 const AppContextData = useContext(AppContext);

 return (
   <div className={classes.grow}>
     <AppBar position="static"  style={{
        position:"fixed",

        background: "#a64bf4 !important",
        background: "-webkit-linear-gradient(right, #00dbde, #fc00ff, #00dbde, #fc00ff) !important",
        background: "-o-linear-gradient(right, #00dbde, #fc00ff, #00dbde, #fc00ff) !important",
        background: "-moz-linear-gradient(right, #00dbde, #fc00ff, #00dbde, #fc00ff) !important",
        background: "linear-gradient(right, #00dbde, #fc00ff, #00dbde, #fc00ff) !important"
      }}>
       <Toolbar>
       {/* This is the drawer button */}
   {renderHamMenu && <IconButton
      edge="start"
      className={`${classes.menuButton} sidebar`}
      color="inherit"
      aria-label="open drawer"
      onClick ={toggleDrawer}
    >
      <MenuIcon />
    </IconButton> }



      {/* This is the drawer button */}
         <Typography className={classes.title} variant="h6" noWrap>
           Peach Pen
         </Typography>
         <div className={classes.search}>
           <div className={classes.searchIcon}>
             <SearchIcon />
           </div>
           <InputBase
             placeholder="Search…"
             classes={{
               root: classes.inputRoot,
               input: classes.inputInput,
             }}
             inputProps={{ 'aria-label': 'search' }}
           />
         </div>

         { renderHomeBtn  &&
           <div style={{display:"flex",flexDirection:"row"}}>
            <FontAwesomeIcon style={{marginTop:"8"}} icon = {faHome} className="home-icon"/>
            <Link to='/user/feed' style={{textDecoration:"none"}}className="home-page-link">Home</Link>
          </div>
        }

         <div className={classes.grow} />
         <div className={classes.sectionDesktop}>
           <IconButton aria-label="show 4 new mails" color="inherit" onClick={handleMessagesMenu}>
             <Badge badgeContent={1} color="secondary">
               <MailIcon />
             </Badge>
           </IconButton>
           <IconButton aria-label="show 17 new notifications" onClick={handleNotificationsMenu} color="inherit">
             <Badge badgeContent={17} color="secondary">
               <NotificationsIcon />
             </Badge>
           </IconButton>
           <IconButton
             edge="end"
             aria-label="account of current user"
             aria-controls={menuId}
             aria-haspopup="true"
             onClick={handleProfileMenuOpen}
             color="inherit"
           >
           <img src={`data:image/jpeg;base64,${AppContextData.user.profilePicture}`} className="person-icon-nav"/>
           </IconButton>
         </div>
         <div className={classes.sectionMobile}>
           <IconButton
             aria-label="show more"
             aria-controls={mobileMenuId}
             aria-haspopup="true"
             onClick={handleMobileMenuOpen}
             color="inherit"
           >
             <MoreIcon />
           </IconButton>
         </div>
       </Toolbar>
     </AppBar>
     {renderMobileMenu}
     {renderMenu}

    {
      renderNotifications &&
      <div className="navbar-dropdown">

       <p className="navbar-dropdown-title">Notitifications</p>
        { notifications.length === 0 ? <p className="no-notifications">No new notifications</p> :
        <div className="notifications-body">
          <div className="notification-item"><img className="notifications-photo" src={Person}/> <img src={Birthday} className="notification-birtday-icon"/> <span className="notification-text"> X is celebrating his/her birthday</span></div>
          <div className="notification-item"><img className="notifications-photo" src={Person}/> <FontAwesomeIcon icon={faThumbsUp} className="notification-icon notification-like"/> <span className="notification-text"> Liked your post</span></div>
          <div className="notification-item"><img className="notifications-photo" src={Person}/> <FontAwesomeIcon icon={faComments} className="notification-icon notification-comment"/> <span className="notification-text"> Commented at your post</span></div>
          <div className="notification-item"><img className="notifications-photo" src={Person}/> <FontAwesomeIcon icon={faPlusSquare} className="notification-icon notification-follow"/> <span className="notification-text"> Started to follow you</span></div>
        </div>
        }
        <div className="notifications-bottom-dialog"><p className="close-dialog-text" onClick={handleNotificationsMenu}>Close notifications</p> {notifications.length>0 && <p className="notifications-delete-text">Delete all notifications <FontAwesomeIcon icon={faTrash} className="notifications-delete-icon"/></p>}</div>

    </div>
    }

    {renderMessages &&
      <div className="navbar-dropdown">
          <p className="navbar-dropdown-title">Messages</p>
            <FontAwesomeIcon icon ={faUserFriends} className="no-message-icon"/>
           <p className="no-messages-text">No messages. Go and socialize with friends</p>
           <div className="notifications-bottom-dialog"><p className="close-dialog-text" onClick={handleMessagesMenu}>Close notifications</p></div>
      </div>
    }

     <div className={open? "hidden-menu ": "hidden-menu hidden"}>
        <FontAwesomeIcon icon={faTimes} className="close-btn" onClick={toggleDrawer}/>


        <div className="item-container item-large">
          <FontAwesomeIcon icon={faCommentDots} className="icon-container-ham-menu"/>
          < span className="inline-ham-menu">Chats</span>
        </div>


       <div className="item-container item-large">
         <FontAwesomeIcon icon={faQuestionCircle} className="icon-container-ham-menu"/>
         <span className="inline-ham-menu">Questions</span>
       </div>

     </div>
   </div>
 );
}
