import React from "react";
import zohoLogo from "../svg/ZOHO New.svg";

function ContentSecTwo(props) {
  return (
    <section
      className="container-fluid rounded"
      style={{ background: "#27374d" }}
    >
      <div className="row p-1">
        <div
          className="col-12 col-sm-6 mb-1 ms-sm-0 d-flex justify-content-center align-items-center"
          style={{ color: "#f1efef" }}
        >
          <span
            className="h3 text-uppercase fw-bold m-0"
            style={{ height: "fit-content" }}
          >
            <span className="h1">Empowering</span> <br /> Seamless Remote
            Support
          </span>
        </div>
        <div
          className="col-12 col-sm-6 d-flex justify-content-center align-items-center"
          style={{ borderRadius: "50px 10px 10px 50px", background: "#f1efef" }}
        >
          <img
            src={zohoLogo}
            alt=""
            className="mb-3 mx-1"
            style={{ width: "150px", height: "80px" }}
          />
          <aside className="text-center mx-1">
            <span className="m-0 h3 text-uppercase fw-bolder">"zoho"</span>
            <br />
            <span className="m-0 fs-6 text-capitalize fw-bolder">
              authorized partner
            </span>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default ContentSecTwo;
