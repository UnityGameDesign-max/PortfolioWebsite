import React from "react";
import "../styles/ProjectCard.css";

function ProjectCard({ title, description, githubLink, image, languages }) {
  return (
    <div className="projectCard">
      <div className="projectCard-section">
        <div className="projectCard__description">
          <h4>FEATURED PROJECT</h4>
          <h3>{title}</h3>
          <div className="projectCard__description-card">{description}</div>
          <div className="languages">{languages}</div>
          <div className="link">{githubLink}</div>
        </div>
        <div className="projectCard__image">{image}</div>
      </div>
    </div>
  );
}

export default ProjectCard;
