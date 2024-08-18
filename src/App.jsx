import React from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Brand from "./components/brand/brand"
import Features from "./container/features/features"
import Header from "./container/header/header";
import WhatchatGPT3 from "./container/whatchatGPT-3/whatchatGPT3";
import Possibility from "./container/possibility/possibility"
import Blog from "./container/blog/blog"
import Footer from "./container/footer/footer"
import CTA from "./components/cta/cta"

function App() {
  return (
    <>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatchatGPT3 />
      <Features />
      <Possibility />
      <CTA/>
      <Blog />
      <Footer />
    </>
  );
}

export default App;
