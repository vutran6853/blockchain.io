import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import DashBoard from './components/dashboard/DashBoard';


export default(
  <div>
    <Switch>
      <Route exact='/' component={ DashBoard } ></Route>
    </Switch>
  </div>
)