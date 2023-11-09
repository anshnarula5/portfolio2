import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import Email from "../Email";

const Contact = () => {
  return (
    <div>
      <p className="secondaryText">
      For any inquiries, project discussions, or simply to connect, please feel free to reach out. My inbox is open, and I look forward to engaging with you
      </p>
      <div className="my-5 links2 ">
        <a
          href="https://github.com/anshnarula5"
          className="link1  my-1"
          target="_blank"
        >
          <div>
            <BsGithub /> <span className="px-1"> Github</span>{" "}
            <BiLinkExternal />
          </div>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/anshnarula/"
          className="link1 my-1"
        >
          <BsLinkedin />
          <span className="px-1"> LinkedIn</span>
          <BiLinkExternal />
        </a>
        <a
          target="_blank"
          href="mailto:anshnarula55@gmail.com"
          className="link1  my-1"
        >
          <IoMdMail />
          <span className="px-1"> Mail</span>
          <BiLinkExternal />
        </a>
      </div>
      <Email />
    </div>
  );
};

export default Contact;
