import "./App.scss";
import { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import AboutMe from "./components/AboutMe/AboutMe";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <NavBar />
        <main className="main">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/AboutMe" element={<AboutMe />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="*" element={<Hero />} />
          </Routes>{" "}
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
