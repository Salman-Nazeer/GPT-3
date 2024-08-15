import React from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Header from "./container/header/header";

function App() {
  return (
    <>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
    </>
  );
}

export default App;
