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
      <div className="row py-3">
        <img src={introimg} alt="" className="col-12 col-sm-6" />
        <div className="col-12 col-sm-6 d-flex flex-column align-items-start justify-content-center">
          <h1
            className=" col-8 fw-bolder text-uppercase"
            style={{ fontSize: "40px" }}
          >
            We <br />
            make technology accessible!
          </h1>
          <p className="fs-3">Professional Technology Assistance</p>
          <button
            className="text-capitalize btn p-2 col-6 buttonStyle"
            type="button"
            style={buttonStyle}
          >
            <span className="mx-1">get in touch</span>
            <FaArrowRightLong />
          </button>
        </div>
      </div>
    </section>
  );
}

export default ContentSecOne;
