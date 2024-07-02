import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { TbMessages } from "react-icons/tb";

function MessageForm() {
  let [cusName, SetCusName] = useState("");
  let [cusEmail, SetCusEmail] = useState("");
  let [cusQuery, SetCusQuery] = useState("");

  let inputStyle = {
    outline: "none",
    border: "none",
    boxShadow: "none",
    fontWeight: "500",
    color: "#27374d",
    fontSize: "18px",
    borderBottom: "1px solid #27374d",
    margin: "0.5em 0",
    borderRadius: "0",
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <button
        type="button"
        className="btn py-2 shadow"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        style={{
          position: "fixed",
          bottom: "10%",
          right: "5%",
          zIndex: "1",
          borderRadius: "50%",
          backgroundColor: "#f1efef ",
          color: "#27374d",
        }}
      >
        <TbMessages className="MessageIcon my-1" />
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <form
          action=""
          className="modal-dialog modal-dialog-centered"
          onSubmit={handleSubmit}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Crimpify
              </h5>
              <button
                type="button"
                className="btn formBtnStyle"
                data-bs-dismiss="modal"
                aria-label="Close"
                style={{
                  color: "#27374d",
                  border: "none",
                }}
              >
                <IoClose
                  style={{
                    width: "25px",
                    height: "25px",
                  }}
                />
              </button>
            </div>

            <div className="modal-body d-flex flex-column">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control" //after Vaildation add ClassName "is-invalid" if mail id is wrong
                  id="floatingInputValue"
                  placeholder="Name"
                  style={inputStyle}
                  value={cusName}
                  onChange={(e) => {
                    SetCusName(e.target.value);
                  }}
                />
                <label htmlFor="floatingInputValue">Name*</label>
              </div>

              <div className="form-floating">
                <input
                  type="email"
                  className="form-control" //after Vaildation add ClassName "is-invalid" if mail id is wrong
                  id="floatingInputValue"
                  placeholder="****@***.com"
                  style={inputStyle}
                  value={cusEmail}
                  onChange={(e) => {
                    SetCusEmail(e.target.value);
                  }}
                />
                <label htmlFor="floatingInputValue">Email*</label>
              </div>
              <div className="form-floating ">
                <textarea
                  maxLength={500}
                  tabIndex={1}
                  className="form-control cmdField mt-4"
                  placeholder="Leave a comment here"
                  value={cusQuery}
                  onChange={(e) => {
                    SetCusQuery(e.target.value);
                  }}
                  id="floatingTextarea"
                  style={{
                    outline: "none",
                    border: "none",
                    boxShadow: "none",
                    fontWeight: "500",
                    color: "#27374d",
                    fontSize: "18px",
                    borderBottom: "1px solid #27374d",
                    borderRadius: "0",
                    margin: "0.5em 0",
                    height: "150px",
                    overflow: "auto",
                  }}
                ></textarea>
                <label htmlFor="floatingTextarea">How Can We Help You?*</label>
              </div>
              <span style={{ fontSize: "12px" }}>
                <small>Maximam 500 Characters only*</small>
              </span>
            </div>

            <div className="modal-footer">
              <button
                type="submit"
                className="btn fw-bold "
                style={{
                  backgroundColor: "#27374d ",
                  color: "#f1efef",
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default MessageForm;
