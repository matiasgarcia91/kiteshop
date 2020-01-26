import { hot } from 'react-hot-loader';
import React from 'react';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import { Route } from 'react-router-dom';
const App = () => (
  <div className="App">
    <Route path="/" exact component={HomePage} />
  </div>
);

export default hot(module)(App);
