import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Tripadvisor from "../../Assets/Projects/Tripadvisor.webp"
 import Lovoda from "../../Assets/Projects/Lovoda.jpg";
function Projects() {
  return (
    <div className="project-background activeNavlink" id="scrollProjects">
      {/* <Particle2 /> */}
      <Container fluid className="project-section">
        <Container>
          <h1 className="project-heading">
            My <strong className="purple">Projects </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
           
            {/* Toggle-Track Clone -------------------------------------------------------------------*/}
            <Col md={6} className="project-card">
              <ProjectCard
                imgPath={Lovoda}
                isBlog={false}
                title="Lovoda.com Clone"
                tool=" HTML, CSS, Javascript"
                description="Lovoda is a one stop shop for the newest and
                trending fashion and accessories."
                link="https://github.com/nitya-nb/E-commerce-Website-Clone/tree/main/day-5/final"
                demoLink="https://singular-blini-b64465.netlify.app/"
              />
            </Col>


            {/* greenhouse Clone -------------------------------------------------------------------*/}
            <Col md={6} className="project-card">
              <ProjectCard
                imgPath={Tripadvisor}
                isBlog={false}
                title="Tripadvisor.com Clone"
                tool= "Html, Css, JavaScript, Json-Server"
                description="Tripadvisor is a Plan your next trip, read reviews and
                get travel advice from our community on where to
                stay and what to do. Find savings on hotels, book the
                perfect tour."
                link="https://github.com/gk072745/rabid-flower-3002"
                demoLink="https://candid-zabaione-3fa313.netlify.app/"
              />
            </Col>
          </Row>
        </Container>
      </Container>

    </div>
  );
}

export default Projects;
