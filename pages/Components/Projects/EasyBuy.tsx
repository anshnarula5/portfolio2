import Image from "next/image";
import React, { useState } from "react";
import { Carousel, Collapse } from "react-bootstrap";
import easy1 from "/display/easy-1.jpg";
import easy2 from "/display/easy-2.jpg";
import easy3 from "/display/easy-3.jpg";
import easy4 from "/display/easy-4.jpg";

const EasyBuy = () => {
  const [show, setShow] = useState(false);
  return (
    <div
      className="projectCard py-3 px-4 mb-3"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      >
          <p>Web</p>
      <h2>Easy-Buy</h2>
      <p>
        A fully functional Ecommerce app. Users can buy products, add them to
        cart, or filter products based on their preferences.
      </p>
      <Collapse in={show}>
        <div id="example-collapse-text">
          <Carousel variant="dark" className="px-5 py-2">
            <Carousel.Item>
              <Image
                src={easy1}
                className="d-block w-100"
                alt="..."
                priority={true}
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src={easy2}
                className="d-block w-100"
                alt="..."
                priority={true}
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src={easy3}
                className="d-block w-100"
                alt="..."
                priority={true}
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src={easy4}
                className="d-block w-100"
                alt="..."
                priority={true}
              />
            </Carousel.Item>
          </Carousel>
          Here users can browse for different product or sort them by their
          price or rating. Users can also filter them based on categories of
          their preference or on the basis of price. This website also has admin
          functionality which has abilities to create a new product, delete a
          product, and also mark a product as delivered. User can pay through
          PayPal gateway.
        </div>
      </Collapse>
    </div>
  );
};

export default EasyBuy;
