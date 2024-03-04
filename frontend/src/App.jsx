import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //   <Home />
    //   <About />
    //   <Work />
    //   <Testimonial />
    //   <Contact />
    //   <Footer />
    // </div>
    <Router path="/">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
  );
}

export default App;
