import Image from "next/image";
import React, { useEffect } from "react";

import react from "/img/react.svg";

function TechCard({ img, name }: { img: any, name : any }) {
  useEffect(() => {
    console.log(img.src)
  }, [] )
  return (
    <div className="techCard m-1 d-flex flex-column justify-content-between">
      <Image
        src={img.src}
        width= "1rem"
        height= "1rem"
        alt=""
        layout="responsive"
      />
      <span className="text-center mt-2">{name}</span>
    </div>
  );
};

export default TechCard;
