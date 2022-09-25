import React from "react";
import "../../Global.scss";
import "./Card.scss";

  interface api {
    name: string,
    price: number,
    img: string,
    id: number
  }
export const Card: React.FC<api> = ({ name, price, img, id }) => {
  
  return (
    <div className="card">
      <figure>
        <img
          src={img}
          alt=""
        />
      </figure>
      <span>{name}</span>
      <span>$ {price}</span>
      <div className="btn-area">
        <button className="btn-card btn">SEE MORE</button>
      <div className="btn-favorite btn">
        <input type="checkbox" className="click" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="favorite"
          id="Layer_1"
          data-name="Layer 1"
          viewBox="0 0 24 24"
          width="512"
          height="512"
        >
          <path d="M17.5.917a6.4,6.4,0,0,0-5.5,3.3A6.4,6.4,0,0,0,6.5.917,6.8,6.8,0,0,0,0,7.967c0,6.775,10.956,14.6,11.422,14.932l.578.409.578-.409C13.044,22.569,24,14.742,24,7.967A6.8,6.8,0,0,0,17.5.917Z" />
        </svg>
      </div>
      </div>
    </div>
  );
};
