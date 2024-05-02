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
                Hi, I am Yasim Jamadar, A Full Stack Web Developer. I'm from
                Kolhapur, Maharashtra, India. Enthusiastic developer, eager to
                contribute to team success through hard work, attention to
                details and excellent organizational skills. Clear understanding
                of tech stacks and training in the field. Motivated to learn,
                grow and excel in the field of Web Development.
              </span>
              <br />
              <br />
              <span className="myabout second-about">
                As a completed Full Stack Web Developer from Masai School, I
                specialize in html, css, javaScript, React.js, Ionic, Nodejs,
                Express.js, MongoDB, C#, ASP .Net core, MS SQL Server, Database
                design. I thrive on challenges and consistently strive to
                deliver my best. My passion lies in problem-solving and crafting
                exceptional web experiences. I am an avid learner, constantly
                seeking to expand my skills and knowledge. Collaboration is key
                to my approach, and I enjoy working with diverse teams to
                achieve shared goals. My days are spent immersed in HTML, CSS,
                and cutting-edge JavaScript libraries like React and Next.js. I
                take pride in developing websites that are not only visually
                appealing but also informative and responsive, ensuring an
                engaging user experience.
              </span>
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default About2;
