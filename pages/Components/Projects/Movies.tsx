import Image from "next/image";
import React, { useState } from "react";
import { Carousel, Col, Collapse, Row } from "react-bootstrap";

import m1 from "/display/movie-1.jpg";
import m2 from "/display/movie-2.jpg";
import m3 from "/display/movie-3.jpg";
import m4 from "/display/movie-4.jpg";
import m5 from "/display/movie-5.jpg";
import m6 from "/display/movie-6.jpg";
import m7 from "/display/movie-7.jpg";

const Movies = () => {
  const [show, setShow] = useState(false);
  return (
    <div
      className="projectCard py-3 px-4 mb-3"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <p>Mobile</p>
      <h2>Cinepedia</h2>
      <p>
        A mobile application where users can browse for different movies and add
        them to their watchlist or favourites.
      </p>
      <Collapse in={show}>
        <Row id="example-collapse-text">
          <Col md={6}>
            One can also add a review and/or like other reviews. Users can
            search for different movies or artists. Users can also watch the
            trailer of the movie. Each movie has its own details along with the
            list of all cast of the movie
          </Col>
          <Col md={6}>
            <Carousel variant="dark" className="px-4 py-2">
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
      </Collapse>
    </div>
  );
};

export default Movies;
