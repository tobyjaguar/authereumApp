import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { ethers } from 'ethers'
import Authereum from 'authereum'

const authereum = new Authereum()

let web3Provider

class App extends Component {

  async componentDidMount() {
    await authereum.login()
    web3Provider= new ethers.providers.Web3Provider(authereum.getProvider())
    //web3Provider.getBalance().then(balance => (console.log(balance)))
    authereum.getBalance().then(balance => console.log(balance))
    authereum.getAccountAddress().then(address => console.log(address))
    authereum.getLoginKey().then(key => console.log(key))
    authereum.getLoginKeyAuthSignature().then(key => console.log(key))
    authereum.isAuthenticated().then(authenticated => console.log(authenticated))

  }

  render() {
    console.log(authereum)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

      </div>
    );
  }
}

export default App;
