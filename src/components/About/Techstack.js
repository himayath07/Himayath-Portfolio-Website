import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  CgCPlusPlus
} from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava
} from "react-icons/di";
import {
  SiFirebase,
  SiPostgresql
} from "react-icons/si";

/**
 * Techstack component displays the developer's technical skills using icons.
 */
function Techstack() {
  const techIcons = [
    { icon: <CgCPlusPlus />, label: "C++" },
    { icon: <DiJava />, label: "Java" },
    { icon: <DiPython />, label: "Python" },
    { icon: <DiJavascript1 />, label: "JavaScript" },
    { icon: <DiReact />, label: "React" },
    { icon: <DiNodejs />, label: "Node.js" },
    { icon: <DiMongodb />, label: "MongoDB" },
    { icon: <SiPostgresql />, label: "PostgreSQL" },
    { icon: <SiFirebase />, label: "Firebase" },
    { icon: <DiGit />, label: "Git" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techIcons.map((tech, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons" title={tech.label}>
          {tech.icon}
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
