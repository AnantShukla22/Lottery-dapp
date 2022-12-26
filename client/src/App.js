import React, { useState, useEffect } from "react";
import getWeb3 from "./getWeb3";
import Lottery from "./contracts/Lottery.json";
import "./App.css";
import Manager from "./components/Manager";
import Players from "./components/Player";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";


const App = () => {
  // setting state which has web3 and contract instance
  const [state, setState] = useState({
    web3: null,
    contract: null,
  });

  const [address, setAddress] = useState(null);

  useEffect(() => {
    const init = async () => {
      try {
        const web3 = await getWeb3();
        const networkId = await web3.eth.net.getId();   //getting networkId

        const deployedNetwork = Lottery.networks[networkId];
        //using Lottery to get the place where it is deployed
        const instance = new web3.eth.Contract(Lottery.abi, deployedNetwork && deployedNetwork.address); // here we get the instance of contract

        //  setting address of the contract
        setAddress(deployedNetwork.address)

        setState({ web3, contract: instance });
      } catch (error) {
        alert("Falied to load web3 or contract.");
        console.log(error);
      }
    };

    init();

  }, []);

  return (

    <div className="App">
      <Router>
        <Navbar />
        <Route exact path="/">
          <Intro />
        </Route>
        <Route path="/manager"  >
          <Manager state={state} />
        </Route>
        <Route path="/players" >
          <Players state={state} address={address} />
        </Route>
      </Router>
    </div>

  );
};
export default App;
