/* eslint-disable no-restricted-globals */
import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/Sp.jpg";
import pdf from "../Assets/YASIM_JAMADAR_RESUME.pdf";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  const scrollToFunction = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    updateExpanded(false);
  };

  const downloadResume = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = pdf;
    downloadLink.download = 'YASIM_JAMADAR_RESUME.pdf';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  function scrollHandler() {
    if (window.scrollY >= 5) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  const li = document.querySelectorAll(".nav-link");
  const section = document.querySelectorAll(".activeNavlink");
  function acvtiveMenu() {
    let len = section.length;
    for (let i = 0; i < len; i++) {
      let sectionTop = section[i].offsetTop;
      let sectionHeight = section[i].offsetHeight;
      let variableHeight = sectionHeight / 4;

      if (pageYOffset > sectionTop - sectionHeight / 3 + variableHeight) {
        li.forEach((li) => {
          li.classList.remove("active");
        });
        li[i].classList.add("active");
      }
    }
  }
  acvtiveMenu();
  window.addEventListener("scroll", acvtiveMenu);

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link onClick={() => scrollToFunction("scrollHome")}>
                <span>Home</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link onClick={() => scrollToFunction("scrollAbout")}>
                <span>About</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link onClick={() => scrollToFunction("scrollSkills")}>
                <span>Skills</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link onClick={() => scrollToFunction("scrollProjects")}>
                <span>Projects</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link onClick={downloadResume}>
                <span>Resume</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link onClick={() => scrollToFunction("scrollContact")}>
                <span>Contact</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="/">
          <img
            style={{ borderRadius: "50px", marginTop: "5px" }}
            src={logo}
            className="img-fluid logo"
            alt="brand"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBar;
