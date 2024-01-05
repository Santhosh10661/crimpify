import React from "react";

function ServicesComTwoSub(props) {
  let { service } = props;
  return (
    <article
      className="rounded"
      style={{
        maxHeight: service.isdescribOpen ? "2000px" : "0px",
        margin: service.isdescribOpen ? "8px 0px" : "0px",
        height: "fit-content",
        overflow: "hidden",
        transition: "0.3s ease-in-out",
        background: "#27374d",
      }}
    >
      <div className="row justify-content-center align-items-center ">
        <div className="col-6 col-sm-4 col-lg-3 py-3">
          <div
            className="col-12 shadow rounded-circle d-flex justify-content-center align-items-center"
            style={{
              aspectRatio: "1/1",
              background: service.id % 2 === 0 ? "#f4f4f2" : "#f1efef",
            }}
          >
            <img src={service.image} alt="" className="col-8" />
          </div>
        </div>
        <div
          className=" col-12 col-sm-8 col-lg-9 text-center"
          style={{ color: "#f4f4f2" }}
        >
          <p
            className="col m-3 text-center text-capitalize"
            style={{ fontWeight: "500" }}
          >
            {service.describtion}
          </p>
        </div>
      </div>
    </article>
  );
}

export default ServicesComTwoSub;
