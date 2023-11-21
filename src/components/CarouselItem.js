import React from "react";

export const CarouselItem = ({ item, width }) => {
  return (
    <div className="carousel-img" style={{ width: width }}>
      <div></div>
      <img className="carousel-img" src={item.img.default} />
      <div className="carousel-item-text">{item.description}</div>
    </div>
  );
};