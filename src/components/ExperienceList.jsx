import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";




export default function ExperienceList({ experiences }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className="ContainerMapExperience">
<Carousel
        responsive={responsive}
        swipeable="true"
        showDots={false}
        infinite="true"
        keyBoardControl="true"
        transitionDuration={500}
        customTransition="all 2s"
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >


      {experiences.map((object, index) => (
      <div className="Exp-container" key={index}>
    
    <h3>{object.itemName}</h3>
    <p>
      {object.description} <br />
      {object.option}
      <br />
      <span>{object.diplome}</span>
      <br />
      {object.year}
    </p>
  </div>
  ))}</Carousel>
    </div>
  );
}
