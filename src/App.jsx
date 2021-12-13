import Header from "./components/header/Header";

import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Resume from "./components/resume/Resume";

import "./app.scss";

import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(true);
  return (
    <div className="app">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <About />
        <Portfolio />
        <Contact />
        <Resume />
      </div>
    </div>
  );
}

export default App;
