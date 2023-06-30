const Career = () => {
    return (
        <div className="right pt-5">
            <div className="careerCard py-3 px-4 mb-3">
                <div className="d-flex justify-content-between align-items-center">
                    <p>SDE Intern</p>
                    <span className="blockquote-footer">Jan 2023 - Jun 2023</span>
                </div>
                <h2>Amazon</h2>
                <p className="secondaryText pt-2">
                Worked in Alexa multimodal team, developed integration solution for smart home experience service, 
                ensuring privacy compliance. Built event-driven infrastructure, handled deletion requests, 
                and established secure connections, showcasing problem-solving skills and teamwork.
                </p>
                <p className="secondaryText">
                    Tech stack used : Java, AWS - SNS/SQS/Lambda/VPC, TypeScript, Mockito, Junit.
                </p>
            </div>
            <div className="careerCard py-3 px-4 mb-3">
                <div className="d-flex justify-content-between align-items-center">
                    <p>SDE Intern</p>
                    <span className="blockquote-footer">May 2022 - Aug 2022</span>
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
            </div>
        </div>
    );
};

export default Career;
