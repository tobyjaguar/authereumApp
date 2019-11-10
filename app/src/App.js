import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Authereum from 'authereum';
import Web3 from 'web3';
import isValidSignature from 'is-valid-signature';

const authereum = new Authereum();
let web3Provider = new Web3(authereum.getProvider());

class App extends Component {

  async componentDidMount() {
    //web3Provider= new ethers.providers.Web3Provider(authereum.getProvider())
    //web3Provider.getBalance().then(balance => (console.log(balance)))
    //authereum.getBalance().then(balance => console.log(balance))

    //authereum.getAccountAddress().then(address => console.log(address))
    //authereum.getAuthenticatedAccount().then(address => console.log(address))

    /**
    let key = await authereum.getLoginKey();
    let address = key.publicAddress;
    console.log(`address: ${address}`);
    web3Provider.eth.personal.ecRecover('hello',
      '0x63076b86fa0dfa664be52b15b60be1216f60889c2abce73956d2a75ac84b3b247efa8c916736cf6f0e9a27026a23ec9d555d08566f29bd74f07b6859da94fba81c'
    ).then(result => console.log(result));
    **/

    //authereum.getLoginKeyAuthSignature().then(key => console.log(key))
    //authereum.isAuthenticated().then(authenticated => console.log(authenticated))
    //authereum.signWithLoginKey("hello").then(result => console.log(result))
    //authereum.signWithLoginKey("hello").then(result => console.log(result))
    //web3Provider.getBlockNumber().then(result => console.log(result))
    //console.log(web3Provider.utils)
    //web3Provider.utils.verifyMessage('hello',
    //  '0x63076b86fa0dfa664be52b15b60be1216f60889c2abce73956d2a75ac84b3b247efa8c916736cf6f0e9a27026a23ec9d555d08566f29bd74f07b6859da94fba81c'
    //)

  }

  async login() {
    await authereum.login();
    console.log("LOGIN");
  }

  async logout() {
    await authereum.logout();
    console.log("LOGOUT")
  }

  async signMessage() {
    // let signed = await authereum.signWithLoginKey("hello");
    // console.log(signed);
    // let account = await web3Provider.eth.personal.ecRecover('hello', signed);
    // console.log(account);
    // let key = await authereum.getLoginKey();
    // console.log(key);
    // console.log(account === key.publicAddress.toLowerCase());

    const account = await authereum.getAccountAddress();

    // Get a signature
    const message = web3Provider.utils.soliditySha3("Hello world")
    const signature = await web3Provider.eth.sign(message, account)

    // Check if the signature is valid
    const isValid = await isValidSignature(web3Provider, account, message, signature);
    console.log(`message: ${message}`);
    console.log(`signature: ${signature}`);
    console.log(`isvalid: ${isValid}`);
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
        <div className="Container">
          <button onClick={this.login}>login</button>
          <button onClick={this.logout}>logout</button>
          <button onClick={this.signMessage}>Sign</button>
        </div>
      </div>
    );
  }
}

export default App;
