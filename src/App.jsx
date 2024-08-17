import React from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Brand from "./components/brand/brand"
import Features from "./container/features/features"
import Header from "./container/header/header";
import WhatchatGPT3 from "./container/whatchatGPT-3/whatchatGPT3";

function App() {
  return (
    <>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatchatGPT3 />
      <Features/>
    </>
  );
}

export default App;
