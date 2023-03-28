import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import ShareNest from "../../Assets/Projects/Screenshot 2023-03-28 230557.png";
import PawLife from "../../Assets/Projects/Screenshot 2023-03-28 234356.png";
import Chatties from "../../Assets/Projects/Screenshot 2023-03-28 235442.png";
import Weathery from "../../Assets/Projects/Screenshot 2023-03-29 001304.png";
import AVL_Tree from "../../Assets/Projects/Screenshot 2023-03-29 002529.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ShareNest}
              isBlog={false}
              title="ShareNest"
              description="ShareNest is a Social media website where we can upload, delete and download images and also we can save or comment on our favourite image. This Web app is made up with React and Sanity.io. "
              ghLink="https://github.com/FallenCap/ShareNest"
              demoLink="https://sharenest.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PawLife}
              isBlog={false}
              title="PawLife"
              description="Pawlife is E-commerce site focused for dogs and dog lovers. We can buy items and medicine for dogs. And also we can consult with doctors for our dogs with the live chat feature. This E-commerce site is made up with Next.JS, Node.JS and MongoDB."
              ghLink="https://github.com/FallenCap/PawLife"
              demoLink="https://pawlife-git-master-grey-hat-07.vercel.app/Login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Chatties}
              isBlog={false}
              title="Chatties"
              description="Chatties is a Public Chat room. Where anyone can chat with others just after completing basic login. It is made up with React and Firebase."
              ghLink="https://github.com/FallenCap/Chatties"
              demoLink="https://chatties-fallencap.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Weathery}
              isBlog={false}
              title="Weathery"
              description="Weathery is a Weather app. We can see weather of any place using this website. It is made up with HTML, CSS, JavaScript."
              ghLink="https://github.com/FallenCap/Weathery.github.io"
              demoLink="https://fallencap.github.io/Weathery.github.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AVL_Tree}
              isBlog={false}
              title="AVL Tree Visualizer"
              description="AVL Tree Visualizer is a tool more than a website. This is mainly used to understand the AVL tree and all its function. It is made up with HTML, CSS, JavaScript."
              ghLink="https://github.com/FallenCap/AVL-Tree.github.io"
              demoLink="https://fallencap.github.io/AVL-Tree.github.io/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
