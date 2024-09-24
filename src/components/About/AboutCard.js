import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", color: "#E0E0E0" }}>
            Hi Everyone, I am <span className="imp-text-color">Yash Baruah</span>
            from <span className="imp-text-color"> Southlake, Texas.</span>
            <br />
            I am currently a student at the University of Texas at Dallas, pursuing a
            <span className="imp-text-color"> Bachelor of Science in Computer Science</span> with a
            specialization in <span className="imp-text-color">Artificial Intelligence and Machine Learning (AI/ML).</span>
            <br />
            Through my academic journey, I have developed a strong foundation in software development, data structures, algorithms, and system programming.
            <br />
            <br />
            Apart from coding, some other activities that I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
          </ul>

          <p style={{ color: "#03DAC6", fontStyle: "italic" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer" style={{ color: "#A0A0A0" }}>
            Yash Baruah
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
