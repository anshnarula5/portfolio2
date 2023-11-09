import Image from "next/image";
import React, { useState } from "react";
import { Carousel, Col, Collapse, Row } from "react-bootstrap";
import CButton from "../CButton";

import m1 from "/display/movie-1.jpg";
import m2 from "/display/movie-2.jpg";
import m3 from "/display/movie-3.jpg";
import m4 from "/display/movie-4.jpg";
import m5 from "/display/movie-5.jpg";
import m6 from "/display/movie-6.jpg";
import m7 from "/display/movie-7.jpg";
import movie1 from "/display/movie1.png";

import { BsGithub } from "react-icons/bs";
import Techbadge from "../Techbadge";

const Movies = () => {
  const [show, setShow] = useState(false);
  const [on, setOn] = useState<Boolean>(false);
  const githubLink = "https://github.com/anshnarula5/movies"
  return (
    <Row className="projectCard py-3 px-2 mb-3">
    <Col md={3} className="">
      <Image src={movie1} className="d-block w-100 moviesImage" alt="..." priority={true}/>
    </Col>
    <Col md={9} className="">
      <div className="d-flex align-items-center justify-content-between">
        <h4>
          <a href={githubLink} target="__blank" className="cardHeading d-flex align-items-center">
            <span>Cinepedia</span>
            <i className="fas fa-external-link-alt openIcon"></i>
          </a>
        </h4>
        <span>
          <a href={githubLink} className="brightText " target="__blank">
            <BsGithub size={30} />
          </a>
        </span>
      </div>
      <p className="secondaryText">
      This movie browsing mobile application offers an extensive collection of films across various genres.
        <p
          className="brightText d-inline toggleCollapse"
          onClick={() => {
            setShow(!show);
          }}
        >
          {show ? " Show less" : " Show more"}
        </p>
      </p>
    </Col>
    <Collapse in={show}>
        <div className="my-2">
          <Row id="example-collapse-text">
            <Col md={6}>
              <p className="secondaryText pt-4">
                Implemented robust search functionality, including search history for
                quick access to previous searches.
                Designed and implemented a rating system, enabling users to rate movies and share their feedback through
                comments, fostering user interaction and community engagement.
                Implemented user authentication and personalized features such as wishlists and favorites exclusively
                for authenticated users, enhancing user engagement and retention.
                With its user-centric design and an extensive database of movies, 
                this application serves as a go-to resource for movie enthusiasts.
              </p>
            </Col>
            <Col md={6}>
              <Carousel variant="dark" className="px-2 py-2">
                <Carousel.Item>
                  <Image
                    src={m1}
                    className="d-block w-100"
                    alt="..."
                    priority={true}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    src={m2}
                    className="d-block w-100"
                    alt="..."
                    priority={true}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    src={m3}
                    className="d-block w-100"
                    alt="..."
                    priority={true}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    src={m4}
                    className="d-block w-100"
                    alt="..."
                    priority={true}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    src={m5}
                    className="d-block w-100"
                    alt="..."
                    priority={true}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    src={m6}
                    className="d-block w-100"
                    alt="..."
                    priority={true}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    src={m7}
                    className="d-block w-100"
                    alt="..."
                    priority={true}
                  />
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </div>
      </Collapse>
  </Row>
  );
};

export default Movies;
