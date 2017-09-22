import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import PlayListForm from './PlayListForm.js';
import PlayList from './PlayList.js';
import NavBar from './NavBar.js';


export default class App extends Component {
  render() {

    return (

      <div className="container-fluid">
        <NavBar/>
        <PlayListForm/>
        <PlayList/>
      </div>
    );
  }
}
