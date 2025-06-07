import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Lab from "./pages/Lab/Lab";
import Exercises from "./pages/Exercises/Exercises";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import WebsiteLayout from "./components/WebsiteLayout/WebsiteLayout";
import Bakery from "./pages/Bakery/Bakery";
import GGPromarket from "./pages/GGPromarket/GGPromarket";
import BeautyZone from "./pages/Beauty-Zone/Beauty-Zone";
import JSinPractice from "./components/JSinPractice/JSinPractice";
import Projects from "./pages/Projects/Projects";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <Header />
        </header>
        <main>
          <div className="pad"></div>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <WebsiteLayout />
                  <JSinPractice />
                  <ContactForm />
                  {/* Другие основные секции */}
                </>
              }
            />
            <Route path="/lab" element={<Lab />} />
            <Route path="/exercises" element={<Exercises />} />
            <Route path="/bakery" element={<Bakery />} />
            <Route path="/ggpromarket" element={<GGPromarket />} />
            <Route path="/beauty-zone" element={<BeautyZone />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
