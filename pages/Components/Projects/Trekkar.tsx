import Image from "next/image";
import React, { useState } from "react";
import { Carousel, Collapse } from "react-bootstrap";
import CButton from "../CButton";
import tekkkar1 from "/display/trekkar-1.jpg";
import tekkkar2 from "/display/trekkar-2.jpg";
import tekkkar3 from "/display/trekkar-3.jpg";
import tekkkar4 from "/display/trekkar-4.jpg";

const Trekkar = () => {
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
      <h2>Trekkar</h2>
      <p>
        A full CRUD web application where user can add treks images and
        description that they have been to.
      </p>

      <Collapse in={show}>
        <div>
          <div id="example-collapse-text">
            <Carousel variant="dark" className="px-2 py-2">
              <Carousel.Item>
                <Image
                  src={tekkkar1}
                  className="d-block w-100"
                  alt="..."
                  priority={true}
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src={tekkkar2}
                  className="d-block w-100"
                  alt="..."
                  priority={true}
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src={tekkkar3}
                  className="d-block w-100"
                  alt="..."
                  priority={true}
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src={tekkkar4}
                  className="d-block w-100"
                  alt="..."
                  priority={true}
                />
              </Carousel.Item>
            </Carousel>
            Users can interact with other posts and can rate them or comment on
            them. Each trek also have a map feature which is made using mapbox
            api. Authentication is done via passport.js . Frontend is designed
            using ejs and bootstrap. Backend is managed using express and
            node.js and data is stored in Mongodb.
          </div>
          <CButton name="Live project" url="https://trekkar.herokuapp.com/" />
        </div>
      </Collapse>
    </div>
  );
};

export default Trekkar;
