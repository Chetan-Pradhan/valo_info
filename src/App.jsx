import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MainInfo from "./MainInfo";
import Nav from "./Nav";
import HeroBg from "./heroBg";

function App() {
  return (
    <>
      <Nav />
      <HeroBg />
      <MainInfo />
    </>
  );
}

export default App;
