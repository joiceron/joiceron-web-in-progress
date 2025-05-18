import "./App.scss";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import AboutMePage from "./pages/AboutMePage/AboutMePage";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";
import ContactPage from "./pages/ContactPage/ContactPage";

function App() {

  return (
    <>
      <Router>
        <NavBar />
        <Hero />
        <main className="main">
          <Routes>
            <Route path="/" element={<PortfolioPage />} />
            <Route path="/AboutMe" element={<AboutMePage />} />
            <Route path="/Contact" element={<ContactPage />} />
            <Route path="*" element={<PortfolioPage />} />
          </Routes>{" "}
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
