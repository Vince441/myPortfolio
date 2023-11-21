import React from "react";

function ProjetHome({ projet }) {
  return (
    <div className="Projet-Home">
      {projet.map((projets, index) => (
        <div className="Projet-cards" key={index}>
          <img src={projets.Image} />
          <div className="Projet-text-image">
            <div className="container-image">
              {projets.Logo ? <img src={projets.Logo} /> : ""}
            </div>
          </div>
          <div className="projet-text">
            <h1>{projets.NumeroProjet}</h1>
            <h2>{projets.ProjetName}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjetHome;
