import React from "react";
import "../styles/SkillCard.css";

function SkillCard({ icon, cardTitle, cardDescription }) {
  return (
    <div className="skillCard">
      <div className="skillCard__icon">{icon}</div>
      <h3 className="skillCard__title">{cardTitle}</h3>
      <p className="skillCard__description">{cardDescription}</p>
    </div>
  );
}

export default SkillCard;
