import React, { Component } from 'react';
import {Page, Button, Toolbar} from 'react-onsenui';
import {notification} from 'onsenui';
import logo from './logo.svg';
//import './App.css';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

//var React = require('react'); //duplicate declaration. Not needed
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');

//document.write('<link rel="stylesheet" href="node_modules/onsenui/css/onsenui.css">');


    var App = React.createClass({
       handleClick: function() {
        ons.notification.alert('Hello world!');
      },

      render: function() {
        return (
          <Ons.Page>
            <Ons.Button onClick={this.handleClick}>Tap me!</Ons.Button>
          </Ons.Page>
        );
      }
    });

    //const app = document.getElementById("root");
    ReactDOM.render(<App/>, document.getElementById('root'));


//var React = require('react'); //Is a duplicate declaration of React




export default App;