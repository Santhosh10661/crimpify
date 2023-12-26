import React from "react";

function Footer() {
  return (
    <footer
      className="container-fluid mt-auto"
      style={{
        // position: "relative",
        // bottom: "0",
        background: "#27374d",
        color: "#f1efef",
      }}
    >
      <div className="container-xxl">
        <div className="container">
          <div className="row justify-content-center align-items-center py-5">
            <h1
              className="text-center text-uppercase"
              style={{ color: "#f1efef" }}
            >
              subscribe
            </h1>
            <p className="text-center text-capitalize">
              Sign up to hear from us about specials, sales, and events.
            </p>
            <form
              action="/"
              className="col-12 col-sm-8 col-md-6 col-lg-5 mb-5 d-flex flex-column justify-content-center align-items-center"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                className="p-2 fs-4 col-11 mb-4  "
                placeholder="Email"
                style={{
                  fontWeight: "500",
                  outline: "none",
                  background: "transparent",
                  border: "none",
                  borderBottom: "1px solid #f1efef",
                  color: "#f1efef",
                }}
              />
              <button
                className="col-8 col-sm-6 col-md-4 text-capitalize fw-bold btn rounded-pill p-2 col-3 buttonStyle"
                type="button"
                style={{ background: "#f1efef", color: "#27374d" }}
              >
                <span className="mx-1">Sign Up</span>
              </button>
            </form>
            <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center text-center">
              <span
                className="h5 mx-1 text-center text-sm-end text-capitalize border-2 border-top"
                style={{
                  width: "fit-content",
                  borderColor: "#f1efef",
                  color: "#f1efef",
                }}
              >
                elevating our support
              </span>
              <span
                className="h5 m-1 text-center text-sm-start pb-1 text-capitalize border-2 border-bottom"
                style={{
                  width: "fit-content",
                  borderColor: "#f1efef",
                  color: "#f1efef",
                }}
              >
                magic with zoho's finest
              </span>
            </div>
            <div
              className="my-5  d-flex flex-column justify-content-center align-items-center "
              style={{
                borderRadius: "50px 10px 50px 10px",
                background: "#f1efef",
                color: "#27374d",
                width: "fit-content",
              }}
            >
              <span className="h4">"Powered By"</span>
              <h3 className="m-0 mx-4 fw-bold text-uppercase">Zoho Assist</h3>
            </div>
            <p className="text-center text-capitalize fst-italic">
              <small>
                copyrights &copy; 2023 crimpify - all rights reserved
              </small>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
