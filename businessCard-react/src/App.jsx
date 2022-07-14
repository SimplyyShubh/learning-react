import { useState } from "react";
import Info from "./components/Info";
import About from "./components/About"
import Footer from"./components/Footer"

function App() {
  return (
    <div className="container">
      <div className="card">
        <Info />
        <About></About>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
