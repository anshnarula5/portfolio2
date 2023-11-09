import React, { useState } from "react";
import { Carousel, Col, Collapse, Row } from "react-bootstrap";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import Techbadge from "../Techbadge";

const ProjectCard = ({ imageSrc, projectName, githubLink, liveLink, summary, description, images, technologies }: any) => {
  const [show, setShow] = useState(false);

  return (
    <Row className="projectCard py-3 px-2 mb-4">
      <Col md={3} className="">
        <Image src={imageSrc} className="d-block  mb-3" alt="..." priority={true} />
      </Col>
      <Col md={9} className="">
        <div className="d-flex align-items-center justify-content-between">
          <h4>
            <a href={liveLink} target="__blank" className="cardHeading d-flex align-items-center">
              <span>{projectName}</span>
              <i className="fas fa-external-link-alt openIcon"></i>
            </a>
          </h4>
          <span>
            <a href={githubLink} className="brightText " target="__blank">
              <BsGithub size={30} />
            </a>
          </span>
        </div>
        <div className="secondaryText">
          {summary}
          <div
            className="brightText d-inline toggleCollapse"
            onClick={() => {
              setShow(!show);
            }}
          >
            {show ? " Show less" : " Show more"}
          </div>
        </div>
      </Col>
      <Collapse in={show}>
        <div className="my-3">
          <div id="example-collapse-text">
            <Carousel variant="dark" className="px-2 py-2">
              {images &&
                images.length > 0 &&
                images.map((image: any, index: any) => (
                  <Carousel.Item key={index}>
                    <Image src={image} className="d-block w-100" alt="..." priority={true} />
                  </Carousel.Item>
                ))}
            </Carousel>
          </div>
          <div className="secondaryText mb-3">
            {description}
          </div>
          <div className="secondaryText d-flex flex-wrap ">
            {technologies.map((tech: any, index: any) => (
              <Techbadge tech={tech} key={index} />
            ))}
          </div>
        </div>
      </Collapse>
    </Row>
  );
};

export default ProjectCard;
