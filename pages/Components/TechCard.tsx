import Image from "next/image";
import React, { useEffect, useState } from "react";
import Tilt from 'react-parallax-tilt';
function TechCard({ img, name }: { img: any; name: any }) {

  return (
    <Tilt  className="techCard m-1 d-flex flex-column justify-content-between parallax-effect" scale={1.15}  perspective={500}>
      <Image
        src={img?.src}
        width="1rem"
        height="1rem"
        alt=""
        layout="responsive"
        className="inner-element"
        priority={true}
      />
      <span className="text-center mt-2 secondaryText">{name}</span>
    </Tilt>
  );
}

export default TechCard;
