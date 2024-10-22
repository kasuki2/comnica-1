import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header";
import TitlePanel from "./components/TitlePanel";
import rocket from "./assets/rocket-3d-sm.webp";
function App() {
  return (
    <>
      <div className="left-segment">
        <Header />
        <div className="left-content-wrap">
          <div className="left-part">
            <div className="vertical-wrap-1">
              <TitlePanel
                title="Comnica Signature"
                text="Digitális aláíró szolgáltatás a Comnicától"
                cls="title-panel"
              />
            </div>
          </div>
          <div className="right-part">
            <div className="vertical-wrap-2">
              <img src={rocket} alt="rocket" />
            </div>
          </div>
        </div>
      </div>
      <div className="right-segment">
        <div className="vertical-wrap-1">
          <TitlePanel
            title="Üdvözlöm a Comnica Signature-ben!"
            text="A következőkben végigvezetjük dokumentumai elfogadásán és aláírásán. 
            A folyamat több percet is igénybe vehet, ezért kérjük, csak akkor kezdje el, ha készen áll rá."
            cls="sub-panel"
          />
        </div>
      </div>
    </>
  );
}

export default App;
