/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";

import "./styles.css";
const siteProps = {
  name: "Pattapu Naresh",
  title: "MERN stack developer & AI engineer",
  email: "nareshpattapu686@gmail.com",
  gitHub: "Karesh9347",
  instagram: "microsoft",
  linkedIn: "pattapu-naresh9848",
  medium: "",
  twitter: "microsoft",
  youTube: "Code",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
