import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";

/**
 * Toolstack component displays development tools using icons.
 */
function Toolstack() {
  const tools = [
    { icon: <SiMacos />, label: "macOS" },
    { icon: <SiVisualstudiocode />, label: "VS Code" },
    { icon: <SiPostman />, label: "Postman" },
    { icon: <SiSlack />, label: "Slack" },
    { icon: <SiVercel />, label: "Vercel" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons" title={tool.label}>
          {tool.icon}
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
