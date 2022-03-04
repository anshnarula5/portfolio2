import Image from "next/image";
import React, { useState } from "react";
import { Carousel, Collapse } from "react-bootstrap";
import CButton from "../CButton";
import SButton from "../SButton";
import c1 from "/display/c-1.jpg";
import c2 from "/display/c-2.jpg";
import c3 from "/display/c-3.jpg";
import c4 from "/display/c-4.jpg";

const Countries = () => {
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
      <h2>Countries</h2>
      <p>
        A React application in which user can interact with maps and country
        flags.
      </p>

      <Collapse in={show}>
        <div>
          <div id="example-collapse-text">
            <Carousel variant="dark" className="px-2 py-2">
              <Carousel.Item>
                <Image
                  src={c1}
                  className="d-block w-100"
                  alt="..."
                  priority={true}
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src={c2}
                  className="d-block w-100"
                  alt="..."
                  priority={true}
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src={c3}
                  className="d-block w-100"
                  alt="..."
                  priority={true}
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src={c4}
                  className="d-block w-100"
                  alt="..."
                  priority={true}
                />
              </Carousel.Item>
            </Carousel>
            User can get each country's information either by searching, by
            flags or by pointing a country in map Openweathermap API is used for
            providing weather information which is dispayed using chart.js.
            AmCharts is used for displaying maps and bootstrap is used for
            styling
          </div>
          <CButton
            name="Live project"
            url="https://countries-app-a5.netlify.app/"
          />
          <SButton
            name="Github"
            url="https://github.com/anshnarula5/countries1"
          />
        </div>
      </Collapse>
    </div>
  );
};

export default Countries;
