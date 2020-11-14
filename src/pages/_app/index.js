import React, { Component } from 'react';
import Header from '../../component/header/header';
import { Link } from 'react-router-dom';
import Main from '../Main.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main/>
        {/* 
          TODO: firebase 앱 배포
          구성 설계
         */}
      </div>
    );
  }
}

export default App;
