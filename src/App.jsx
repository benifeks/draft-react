import "./styles/App.scss";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from "./components/About/About";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import JSinPractice from "./components/JSinPractice/JSinPractice";
import MyCourses from "./components/MyCourses/MyCourses";
import Technologies from "./components/Technologies/Technologies";
import WebsiteLayout from "./components/WebsiteLayout/WebsiteLayout";
import Bakery from "./pages/Bakery/Bakery";
import BeautyZone from "./pages/Beauty-Zone/Beauty-Zone";
import Exercises from "./pages/Exercises/Exercises";
import GGPromarket from "./pages/GGPromarket/GGPromarket";
import Lab from "./pages/Lab/Lab";
import Projects from "./pages/Projects/Projects";

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Technologies />
                  <WebsiteLayout />
                  <JSinPractice />
                  <MyCourses />
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
