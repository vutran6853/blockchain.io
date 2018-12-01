import React, { Component } from 'react';
import { Link } from 'react-router-dom';

let navBar = () => {
  return(
    <div>
      <Link to='/'>
        <button>Home</button>
      </Link>
      <Link to='/'>
        <button>Wallet</button>
      </Link>
      <Link to='/'>
        <button>Data</button>
      </Link>
    </div>
  )  
}

export default navBar;