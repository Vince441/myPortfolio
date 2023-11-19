import React from "react";
import ExperienceList from "../components/ExperienceList";
import experiences from "../components/data";

export default function Presentation() {
  return (
    <div className="Container-Presentation-page">
      <div className="Container-presentation">
        <div className="first-part">
        <h1>PRESENTATION</h1>
        <p className="presentation">
          <strong>Hello !</strong>
          <br />
          <br />
          Je m'appelle <span>Vincent Louvart de Pontlevoye</span>, un passionné
          du web actuellement en formation à la Wild Code School en tant que
          Développeur Web & Mobile front-end junior.
          <br />
          <br /> Mon parcours a débuté au collège, où un premier stage dans un
          studio de création de sites web a ouvert mes yeux sur l'importance
          cruciale du design. <br />
          <br />
          C'est dans le cadre de ma formation spécialisée en communication des
          arts et des industries graphiques, avec une expertise marquée en PAO
          et imprimerie, que mes compétences en design ont pris forme.
          <br />
          <br /> Aujourd'hui, mon objectif est de fusionner ces compétences avec
          le développement web pour créer des expériences en ligne alliant
          esthétisme et fonctionnalité.
        </p>
        <h2>COMPETENCES</h2>
        <div className="container-logo">
          <div className="Logo-competence">
            <div className="Logo-1">
              <img src="./logo-competence/html-5.png" alt="" />
              <img src="./logo-competence/css-3.png" alt="" />
              <img src="./logo-competence/js.png" alt="" />
              <img src="./logo-competence/react.png" alt="" />
              <img src="./logo-competence/adobe-illustrator.png" alt="" />
              <img src="./logo-competence/adobe-photoshop.png" alt="" />
            </div>
            <div className="Logo-2">
              <img src="./logo-competence/adobe-indesign.png" alt="" />
              <img src="./logo-competence/figma.png" alt="" />
              <img src="./logo-competence/github-white.png" alt="" />
              <img src="./logo-competence/logo-git.png" alt="" />
              <img src="./logo-competence/vscode.png" alt="" />
              <img src="./logo-competence/mySQL.png" alt="" />
            </div>
          </div>
        </div>
        </div>
        <div className="scd-part">
        <h2>EXPERIENCE PRO</h2>
        <ExperienceList experiences={experiences} />
        </div>
      </div>
    </div>
  );
}
