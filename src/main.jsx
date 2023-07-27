import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import Navigation from "./components/Navigation.jsx";
import Footer from "./components/Footer.jsx"; // Import Footer
import AnimatedText from "./components/AnimatedText.jsx";
import HtmlComp from "./components/3DHTML.jsx";

ReactDOM.render(
  <React.StrictMode>
    <div className="site">
      <Navigation />
      <App />
      <AnimatedText />
    </div>
    <HtmlComp />
    <Footer /> {/* Render Footer component */}
  </React.StrictMode>,
  document.getElementById("root")
);
