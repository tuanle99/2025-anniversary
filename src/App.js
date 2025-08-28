import "./App.css";
import React from "react";
import TagCloudComponent from "./components/TagCloud.tsx";

import backgroundImg1 from "./images/background image 1.gif";
import backgroundImg2 from "./images/background image 2.gif";

// "#e8e6e0"
const primaryBackgroundColor = "#e8e6e0";
const textColor = "#ba5fb7";

function App() {
  return (
    <div className="App ">
      <header
        className="App-header h-dvh"
        style={{
          backgroundColor: primaryBackgroundColor,
          color: textColor,
        }}
      >
        <div class="md:grid md:grid-cols-5 ">
          <div class="">
            <img class={``} alt="" src={backgroundImg1} />
          </div>
          <div
            class="col-span-3 flex justify-center place-items-center md:h-full h-96"
            style={{ backgroundColor: primaryBackgroundColor }}
          >
            {/* <div className="animate-fade-down-infinite text-2xl"> */}
            <TagCloudComponent />
            {/* </div> */}
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
