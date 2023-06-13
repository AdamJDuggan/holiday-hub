import React from "react";
// // Components
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Survey from "./components/Survey";

function App() {
  return (
    <>
      <Navbar />
      <Survey />
      <Landing />
      <section className="h-[100vh]">1</section>
      <section className="h-[100vh] bg-dark text-light">1</section>
    </>
  );
}

export default App;
