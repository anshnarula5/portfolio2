import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";

const Email = () => {
  const [formData, setFormData] = useState({
    username: "",
    message: "",
    user_email: "",
  });
  const options = {
    scale: 1.2,
    speed: 600,
    max: 15,
  };
  const toast = useRef(null);
  const { username, message, user_email } = formData;
  const handleChange = ({ e }: { e: any }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = ({ e }: { e: any }) => {
    if (
      message.trim().length === 0 ||
      user_email.trim().length === 0 ||
      username.trim().length === 0
    ) {
      console.log("Please specify all fields");
    } else {
      e.preventDefault();
      emailjs
        .sendForm(
          "service_6a7nokb",
          "template_r29gwxa",
          "#form",
          "user_ekTuU822CTjP5kfqrKB7O"
        )
        .then(
          (result) => {
            console.log("Mail Sent!", result);
          },
          (error) => {
            console.log("Something went Wrong. Please try again later");
          }
        );
      setFormData({ username: "", message: "", user_email: "" });
    }
  };

  return (
    <div style={{ color: "white" }} className="row  text-center w-100">
      <div className="col-md-12">
        <h1 className="my-5">Say Hi</h1>
        <form id="form">
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
              <input
                value={username}
                onChange={(e) => handleChange({ e })}
                name="username"
                type="text"
                className="form-control"
                id="inputEmail3"
                style={{ backgroundColor: "transparent", color: "white" }}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input
                value={user_email}
                onChange={(e) => handleChange({ e })}
                name="user_email"
                type="email"
                className="form-control"
                id="inputEmail3"
                style={{ backgroundColor: "transparent", color: "white" }}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Message</label>
            <div className="col-sm-10">
              <textarea
                value={message}
                onChange={(e) => handleChange({ e })}
                name="message"
                rows={4}
                className="form-control"
                id="inputPassword3"
                style={{ backgroundColor: "transparent", color: "white" }}
              />
            </div>
          </div>
          <button
            className="btn btn-outline-primary "
            onClick={(e) => sendEmail({ e })}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Email;
