import "./App.css";
import Navbar from "../navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import About from "../about/About";
import Works from "../works/Works";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
