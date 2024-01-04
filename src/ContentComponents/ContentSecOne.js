import React from "react";
import introimg from "../svg/introsystem.svg";
import { FaArrowRightLong } from "react-icons/fa6";
function ContentSecOne() {
  let buttonStyle = {
    background: "#27374d",
    color: "#f1efef",
    borderRadius: "20px",
    fontWeight: "500",
  };
  return (
    <section className="container-fluid" style={{ background: "#f1efef" }}>
      <div className="container-xxl">
        <div className="row py-3">
          <img src={introimg} alt="" className="col-12 col-sm-6" />
          <div className="col-12 col-sm-6 d-flex flex-column align-items-start justify-content-center">
            <span
              className="h1 col-8 fw-bolder text-uppercase"
              style={{ fontSize: "40px" }}
            >
              We <br />
              make
              <br />
              technology
              <br /> accessible!
            </span>
            <p className="fs-4">Professional Technology Assistance</p>
            <button
              className="text-capitalize btn p-2 col-7 buttonStyle"
              type="button"
              style={buttonStyle}
            >
              <span className="mx-1">get in touch</span>
              <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContentSecOne;
