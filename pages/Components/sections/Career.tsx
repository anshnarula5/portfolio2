import Techbadge from "../Techbadge";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";

const Career = () => {
  return (
    <div>
      <div className=" pt-5 career_web">
        <div className="d-flex  justify-content-start ">
          <Timeline position="left">
            <TimelineItem >
              <TimelineOppositeContent sx={{ flex: 20}}  className="">
                <div className="careerCard  px-4 mb-3 py-2 ">
                  <div className="d-flex justify-content-between align-items-center">
                    <h2>Amazon</h2>
                    <span className=" secondaryText">SDE Intern</span>
                  </div>
                  <p className="secondaryText pt-2">
                    Worked in Alexa multimodal team, developed integration solution for smart home experience service,
                    ensuring privacy compliance. Built event-driven infrastructure, handled deletion requests,
                    and established secure connections, showcasing problem-solving skills and teamwork.
                  </p>
                  <p className="secondaryText d-flex flex-wrap mb-1">
                    <Techbadge tech="Java" />
                    <Techbadge tech="AWS" />
                    <Techbadge tech="TypeScript" />
                    <Techbadge tech="Mockito" />
                    <Techbadge tech="JUnit" />
                  </p>
                </div>
              </TimelineOppositeContent>
              <TimelineSeparator className=" pt-2">
              {/* background-color: #0f172a */}
                <TimelineDot style={{backgroundColor : "transparent"}} ><i className="fab fa-amazon fa-lg"></i></TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="pt-2"><span className="secondaryText px-2  ">2023</span></TimelineContent>
            </TimelineItem>
            <TimelineItem >
              <TimelineOppositeContent sx={{ flex: 20 }} >
                <div className="careerCard px-4 mb-3 pt-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <h2>Biobazaar Healthtech</h2>
                    <span className=" secondaryText">SDE Intern</span>
                  </div>
                  <p className="secondaryText pt-2">
                    Worked in a b2b tech team for a pharmaceutical product firm, contributing to front-end and back-end microservices.
                    Developed tools, features, and testing programs to enhance order processing,
                    billing, and daily operations, improving lead time and profit.
                  </p>
                  <p className="secondaryText d-flex flex-wrap mb-1">
                    <Techbadge tech="React" />
                    <Techbadge tech="TypeScript" />
                    <Techbadge tech="Javascript" />
                    <Techbadge tech="Node" />
                    <Techbadge tech="Postgres" />
                    <Techbadge tech="Mocha" />
                  </p>
                </div>
              </TimelineOppositeContent>
              <TimelineSeparator  className=" py-2">
                <TimelineDot className="icon pt-3"><i className="fa-regular fa-building fa-lg"></i></TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="pt-4"><span className="secondaryText px-2  ">2022</span></TimelineContent>

            </TimelineItem>

          </Timeline>
        </div>


      </div>
      <div className="careerCard py-3 px-4 my-3 career_mobile">
        <div className="d-flex justify-content-between align-items-center">
          <p>SDE Intern</p>
          <p className="blockquote-footer secondaryText">Jan 2023 - Jun 2023</p>
        </div>
        <h2>Amazon</h2>
        <p className="secondaryText pt-2">
          Worked in Alexa multimodal team, developed integration solution for smart home experience service,
          ensuring privacy compliance. Built event-driven infrastructure, handled deletion requests,
          and established secure connections, showcasing problem-solving skills and teamwork.
        </p>
        <p className="secondaryText d-flex flex-wrap mb-1">
          <Techbadge tech="Java" />
          <Techbadge tech="AWS" />
          <Techbadge tech="TypeScript" />
          <Techbadge tech="Mockito" />
          <Techbadge tech="JUnit" />
        </p>
      </div>
      <div className="careerCard py-3 px-4 mb-3 career_mobile">
        <div className="d-flex justify-content-between align-items-center">
          <p>SDE Intern</p>
          <span className="blockquote-footer secondaryText">May 2022 - Aug 2022</span>
        </div>
        <h2>Biobazaar Healthtech</h2>
        <p className="secondaryText pt-2">
          Worked in a b2b tech team for a pharmaceutical product firm, contributing to front-end and back-end microservices.
          Developed tools, features, and testing programs to enhance order processing,
          billing, and daily operations, improving lead time and profit.
        </p>
        <p className="secondaryText">
          Tech stack used : React, Node, Typescript, Postgres, Mocha.
        </p>
        <p className="secondaryText d-flex flex-wrap mb-1">
          <Techbadge tech="React" />
          <Techbadge tech="TypeScript" />
          <Techbadge tech="Javascript" />
          <Techbadge tech="Node" />
          <Techbadge tech="Postgres" />
          <Techbadge tech="Mocha" />
        </p>
      </div>
    </div>
  );
};

export default Career;