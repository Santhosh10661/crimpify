import "./App.css";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";
import Services from "./Services";
import About from "./About";
import ContactUs from "./Contact us";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<Content />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
