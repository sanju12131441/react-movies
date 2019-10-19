import React from 'react';
import Logo from './../../Images/Netflix-logo.png';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const NavBar = () => {
    return (
        <div className = 'outer-div'>
            <Link to=''>
                <img src = {Logo} className='logo' alt='home-screen-logo' />
            </Link>
            <nav>
                  <ul>
                      <li className='pull-right'><Button variant = 'outline-danger'><Link to="/fallbackPage">Register</Link></Button></li>
                  </ul>
            </nav>
        </div>
    )
}

export default NavBar;