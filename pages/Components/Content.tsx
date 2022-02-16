import React from "react";
import { Card } from "react-bootstrap";
import Blogs from "./sections/Blogs";
import Projects from "./sections/Projects";
import Tech from "./sections/Tech";

const Content = () => {
  return (
    <>
      <h1 className="mt-5"  id = "projects">
        Featured Projects
      </h1>
      <Projects />
      <h1 className="my-5"  id = "tech">
        Tech Stack
      </h1>
      <Tech />
      <h1 className="my-5"  id = "blogs">
        Recent Blogs
      </h1>
      <Blogs />
      <div className="gradient fixed-bottom"></div>
    </>
  );
};

export default Content;
