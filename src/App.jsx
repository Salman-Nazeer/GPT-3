import React from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Header from "./container/header/header";
import Brand from "./components/brand/brand"

function App() {
  return (
    <>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand/>
    </>
  );
}

export default App;
