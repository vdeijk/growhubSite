import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import FooterContainer from "./components/FooterContainer/FooterContainer";
import Features from "./components/Features/Features";
import SneakPeak from "./components/SneakPeak/SneakPeak";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Features />
      <SneakPeak />
      <FooterContainer />
    </div>
  );
}

export default App;
