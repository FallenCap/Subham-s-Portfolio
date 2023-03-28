import React from "react";
import Card from "react-bootstrap/Card";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <button className="btn btn-port" target="_blank">
          <a href={props.ghLink}>
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </a>
        </button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <button
            className="btn btn-port"
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <a href={props.demoLink}>
              <CgWebsite /> &nbsp;
              {"Demo"}
            </a>
          </button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
