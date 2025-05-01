import "./App.scss";
import { useState } from "react";
import viteLogo from "/Logo.png";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import AboutMe from "./components/AboutMe/AboutMe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="*" element={<Hero />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
