import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a passionate learner and enthusiastic developer currently pursuing a
              Bachelor's degree in{" "}
              <b className="purple">Artificial Intelligence and Data Science</b>.
              <br />
              <br />
              I enjoy crafting clean and efficient solutions using{" "}
              <i>
                <b className="purple">C++, JavaScript, and Python</b>
              </i>
              , and continuously explore new tools and technologies to broaden my skill set.
              <br />
              <br />
              My areas of interest include building impactful{" "}
              <b className="purple">web applications</b> and working on projects related to{" "}
              <b className="purple">machine learning and UI/UX design</b>.
              <br />
              <br />
              I enjoy developing modern web solutions with{" "}
              <i>
                <b className="purple">Node.js</b>, and popular JavaScript frameworks like{" "}
                <b className="purple">React.js</b> and <b className="purple">Next.js</b>.
              </i>
              <br />
              <br />
              Design is another passion of mine — I love combining logic with creativity to
              produce visually compelling and user-friendly experiences.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Let's <span className="purple">connect</span> and collaborate!
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/himayath07"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mohammed-himayath-ali-6a7757244"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/himayathh_07?igsh=MThtcWpteXYxdjhsMw=="
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
