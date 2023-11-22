import React from "react";

export default function ExperienceList({ experiences }) {
  return (
    <div className="ContainerMapExperience">
      <div className="trait"></div>
      {experiences.map((object, index) => (
        <div className={`Exp-container card-style-${index}`} key={index}>
          <div className="first-object">
            <h3>
              {object.diplome}
              <br />
              {object.itemName} <br />
              {object.ville}
            </h3>
          </div>
          <div className="sc-object">
            <p>
              <strong>{object.description}</strong>{" "}
            </p>
            {object.option ? <p> {object.option} </p> : ""}
            <p>{object.year}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
