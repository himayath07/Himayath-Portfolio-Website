import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mohammed Himayath Ali</span>
            from <span className="purple">India</span>.
            <br />
            I am currently pursuing a Bachelor's degree in Artificial Intelligence and Data Science
            at Muffakham Jah College of Engineering.
            <br />
            I hold a Diploma in Computer Science from Mahaveer Institute of Science and Technology.
            <br />
            <br />
            Apart from academics and coding, here are some activities I enjoy!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Graphic Designing
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Machine Learning
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Technologies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Design with purpose, code with passion!"{" "}
          </p>
          <footer className="blockquote-footer">Himayath</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
