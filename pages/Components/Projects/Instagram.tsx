import Image from "next/image";
import React, { useState } from "react";
import { Carousel, Collapse } from "react-bootstrap";
import CButton from "../CButton";

import insta1 from "/display/instagram-1.jpg";
import insta2 from "/display/instagram-2.jpg";
import insta3 from "/display/instagram-3.jpg";
import insta4 from "/display/instagram-4.jpg";

const Instagram = () => {
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
      <p>Mobile</p>
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
      <h2>Instagram</h2>
      <p>
        An application where users can add posts, like other's post, follow
        other users and all other features same as instagram.
      </p>
      <Collapse in={show}>
        <div>
        <div id="example-collapse-text">
          <Carousel variant="dark" className="px-5 py-2">
            <Carousel.Item>
              <Image
                src={insta1}
                className="d-block w-100"
                alt="..."
                priority={true}
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src={insta2}
                className="d-block w-100"
                alt="..."
                priority={true}
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src={insta3}
                className="d-block w-100"
                alt="..."
                priority={true}
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src={insta4}
                className="d-block w-100"
                alt="..."
                priority={true}
              />
            </Carousel.Item>
          </Carousel>
          User can also follow /unfollow each other and can interact with their
          posts This web application is fully authenticated with the use of JWT.
          Front end is made with react where state management is done using
          redux. Bootstrapis used for app design. Backend is managed using
          express and node.js and data is stored in Mongodb.
        </div>
        <CButton name = "Live Project" url = "https://instagam.herokuapp.com/" />
        <CButton name = "Github" url = "https://github.com/anshnarula5/insta-refactored" />
        </div>
      </Collapse>
    </div>
  );
};

export default Instagram;
