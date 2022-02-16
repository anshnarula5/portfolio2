import React from "react";
import TechCard from "../TechCard";

import react from "/img/react.svg";
import js from "/img/javascript.svg";
import nodejs from "/img/nodejs.svg";
import express from "/img/express.svg";
import mongodb from "/img/mongodb.svg";
import next from "/img/nextjs.svg";
import firebase from "/img/firebase.svg";
import html5 from "/img/html5.png";
import css3 from "/img/css-3.png";
import sass from "/img/sass.svg";
import materialui from "/img/materialui.svg";
import redux1 from "/img/redux1.svg";
import bootstrap from "/img/bootstrap.svg";
import tailwindcss from "/img/tailwindcss-mark.cb8046c163f77190406dfbf4dec89848.svg";
import ejs from "/img/ejs.svg";
import git from "/img/git.svg";
import github from "/img/github.svg";
import socketio from "/img/socketio.svg";
import vercel from "/img/vercel.svg";
import net from "/img/net.svg";
import json from "/img/Papirus-Team-Papirus-Mimetypes-App-json.svg";
import axios from "/img/axios.svg";
import jwt from "/img/jwt-3.svg";
import chartjs from "/img/chartjs.svg";
import postman from "/img/postman.png";
import python from "/img/python.svg";
import c from "/img/c.svg";
import typescript from "/img/typescript.svg";
import reactNative from "/img/reactNative.svg";

const Tech = () => {
  return (
    <div className="d-flex flex-wrap ">
      <TechCard img={js} name="Javascript" />
      <TechCard img={python} name="Python" />
      <TechCard img={c} name="C++" />
      <TechCard img={typescript} name="Typescript" />
      <TechCard img={react} name="React" />
      <TechCard img={nodejs} name="Nodejs" />
      <TechCard img={express} name="Express.js" />
      <TechCard img={mongodb} name="MongoDB" />
      <TechCard img={next} name="Next.js" />
      <TechCard img={react} name="ReactNative" />
      <TechCard img={firebase} name="Firebase" />
      <TechCard img={css3} name="CSS" />
      <TechCard img={materialui} name="MUI" />
      <TechCard img={redux1} name="Redux" />
      <TechCard img={ejs} name="EJS" />
      <TechCard img={git} name="Git" />
      <TechCard img={github} name="Github" />
      <TechCard img={socketio} name="Socket.io" />
      <TechCard img={postman} name="Postman" />
      <TechCard img={bootstrap} name="Bootstrap" />
      <TechCard img={sass} name="SCSS" />
      <TechCard img={jwt} name="JWT" />
      <TechCard img={chartjs} name="Chart.js" />
    </div>
  );
};

export default Tech;
