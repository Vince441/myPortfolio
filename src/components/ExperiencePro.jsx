import React from "react";
import Slider from "react-slick";
export default function ExperiencePro({
  itemName,
  description,
  option,
  diplome,
  year,
}) {
  return (
    <>
    <div className="Exp-container">
    
      <h3>{itemName}</h3>
      <p>
        {description} <br />
        {option}
        <br />
        <span>{diplome}</span>
        <br />
        {year}
      </p>
    </div>
    
    </>
  );
}

