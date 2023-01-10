import Image from "next/image";
import React, { useState } from "react";
import { Carousel, Collapse } from "react-bootstrap";
import CButton from "../CButton";
import SButton from "../SButton";

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
      <h2>Instagram</h2>
      <p className="secondaryText">
        An application where users can add posts, like other's post, follow
        other users and all other features same as instagram.
      </p>
      <Collapse in={show}>
        <div>
          <div id="example-collapse-text">
            <Carousel variant="dark" className="px-2 py-2">
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
            <p className="secondaryText">
              This is a fully functional social media platform
              that allows users to share photos and videos with their followers,
              discover new content and explore profiles of
              other users. It also includes features such as
              commenting, and liking. This platform includes a responsive design for seamless user
              experience on any device. This app aims to replicate the popular social media platform with a sleek and user-friendly interface.
            </p>
          </div>
          <CButton
            name="Github"
            url="https://github.com/anshnarula5/insta-refactored"
          />
        </div>
      </Collapse>
    </div>
  );
};

export default Instagram;
