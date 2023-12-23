import React, { useEffect, useState } from "react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import Gmap from "./map";

function ContactUs() {
  let [WorkingHours, setWorkingHours] = useState();
  useEffect(() => {
    let listOfDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let todayInfo = new Date();
    let currentday = todayInfo.getDay();
    let result = listOfDays[currentday];

    if (result === "Sat" || result === "Sun") {
      setWorkingHours(`${result} - Closed`);
    } else {
      setWorkingHours(`${result} 09:00 am – 05:00 pm`);
    }
  }, []);
  return (
    <section className="container-fluid" style={{ background: "#f1efef" }}>
      <div className="conatiner">
        <div className="row justify-content-center align-items-center">
          {/* <h1 className="text-center text-capitalize my-2">contact us</h1> */}
          <div
            className="col-11 col-sm-8 p-4 rounded m-2 d-flex flex-column justify-content-center align-items-center"
            style={{ background: "#27374d", color: "#f1efef" }}
          >
            <p className="text-center text-capitalize">
              We love our customers, so feel free to visit during normal
              business hours.
            </p>
            <div>
              <button
                className="btn rounded-pill p-1 fw-bolder text-capitalize m-1"
                style={{ background: "#f1efef", color: "#27374d" }}
              >
                <FaWhatsapp style={{ width: "30px", height: "30px" }} />
              </button>
              <button
                className="btn rounded-pill p-1 fw-bolder text-capitalize m-1"
                style={{ background: "#f1efef", color: "#27374d" }}
              >
                <FaLinkedin
                  className=""
                  style={{ width: "30px", height: "30px" }}
                />
              </button>
            </div>
            <div className="col-12 my-4">
              <div className="col text-center">
                <h5>Address</h5>
                <p>Kumbakonam-Tamil Nadu</p>
              </div>
              <div className="col text-center">
                <h5>Today Working Hours</h5>
                <p className="m-0">{WorkingHours}</p>
                <span>
                  <small>(Avaliable Only at Mon-Fri)</small>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
