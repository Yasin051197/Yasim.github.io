import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/YASIM_JAMADAR_RESUME.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = pdf;
    link.setAttribute("download", "YASIM_JAMADAR_RESUME.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="resume-background activeNavlink" id="scrollResume">
      <Container fluid className="resume-section">
        <Container>
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button variant="primary" onClick={downloadCV}>
              &nbsp;Download CV
            </Button>
          </Row>
          <Row className="resume">
            <Col md={6} className="resume-right">
              <h3 className="resume-title">Education</h3>
              <Resumecontent
                title="Full Stack Web Developer"
                content={[
                  "Masai School , Bangaluru",
                  "(2023) - Completed",
                  "1200 hours of hands - on coding.",
                  "1000 hours for DSA.",
                  "50 hours for soft skills development.",
                  "4 collaborative projects and 30+ mini-projects.",
                ]}
              />
              <Resumecontent
                title="Bachelor of Engineering & Technology (B.Tech.)"
                content={[
                  "DKTE Textile & Engineering Institue, Ichalkaranji.",
                  "2017-2021",
                ]}
              />
            </Col>
          </Row>
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button
              variant="primary"
              href={
                "https://drive.google.com/file/d/1oWC7nzqjp0SgdVIeYVYooPxiBvdd03nb/view?usp=sharing"
              }
              target="_blank"
            >
              <AiOutlineDownload />
              &nbsp;Download CV From Google Drive
            </Button>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Resume;
