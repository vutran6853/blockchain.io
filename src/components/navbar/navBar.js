import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import './navbar.css'

let navBar = () => {
  return(
    <div className='navBarBox'>
      <Link to='/'>
        <Button>Home</Button>
      </Link>
      <Link to='/'>
        <Button>Wallet</Button>
      </Link>
      <Link to='/'>
        <Button>Data</Button>
      </Link>
    </div>
  )  
}

export default navBar;