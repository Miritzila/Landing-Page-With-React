//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import Navbar from "./component/Navbar.jsx";
import Card from "./component/Card.jsx";
import Jumbotron from "./component/Jumbotron.jsx";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
