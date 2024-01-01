import React from "react";
import ReactDOM  from "react-dom/client";



const HeaderComponent = () => (
  <div id="container">
    <h1 className="heading">asdf asdf</h1>
  </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);