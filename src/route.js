import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import DashBoard from './components/dashboard/DashBoard';
import Result from './components/result/Result';

export default(

    <Switch>
      <Route exact path='/' component={ DashBoard } ></Route>
      <Route path='/result' component={ Result } ></Route>
    </Switch>

)