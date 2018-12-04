import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import DashBoard from './components/dashboard/DashBoard';
import SingleTransaction from './components/result/SingleTransaction';
import SingleBlock from './components/result/SingleBlock';
import LatestBlock from './components/result/LatestBlock';
import SingleAddress from './components/result/SingleAddress';

export default(
    <Switch>
      <Route exact path='/' component={ DashBoard } ></Route>
      <Route path='/result/singleTransaction' component={ SingleTransaction } ></Route>
      <Route path='/result/singleBlock' component={ SingleBlock } ></Route>
      <Route path='/result/singleAddress' component={ SingleAddress } ></Route>
      <Route path='/result/latestBlock' component={ LatestBlock } ></Route>
    </Switch>
)