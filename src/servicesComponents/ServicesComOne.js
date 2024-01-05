import React from "react";
import serviceIntro from "../svg/undraw_dev_productivity_re_fylf.svg";

function ServicesComOne() {
  return (
    <div className="container-fluid">
      <div className="container-xxl">
        <div className="row py-2 position-relative">
          <img src={serviceIntro} alt="" className="col-12 col-sm-5" />
          <div className="col-12 col-sm-7 p-0 text-center d-flex flex-column justify-content-center align-items-center">
            <h3
              className="text-capitalize px-3 py-2 mx-auto my-4"
              style={{
                backgroundColor: "#27374d",
                color: "#f1efef",
                width: "fit-content",
                borderRadius: "10px 30px 10px 30px",
              }}
            >
              managed iT services
            </h3>
            <p className="text-capitalize" style={{ fontWeight: "600" }}>
              Discover the power of seamless IT solutions on our Managed
              Services platform. Our dedicated team ensures peak performance
              through proactive monitoring and swift issue resolution. With a
              focus on security and scalability, we provide hassle-free IT
              management, propelling your business forward with a reliable and
              agile infrastructure. Partner with us for expert care and
              prioritize your success in the digital landscape.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesComOne;
