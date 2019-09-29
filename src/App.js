import React, { Component } from 'react';
import { enquireScreen } from 'enquire-js';
import logo from './logo.svg';
import LandPage from './landPage/data.source';
import Header from './landPage/Nav0';
import Footer from './landPage/Footer1';
import './App.css';

import {
  Nav00DataSource,
  Footer10DataSource,
} from './landPage/data.source.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: true,
    };
  }

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
  }

  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
      <>
        <Header dataSource={Nav00DataSource} isMobile={this.state.isMobile} />
        {this.props.children}
        <Footer dataSource={Footer10DataSource} isMobile={this.state.isMobile} />
      </>
    )
  }
}

export default App;
