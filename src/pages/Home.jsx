import React from "react";
import Typewriter from "typewriter-effect";
import projet from "../components/projet.js";
import ProjetHome from "../components/ProjetHome";

export default function Home() {
  return (
    <div className="Home">
      <div className="Coucou-home">
      <div className="Coucou">
        <p>Vincent Louvart de Pontlevoye</p>

        <section>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .changeDelay(50)
                .typeString(
                  'DEV FRONT-END<span style="color: #F1F1F1"> !</span>'
                )
                .pauseFor(300)
                .deleteAll()
                .typeString(
                  '<span style="color: #61DBFB">REACT</span><span style="color: #F1F1F1"> !</span>'
                )
                .pauseFor(300)
                .deleteAll()
                .typeString(
                  '<span style="color: #539e43">Node.js</span><span style="color: #F1F1F1"> !</span>'
                )
                .pauseFor(300)
                .deleteAll()
                .typeString(
                  '<span style="color: #00758F">My</span><span style="color: #F29111">SQL</span><span style="color: #F1F1F1"> !</span>'
                )
                .pauseFor(300)
                .deleteAll()
                .typeString(
                  'DEV FRONT-END <span style="color: #F1F1F1">!</span>'
                )
                .start();
            }}
          />
        </section>
      </div>

      <ProjetHome projet={projet} />
      </div>
    </div>
  );
}
