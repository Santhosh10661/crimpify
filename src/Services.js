import React from "react";
import ServicesComOne from "./servicesComponents/ServicesComOne";
import ServicesComTwo from "./servicesComponents/ServicesComTwo";
import ServicesComThree from "./servicesComponents/ServicesComThree";

function Services() {
  return (
    <main style={{ background: "#f1efef" }}>
      <div className="col text-center">
        <span className="h1 ">S</span>
        <span className="h3 ">ervices</span>
      </div>
      <ServicesComOne />
      <ServicesComTwo />
      <ServicesComThree />
    </main>
  );
}

export default Services;
