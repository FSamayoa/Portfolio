import "./App.css";
import Home from "./components/home/home";
import Footer from "./components/footer/footer";
import Nav from "./components/nav/Nav";
import Contact from "../src/components/Contact/Contact";
import About from "./components/about/About"
import Projects from "./components/projec/Projects";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    
    <div>
      <Nav />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/acerca" element={<About />} />
        <Route path="/proyectos" element={<Projects />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
