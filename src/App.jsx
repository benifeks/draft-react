import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Lab from "./pages/Lab/Lab";
import Exercises from "./pages/Exercises/Exercises";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import "./styles/App.scss";

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
                  {/* Другие основные секции */}
                </>
              }
            />
            <Route path="/lab" element={<Lab />} />
            <Route path="/exercises" element={<Exercises />} />
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
