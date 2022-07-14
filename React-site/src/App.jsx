import React from "react";

import Navbar from './components/Navbar'
import Main from './components/Main'

export default (p) => {
  return (
    <div className="container">
        <Navbar></Navbar>
        <Main></Main>
    </div>
  );
};
