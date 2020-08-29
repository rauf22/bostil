import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '@babel/polyfill';
import App from './component/app.component';
import '../dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.querySelector('#root'));
