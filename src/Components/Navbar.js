import React from 'react';
import '../Styles/navbar.css';
import {Link} from 'react-router-dom';

const Navbar = ()=>{

  return(
    <nav className='navBar'>
      <p className='mainLogo'>PeachPen</p>
      <ul className='navList'>
        <li className='navItem'><Link className='linkStyle' to='/login'>Login</Link></li>
        <li className='navItem'><Link className='linkStyle' to='/login'>About</Link></li>
        <li className='navItem'><Link className='linkStyle' to='/login'>Sign up</Link></li>
      </ul>
    </nav>
  )
}
 
export default Navbar;
