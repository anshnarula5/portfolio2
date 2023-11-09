import Image from "next/image";
import React, { useState } from "react";
import { Carousel, Collapse } from "react-bootstrap";
import CButton from "../CButton";
import SButton from "../SButton";

import insta1 from "/display/insta1.png";
import insta2 from "/display/insta2.png";
import insta3 from "/display/insta3.png";
import insta4 from "/display/insta4.png";
import ProjectCard from "./ProjectCard";

const Instagram = () => {
  return (
    <ProjectCard 
    imageSrc={insta2}
    projectName="InstaMiliGram"
    githubLink={"https://github.com/anshnarula5/ecommerce"}
    liveLink={"https://easybuy-1.vercel.app/"}
    description="This is a fully functional social media platform that allows users to share photos and videos with their followers, discover new content and explore profiles of other users. It also includes features such as commenting, and liking. This platform includes a responsive design for seamless user experience on any device. This app aims to replicate the popular social media platform with a sleek and user-friendly interface."
    summary="An application where users can add posts, like other's post, follow other users and all other features same as instagram."
    images={[insta1, insta3, insta2, insta4]}
    technologies={["React", "TypeScript", "Javascript", "Node", "Postgres", "Mocha"]}
  />

  );
};

export default Instagram;
