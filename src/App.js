import { useState } from 'react';
import './App.css';
import Plx from "react-plx";
import MainMint from './MainMint';
import NavBar from './NavBar';

function App() {

  const [accounts, setAccounts] = useState([]);

  return (
    <div>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 800,
            easing: "ease-in",
            properties: [
              {
                startValue: 1,
                endValue: 3.2,
                property: "scale"
              }
            ]
          }
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          zIndex: 100
        }}
      >
        <img style={{ width: "100%" }} src={require("./assets/background/made-mist.png")} alt="foreground" />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 900,
            properties: [
              {
                startValue: 1,
                endValue: 1.18,
                property: "scale"
              }
            ]
          }
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%"
        }}
      >
        <img style={{ width: "100%" }} src={require("./assets/background/nft-galaxy.png")} alt="background" />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 300,
            properties: [
              {
                startValue: 1,
                endValue: 0,
                property: "opacity"
              }
            ]
          }
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: "12vw",
          width: "100%"
        }}
      >
        <img
          style={{
            width: "45vw"
          }}
          src={require("./assets/background/standard-made.png")}
          alt="made"
        />
      </Plx>
      <div
        style={{
          position: "fixed",
          lefft: 0,
          top: 0,
          zIndex: 200,
          paddingTop: "56%",
          height: "400vh",
          width: "100%"
        }}
      >
        <Plx
          parallaxData={[
            {
              start: 0,
              end: 780,
              properties: [
                {
                  startValue: 0,
                  endValue: 1,
                  property: "opacity"
                }
              ]
            }
          ]}
          style={{
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            position: "fixed",
            zIndex: 100
          }}
        >
        <div>
          <NavBar accounts={accounts} setAccounts={setAccounts} />
          <MainMint accounts={accounts} setAccounts={setAccounts} />
        </div>
      </Plx>
        <div
          style={{
            background: "#000",
            height: "100%"
          }}
        ></div>
      </div>
    </div>
  );
}

export default App;
