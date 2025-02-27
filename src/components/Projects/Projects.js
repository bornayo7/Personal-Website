import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import leetcode from "../../Assets/Projects/leetcode.png";
import AIS from "../../Assets/Projects/ais_utd_logo.png";
import website from "../../Assets/Projects/website.png";
import cometpark from "../../Assets/Projects/cometpark.png";
import About from "../About/About";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AIS}
              isBlog={false}
              title="AI Music Genre Classification Project"
              description="Currently developing a machine learning model using a Convolutional Neural Network (CNN) to classify music genres based on audio spectrograms. Utilizing Python, TensorFlow, Librosa, and pandas for ongoing data preprocessing and model training. Building a full-stack web application with React and Node.js to present classification results, allowing users to interact with the system and upload their own music for real-time classification."
              ghLink="https://github.com/ly-sona/music-genre-classification"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cometpark}
              isBlog={false}
              title="CometPark"
              description="Collaborated with a team to develop CometPark, a TypeScript-based web application for tracking and analyzing parking lot operations at UTD. 
    Utilized React for the frontend, Node.js and Express.js for the backend, and MongoDB for data storage. 
    Implemented data updates using Pinata to ensure secure and efficient data management."
              ghLink="https://github.com/yourusername/CometPark"
              demoLink="https://cometpark.org"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leetcode}
              isBlog={false}
              title="Daily LeetCode Discord Bot"
              description="Collaborated with a small team to develop a verified Discord bot designed for assigning and tracking daily LeetCode challenges. 
              The bot used Node.js for its backend and integrated with Discord’s API to handle user interactions, commands, and data input. 
              Included features for tracking completion, assigning punishments for missed challenges, and automating group activities."
              ghLink="https://github.com/bornayo7/Leetcode-Daily-Bot"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={website}
              isBlog={false}
              title="This Website"
              description="Built a personal portfolio website using React and Node.js to showcase projects and skills. 
              Implemented responsive design and dynamic routing to allow easy navigation. 
              Integrated GitHub for version control and deployed the website using modern web development frameworks."
              ghLink="https://github.com/bornayo7/personal-website"
              demoLink="https://bornayo7.github.io/personal-website/"
            />
          </Col>
        </Row>
        <About></About>
      </Container>
    </Container>
  );
}

export default Projects;
