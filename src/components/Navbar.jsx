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
        <span className='reseau-1'><img src="./Linkedin.png" alt="Linkedin" /></span>
        <span className='reseau-2'><img src="./git-white.png" alt="GitHub" /></span>
      </div>
      <div className='container-menu'>
        <NavLink to="/" className={determinActive}>Accueil</NavLink>
        <NavLink to="Présentation" className={determinActive}>Présentation</NavLink>
        <NavLink to="Projet" className={determinActive}>Projet</NavLink>
        <NavLink to="Contact" className={determinActive}>Contact</NavLink>
    </div>
    </div>
  </>
  );
  };
