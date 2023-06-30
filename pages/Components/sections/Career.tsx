const Career = () => {
    return (
        <div className="right pt-5">
            <div className="careerCard py-3 px-4 mb-3">
                <div className="d-flex justify-content-between align-items-center">
                    <p>SDE Intern</p>
                    <span className="blockquote-footer">Jan 2023 - Present</span>
                </div>
                <h2>Amazon</h2>
                <p className="secondaryText">
                    Worked in Alexa multimodal team in smart home domain. Developed an integration solution for a smart home experience service, ensuring compliance with privacy regulations. I built an event-driven infrastructure using AWS services, implemented deletion request handling, and established secure connections between services,
                    demonstrating strong problem-solving skills and collaborative teamwork.
                </p>
            </div>
            <div className="careerCard py-3 px-4 mb-3">
                <div className="d-flex justify-content-between align-items-center">
                    <p>SDE Intern</p>
                    <span className="blockquote-footer">May 2022 - Aug 2022</span>
                </div>
                <h2>Biobazaar Healthtech</h2>
                <p className="secondaryText">
                    Worked in the tech team of a b2b product based firm, that provides a flow of pharmaceutical products between warehouse and retailers.
                </p>
                <p className="secondaryText">
                    Tech stack used : React, Node, Typescript, Postgres, Mocha.
                </p>
            </div>
        </div>
    );
};

export default Career;
