import "./App.css";
import React from "react";

import backgroundImg1 from "./images/background image 1.gif";
import backgroundImg2 from "./images/background image 2.gif";

function App() {
  return (
    <div className="App">
      <header
        className="App-header h-dvh"
        style={{ backgroundColor: "#e8e6e0" }}
      >
        <div class="md:grid md:grid-cols-5 ">
          <div class="">
            <img class={``} alt="" src={backgroundImg1} />
          </div>
          <div
            class="col-span-3 flex justify-center place-items-center md:h-full h-96"
            style={{ backgroundColor: "#ffffff" }}
          >
            To Be Continue!
          </div>
          <div class="">
            <img class={``} alt="" src={backgroundImg2} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
