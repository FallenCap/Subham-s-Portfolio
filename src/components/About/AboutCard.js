import React from "react";
import Card from "react-bootstrap/Card";
import { BsArrowRightCircleFill } from "react-icons/bs";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Subham Saha </span>
            from <span className="purple"> West Bengal, India.</span>
            <br />
            Currently I'm pursuing MCA from{" "}
            <span className="purple">VIT, Bhopal</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <BsArrowRightCircleFill /> Playing PC Games
            </li>
            <li className="about-activity">
              <BsArrowRightCircleFill /> Cooking
            </li>
            <li className="about-activity">
              <BsArrowRightCircleFill /> Listening Music
            </li>
            <li className="about-activity">
              <BsArrowRightCircleFill /> Watching Movies, Web Series & Anime
            </li>
          </ul>

          <p style={{ color: "#395b64" }}>
            "Keep your face always toward the sunshine - and shadows will fall
            behind you."{" "}
          </p>
          <footer className="blockquote-footer">Walt Whitman</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
