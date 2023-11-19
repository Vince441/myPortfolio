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
              {object.description} <br />
              {object.option}
              <br />
              {object.year}
            </p>
          </div>
        </div>
        
      ))}
      
    </div>
  );
}
