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
      <div className="pt-5 career_web">
        <div className="d-flex justify-content-start">
          <Timeline position="left">
            <TimelineItem >
              <TimelineOppositeContent sx={{ flex: 20 }} className="">
                <div className="careerCard px-4 mb-3 py-2">
                  <div className="d-flex justify-content-between align-items-center">
                    <h2>Kalam (YC '23)</h2>
                    <span className="secondaryText">SDE Intern</span>
                  </div>
                  <p className="secondaryText pt-2">
                    Developed web pages using Next.js, Tailwind CSS, and Framer Motion.
                    Integrated Razorpay for secure transactions, utilized webhooks for personalized notifications. Improved load times by 40%, enhanced SEO by 25%.
                  </p>
                  <div className="pb-3 d-flex">
                    <a href="https://kalam.in/" className="link2 d-flex" target="_blank">
                      <i className="fa-solid fa-link mt-1"></i>
                      <p className="mx-1">Homepage</p>
                    </a>
                    <a href="https://kalam.in/" className="link2 d-flex mx-2" target="_blank">
                      <i className="fa-solid fa-link mt-1"></i>
                      <p className="mx-1">Pledge</p>
                    </a>
                    <a href="https://kalam.in/" className="link2 d-flex" target="_blank">
                      <i className="fa-solid fa-link mt-1"></i>
                      <p className="mx-1">CSAT</p>
                    </a>
                    <a href="https://kalam.in/" className="link2 d-flex mx-2" target="_blank">
                      <i className="fa-solid fa-link mt-1"></i>
                      <p className="mx-1">Test Series</p>
                    </a>
                  </div>
                  <p className="secondaryText d-flex flex-wrap mb-1">
                    <Techbadge tech="Nextjs" />
                    <Techbadge tech="TypeScript" />
                    <Techbadge tech="Supabase" />
                    <Techbadge tech="Framer Motion" />
                  </p>
                </div>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot style={{ backgroundColor: "transparent" }}>
                  <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3873 3.38631C14.433 1.16433 11.1214 0.552439 8.46057 2.08869C5.76509 3.64492 4.64478 6.88168 5.65902 9.71143C2.69918 10.2463 0.454102 12.8358 0.454102 15.9498C0.454102 19.0645 2.70029 21.6546 5.66121 22.1885C4.64318 25.0197 5.76315 28.26 8.46057 29.8174C11.155 31.373 14.5167 30.7259 16.4606 28.4349C18.4044 30.7259 21.7661 31.373 24.4606 29.8174C27.1587 28.2596 28.2785 25.018 27.2591 22.1863C30.214 21.6475 32.4541 19.0602 32.4541 15.9498C32.4541 12.8401 30.2151 10.2534 27.2613 9.71364C28.2769 6.88336 27.1567 3.64532 24.4606 2.08869C21.7961 0.550387 18.4792 1.16597 16.526 3.39522L16.4607 3.4698L16.3873 3.38631ZM15.5758 4.79189C14.1524 2.77201 11.3968 2.1364 9.21528 3.39589C7.03119 4.65687 6.20446 7.36602 7.24772 9.61018H12.7939L15.5758 4.79189ZM18.3713 9.61018L16.4541 6.28943L14.5368 9.61018H18.3713ZM13.6654 11.1196L10.8767 15.9498L13.6654 20.7799H19.2428L22.0315 15.9498L19.2428 11.1196H13.6654ZM10.0052 14.4404L11.9224 11.1196H8.08796L10.0052 14.4404ZM9.13373 15.9498L6.35629 11.1391C3.89364 11.3602 1.96353 13.4296 1.96353 15.9498C1.96353 18.47 3.89364 20.5394 6.35629 20.7604L9.13373 15.9498ZM12.7939 22.2894H7.25075C6.20287 24.5348 7.02909 27.248 9.21528 28.5102C11.3978 29.7702 14.1551 29.1334 15.5778 27.1112L12.7939 22.2894ZM17.3362 27.1011C18.7569 29.1313 21.5196 29.7723 23.7058 28.5102C25.892 27.248 26.7183 24.5348 25.6704 22.2894H20.1143L17.3362 27.1011ZM18.3713 22.2894H14.5368L16.4541 25.6101L18.3713 22.2894ZM20.9857 20.7799H24.8202L22.903 17.4592L20.9857 20.7799ZM26.5519 11.1391L23.7744 15.9498L26.5519 20.7604C29.0145 20.5394 30.9446 18.47 30.9446 15.9498C30.9446 13.4296 29.0145 11.3602 26.5519 11.1391ZM22.903 14.4404L24.8202 11.1196H20.9857L22.903 14.4404ZM25.6734 9.61018C26.7167 7.36602 25.8899 4.65687 23.7058 3.39589C21.5207 2.1343 18.7595 2.77413 17.3383 4.80201L20.1143 9.61018H25.6734ZM8.08796 20.7799H11.9224L10.0052 17.4592L8.08796 20.7799Z" fill="#FFF" />
                  </svg>
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="pt-3"><span className="secondaryText px-2">2023</span></TimelineContent>
            </TimelineItem>
            <TimelineItem >
              <TimelineOppositeContent sx={{ flex: 20 }} className="">
                <div className="careerCard px-4 mb-3 py-2">
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
                <TimelineDot style={{ backgroundColor: "transparent" }} ><i className="fab fa-amazon fa-lg"></i></TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="pt-2"><span className="secondaryText px-2">2023</span></TimelineContent>
            </TimelineItem>
            <TimelineItem >
              <TimelineOppositeContent sx={{ flex: 20 }} >
                <div className="careerCard px-4 mb-3 pt-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <h2>Biobazaar</h2>
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
              <TimelineSeparator className=" py-2">
                <TimelineDot className="pt-3" style={{ backgroundColor: "transparent" }}><i className="fa-regular fa-building fa-lg"></i></TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="pt-4"><span className="secondaryText px-2">2022</span></TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
      <div className="careerCard py-3 px-4 my-3 career_mobile">
        <div className="d-flex justify-content-between align-items-center">
          <p>SDE Intern</p>
          <p className="blockquote-footer secondaryText">Nov 2023 - Present</p>
        </div>
        <h2>Kalam (YC '23)</h2>
        <p className="secondaryText pt-2">
          Developed web pages using Next.js, Tailwind CSS, and Framer Motion.
          Integrated Razorpay for secure transactions, utilized webhooks for personalized notifications. Improved load times by 40%, enhanced SEO by 25%.
        </p>
        <div className="pb-3 d-flex flex-wrap">
          <a href="https://kalam.in/" className="link2 d-flex" target="_blank">
            <i className="fa-solid fa-link mt-1"></i>
            <p className="mx-1">Homepage</p>
          </a>
          <a href="https://kalam.in/" className="link2 d-flex mx-2" target="_blank">
            <i className="fa-solid fa-link mt-1"></i>
            <p className="mx-1">Pledge</p>
          </a>
          <a href="https://kalam.in/" className="link2 d-flex" target="_blank">
            <i className="fa-solid fa-link mt-1"></i>
            <p className="mx-1">CSAT</p>
          </a>
          <a href="https://kalam.in/" className="link2 d-flex" target="_blank">
            <i className="fa-solid fa-link mt-1"></i>
            <p className="mx-1">Test Series</p>
          </a>
        </div>
        <p className="secondaryText d-flex flex-wrap mb-1">
          <Techbadge tech="Nextjs" />
          <Techbadge tech="TypeScript" />
          <Techbadge tech="Supabase" />
          <Techbadge tech="Framer Motion" />
        </p>
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