import React, { useState } from "react";
import { Collapse } from "react-bootstrap";

const EasyBuy = () => {
  const [show, setShow] = useState(false);
  return (
    <div
      className="projectCard py-3 px-4 mb-3"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <p>MERN Stack</p>
      <h2>Easy-Buy</h2>
      <p>
        A fully functional Ecommerce app. Users can buy products, add them to
        cart, or filter products based on their preferences.
      </p>
      <Collapse in={show}>
        <div id="example-collapse-text">
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
