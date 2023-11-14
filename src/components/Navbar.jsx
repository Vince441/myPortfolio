import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {

function determinActive( { isActive } ){

if(isActive === true){
return "active"
}
else {
    return ""
}

}


  return (
    <>
    <div className='Navbar'>
      
      <div className='reseaux'>
      <a href='https://www.linkedin.com/'><span className='reseau-1'><img src="./Linkedin.png" alt="Linkedin" /></span></a>
        <a href='https://www.linkedin.com/'><span className='reseau-2'><img src="./git-white.png" alt="GitHub" /></span></a>
      </div>

      <div className='container-menu'>
        <NavLink to="/" className={determinActive}>ACCUEIL</NavLink>
        <NavLink to="Présentation" className={determinActive}>PRESENTATION</NavLink>
        <NavLink to="Projet" className={determinActive}>PROJET</NavLink>
        <NavLink to="Contact" className={determinActive}>CONTACT</NavLink>
      </div>

      <div className='audio'><p>My playlist</p>
        <audio controls src=""></audio>
      </div>
  </div>
  </>
  );
  };
