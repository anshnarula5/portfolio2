import jt1 from "/display/jt1.png";
import jt2 from "/display/jt2.png";
import jt3 from "/display/jt3.png";
import jt4 from "/display/jt4.png";
import demo from "/display/demo.gif";
import ProjectCard from './ProjectCard';

const JobPulse = () => {
  return (
    <ProjectCard
      imageSrc={jt2}
      projectName="JobPulse"
      githubLink={"https://github.com/anshnarula5/jobTracker"}
      liveLink={"https://github.com/anshnarula5/jobTracker"}
      description = "The included summary feature offers graphical insights into application performance metrics such as successful referrals and application distribution by company, facilitating informed decision-making and strategic planning. This cohesive design streamlines the application tracking process, providing users with a user-centric and comprehensive tool for managing their job applications effectively"
      summary="An intuitive job tracker application boasting a Kanban board-style dashboard, allowing users to efficiently update application statuses through simple drag-and-drop functionality."
      images={[jt1, demo, jt2, jt3, jt4]}
      technologies={["Java", "Spring Boot", "NextJs", "Typescript", "JPA", "MySQL", "AWS"]}
    />
  );
};

export default JobPulse;
