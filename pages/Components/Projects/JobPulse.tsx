import Image from "next/image";
import React, { useState } from "react";
import { Carousel, Collapse } from "react-bootstrap";
import CButton from "../CButton";
import SButton from "../SButton";
import jt1 from "/display/jt1.png";
import jt2 from "/display/jt2.png";
import jt3 from "/display/jt3.png";
import jt4 from "/display/jt4.png";
import demo from "/display/demo.gif";

const JobPulse = () => {
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
      <h2>JobPulse </h2>
      <p className="secondaryText">
      An intuitive job tracker application boasting a Kanban board-style dashboard, allowing users to efficiently update application statuses through simple drag-and-drop functionality.
      </p>

      <Collapse in={show}>
        <div>
          <div id="example-collapse-text">
            <Carousel variant="dark" className="px-2 py-2">
              <Carousel.Item>
                <Image
                  src={jt1}
                  className="d-block w-100"
                  alt="..."
                  priority={true}
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src={demo}
                  className="d-block w-100"
                  alt="..."
                  priority={true}
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src={jt2}
                  className="d-block w-100"
                  alt="..."
                  priority={true}
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src={jt3}
                  className="d-block w-100"
                  alt="..."
                  priority={true}
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src={jt4}
                  className="d-block w-100"
                  alt="..."
                  priority={true}
                />
              </Carousel.Item>
            </Carousel>
            <p className="secondaryText">
            The included summary feature offers graphical insights into application performance metrics such as 
            successful referrals and application distribution by company, facilitating informed decision-making 
            and strategic planning. This cohesive design streamlines the application tracking process, providing 
            users with a user-centric and comprehensive tool for managing their job applications effectively.
            </p>
          </div>
          <CButton
            name="Github"
            url="https://github.com/anshnarula5/jobTracker"
          />
        </div>
      </Collapse>
    </div>
  );
};

export default JobPulse;
