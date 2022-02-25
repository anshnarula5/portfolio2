import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { Row, Toast, ToastContainer } from "react-bootstrap";

const Email = () => {
  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState({ text: "", type: "" });
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
    e.preventDefault();
    if (
      message.trim().length === 0 ||
      user_email.trim().length === 0 ||
      username.trim().length === 0
    ) {
      console.log("Please specify all fields");
      setShow(true);
      setAlert({ text: "Please specify all fields", type: "danger" });
    } else {
      emailjs
        .sendForm(
          "service_6a7nokb",
          "template_r29gwxa",
          "#form",
          "user_ekTuU822CTjP5kfqrKB7O"
        )
        .then(
          (result) => {
            setShow(true);
            setAlert({ text: "Mail Sent!", type: "success" });
          },
          (error) => {
            setShow(true);
            setAlert({
              text: "Something went Wrong. Please try again later",
              type: "danger",
            });
          }
        );
      setFormData({ username: "", message: "", user_email: "" });
    }
  };

  return (
    <div style={{ color: "white" }} className="row  text-center w-100 mb-5">
      <div className="col-md-12">
        <Row className="mb-4">
          <Toast
            bg={alert.type}
            className="mx-auto"
            onClose={() => setShow(false)}
            show={show}
            delay={3000}
            autohide
          >
            <Toast.Body>{alert.text}</Toast.Body>
          </Toast>
        </Row>
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
            className="btn" style={{backgroundColor : "#3a3939", color : "white"}}
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
