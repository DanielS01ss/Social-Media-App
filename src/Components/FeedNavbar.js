import React ,{useState, useEffect} from 'react';
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

 const handleMenuClose = () => {
   setAnchorEl(null);
   handleMobileMenuClose();
 };

 const handleMobileMenuOpen = (event) => {
   setMobileMoreAnchorEl(event.currentTarget);
 };


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
     <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
     <MenuItem onClick={handleMenuClose}>My account</MenuItem>
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
     <MenuItem>
       <IconButton aria-label="show 4 new mails" color="inherit">
         <Badge badgeContent={4} color="secondary">
           <MailIcon />
         </Badge>
       </IconButton>
       <p>Messages</p>
     </MenuItem>
     <MenuItem>
       <IconButton aria-label="show 11 new notifications" color="inherit">
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
         <AccountCircle />
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

  const [renderHamMenu,setRenderHamMenu] = useState(true);


  useEffect(()=>{
    window.addEventListener("resize",handleDrawerAtResize);
    if(window.location.pathname == "/user/profile")
    {
      setRenderHamMenu(false);
    } else {
      setRenderHamMenu(true);
    }
    return ()=>{
      window.removeEventListener("resize",handleDrawerAtResize);
    }
  },[])

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
         <p>HomePage</p>
         <div className={classes.grow} />
         <div className={classes.sectionDesktop}>
           <IconButton aria-label="show 4 new mails" color="inherit">
             <Badge badgeContent={1} color="secondary">
               <MailIcon />
             </Badge>
           </IconButton>
           <IconButton aria-label="show 17 new notifications" color="inherit">
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
             <AccountCircle />
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
     <div className={open? "hidden-menu ": "hidden-menu hidden"}>
        <FontAwesomeIcon icon={faTimes} className="close-btn" onClick={toggleDrawer}/>
        <div className="item-container">
          <FontAwesomeIcon icon={faRss} className="icon-container-ham-menu"/>
          <span className="inline-ham-menu">Feed</span>
        </div>

        <div className="item-container item-large">
          <FontAwesomeIcon icon={faCommentDots} className="icon-container-ham-menu"/>
          < span className="inline-ham-menu">Chats</span>
        </div>

        <div className="item-container item-large">
          <FontAwesomeIcon icon={faVideo} className="icon-container-ham-menu"/>
          <span className="inline-ham-menu">Videos</span>
        </div>

        <div className="item-container item-large">
          <FontAwesomeIcon icon={faUserFriends} className="icon-container-ham-menu"/>
          <span className="inline-ham-menu">Groups</span>
        </div>

        <div className="item-container item-large">
          <FontAwesomeIcon icon={faBookmark} className="icon-container-ham-menu"/>
          <span className="inline-ham-menu">Bookmarks</span>
       </div>

       <div className="item-container item-large">
         <FontAwesomeIcon icon={faQuestionCircle} className="icon-container-ham-menu"/>
         <span className="inline-ham-menu">Questions</span>
       </div>

       <div className="item-container item-large">
         <FontAwesomeIcon icon={faBuilding} className="icon-container-ham-menu"/>
         <span className="inline-ham-menu">Jobs</span>
       </div>

       <div className="item-container item-large">
         <FontAwesomeIcon icon={faCalendar} className="icon-container-ham-menu"/>
         <span className="inline-ham-menu">Events</span>
       </div>

       <div className="item-container item-large">
         <FontAwesomeIcon icon={faGraduationCap} className="icon-container-ham-menu"/>
         <span className="inline-ham-menu">Courses</span>
       </div>
     </div>
   </div>
 );
}
