import Image from "next/image";
import React, { useState } from "react";
import { Carousel, Collapse } from "react-bootstrap";
import CButton from "../CButton";
import chatter1 from "/display/chatter-1.jpg";
import chatter2 from "/display/chatter-2.jpg";
import chatter3 from "/display/chatter-3.jpg";

const Chatter = () => {
  const [show, setShow] = useState(false);
  const [on, setOn] = useState<Boolean>(false);
  return (
    <div
      className="projectCard py-3 px-4 mb-3"
      onClick={() => {
        if (!on) {
          setShow(true);
          setOn(true);
        }
      }}
    >
      <div
        className="d-flex justify-content-between align-items-center"
        onClick={() => {
          setShow(false);
          setOn(false);
        }}
      >
        <p>Web</p>
        <p
          onClick={() => {
            setShow(false);
            setOn(false);
          }}
          className="fs-3"
        >
          {show && <i className="fa-solid fa-xmark"></i>}
        </p>
      </div>
      <h2>Chatter</h2>
      <p>
        A realtime chat-app where user can message their friends. Users can
        connect with each other and chat with them one on one.
      </p>

      <Collapse in={show}>
        <div>
          <div id="example-collapse-text">
            <Carousel variant="dark" className="px-2 py-2">
              <Carousel.Item>
                <Image
                  src={chatter1}
                  className="d-block w-100"
                  alt="..."
                  priority={true}
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src={chatter2}
                  className="d-block w-100"
                  alt="..."
                  priority={true}
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src={chatter3}
                  className="d-block w-100"
                  alt="..."
                  priority={true}
                />
              </Carousel.Item>
            </Carousel>
            This is a fully authenticated realtime messaging application. Here
            users neea to connect to other users to interact with each other.
            Socket.io is used for making chat flow real time with node.js
            backend
          </div>
          <CButton
            name="Live project"
            url="https://chatter-mern-socketio.netlify.app/"
          />
          <CButton
            name="Github"
            url="https://github.com/anshnarula5/chatter"
          />
        </div>
      </Collapse>
    </div>
  );
};

export default Chatter;
