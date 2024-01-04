import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { Route, Routes, useNavigate } from "react-router-dom";
import Services from "./Services";
import About from "./About";
// import ContactUs from "./Contact us";

function App() {
  const navigate = useNavigate();

  // Redirect to the desired default route ("/" in this case)
  useEffect(() => {
    navigate("/", { replace: true });
  }, []);

  return (
    <div className="App d-flex flex-column">
      <Header />
      <Routes>
        {/* Default route for the home page */}
        <Route path="/" element={<Content />} />
        {/* Other routes */}
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<ContactUs />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
