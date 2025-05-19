import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects that showcase my skills and interests across AI, web
          development, and design.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="CodePad"
              description="A sleek online code editor for HTML, CSS, and JavaScript with real-time preview and autosave via local storage. Built with React, CodeMirror, and Bootstrap for a responsive and clean experience."
              ghLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="EduChat AI"
              description="A real-time chat platform tailored for students to share code, ask doubts, and collaborate on projects. Integrated with Firebase for authentication and Firestore for chat persistence."
              ghLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="LeafGuard"
              description="An AI-powered plant disease detection app using PyTorch and transfer learning with ResNet34. Trained on a Kaggle dataset to identify 30+ plant diseases from images with high accuracy."
              ghLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="EmoVision"
              description="A deep learning model that classifies human emotions from facial images using CNNs (Keras + TensorFlow). Integrated with OpenCV for real-time emotion detection via webcam."
              ghLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="TechNarrative"
              description="A modern developer blog built with Next.js and Tailwind CSS. Supports Markdown-based posts, dark mode, and fast rendering using Static Site Generation. Designed with a focus on storytelling and minimalism."
              ghLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="SafeNet AI"
              description="An NLP-based project aimed at identifying suicidal ideation from social media posts. Uses BERT embeddings and sentiment analysis to flag harmful content and notify moderators or mental health services."
              ghLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
