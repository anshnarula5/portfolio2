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
import mysql from "/img/mysql.png";
import psql from "/img/postgresql.svg";
import typescript from "/img/typescript.svg";
import lambda from "/img/lambda.png";
import sns from "/img/sns.png";
import sqs from "/img/sqs.svg";
import vpc from "/img/vpc.png";
import java from "/img/java.png";
import springboot from "/img/springboot.svg";

const Tech = () => {
  return (
    <div className="d-flex flex-wrap ">
      <TechCard img={js} name="Javascript" />
      <TechCard img={java} name="Java" />
      <TechCard img={c} name="C++" />
      <TechCard img={typescript} name="Typescript" />
      <TechCard img={lambda} name="AWS Lambda" />
      <TechCard img={sns} name="AWS SNS" />
      <TechCard img={sqs} name="AWS SQS" />
      <TechCard img={vpc} name="VPC" />
      <TechCard img={springboot} name="SpringBoot" />
      <TechCard img={mysql} name="Mysql" />
      <TechCard img={psql} name="Postgres" />
      <TechCard img={react} name="React" />
      <TechCard img={nodejs} name="Nodejs" />
      <TechCard img={express} name="Express.js" />
      <TechCard img={mongodb} name="MongoDB" />
      <TechCard img={next} name="Next.js" />
      <TechCard img={react} name="ReactNative" />
      <TechCard img={css3} name="CSS" />
      <TechCard img={redux1} name="Redux" />
      <TechCard img={git} name="Git" />
    </div>
  );
};

export default Tech;
