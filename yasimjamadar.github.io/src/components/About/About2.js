import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={12} className="home-about-description">
                        <h1 style={{ fontSize: "3em" }}>
                            <span className="purple">“About me” </span>
                        </h1>
                        <p className="home-about-body">
                            <span className="myabout first-about">
                                Hi, I am Yasim Jamadar, A Full Stack Web Developer. 
                                I'm from Kolhapur, Maharashtra, India.
                                Enthusiastic developer, eager to contribute to team
                                success through hard work, attention to details and
                                excellent organizational skills. Clear understanding of
                                tech stacks and training in the field. Motivated to learn,
                                grow and excel in the field of Web Development.
                            </span>
                            <br />
                            <br />
                            <span className="myabout second-about">
                               I am Aspiring Full Stack Web Developer from Masai School with specializing in
                                Html, CSS, Javascript, Github, Json-Server, Bootstrap, React.js, Next.js, storybook.…,
                                I enjoy taking challenges and giving my best. 
                                My interest lies in problem-solving and web development. 
                                I am a constant learner and I like to collaborate with people. 
                                I spend my whole day, practically every day, 
                                experimenting with HTML, CSS, and modern Javascript libraries like React, 
                                and Next. I build websites that are delightful, informative and responsive.
                            </span>
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default About2;
