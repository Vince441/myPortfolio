import React from "react";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <>
      <div className="Home">
        <div className="Coucou">
          <p>Vincent Louvart de Pontlevoye</p>
          
            <section>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .changeDelay(100)
                    .typeString(
                      'DEV FRONT-END <span style="color: #F1F1F1">!</span>'
                    )
                    .pauseFor(500)
                    .deleteAll()
                    .typeString(
                      '<span style="color: #e34f26">HTML</span> <span style="color: #F1F1F1">!</span>'
                    )
                    .pauseFor(500)
                    .deleteAll()
                    .typeString(
                      '<span style="color: #4c6ae2">CSS</span> <span style="color: #F1F1F1">!</span>'
                    )
                    .pauseFor(500)
                    .deleteAll()
                    .typeString(
                      '<span style="color: #F0DB4F">JAVASCRIPT</span> <span style="color: #F1F1F1">!</span>'
                    )
                    .pauseFor(500)
                    .deleteAll()
                    .typeString(
                      '<span style="color: #61DBFB"> REACT</span> <span style="color: #F1F1F1">!</span>'
                    )
                    .pauseFor(500)
                    .deleteAll()
                    .typeString(
                      '<span style="color: #00758F">My</span><span style="color: #F29111">SQL</span> <span style="color: #F1F1F1">!</span>'
                    )
                    .pauseFor(500)
                    .deleteAll()
                    .typeString(
                      'DEV FRONT-END <span style="color: #F1F1F1">!</span>'
                    )
                    .start();
                }}
              />
            </section>
          
        </div>
      
      <div className="Container-Projet">
        <div className="Projet1">
          <img src="/logo-SisC-2.png" />
          <h1>Sharing is Caring</h1>
          <p>Site Web Espace Coworking</p>
        </div>
        <div className="Projet2">
          <img src="/Radio_World.png" />
          <h1>Radio World</h1>
          <p>Application React.js</p>
        </div>
        <div className="Projet3">
          <img src="/PTinterogation.png" />
          <h1>Soon</h1>
          <p>3eme Projet</p>
        </div>
      </div>
      </div>
    </>
  );
}
