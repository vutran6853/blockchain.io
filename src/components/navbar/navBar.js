import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import './navbar.css'

let Navbar = (props) => {
    return (
      <div className='navBarBox'>
      <Link to='/'>
        <Button color='info'>Home</Button>
      </Link>
    </div>
    );
}

export default Navbar;
