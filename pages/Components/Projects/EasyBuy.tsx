import Image from "next/image";
import React, { useState } from "react";
import { Carousel, Collapse } from "react-bootstrap";
import CButton from "../CButton";
import SButton from "../SButton";
import easy1 from "/display/easy-1.png";
import easy2 from "/display/easy-2.png";
import easy3 from "/display/easy-3.png";
import easy4 from "/display/easy-4.png";
import ProjectCard from "./ProjectCard";

const EasyBuy = () => {

  return (
    <ProjectCard
      imageSrc={easy1}
      projectName="EasyBuy"
      githubLink={"https://github.com/anshnarula5/ecommerce"}
      liveLink={"https://easybuy-1.vercel.app/"}
      description="With advanced filtering options, users can easily narrow down their search and find specific items. The app also offers a convenient sorting feature by price and secure payment processing via PayPal, ensuring a seamless and enjoyable shopping experience for users."
      summary="A fully functional Ecommerce app enabling users to effortlessly browse and purchase products across diverse categories. "
      images={[easy1, easy2, easy3, easy4]}
      technologies={["React", "TypeScript", "Javascript", "Node", "Postgres", "Mocha"]}
    />

  );
};

export default EasyBuy;
