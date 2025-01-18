import React from "react";
import { StyledResturantCard, StyledTag } from "./body.styles";
import { RESTURANT_IMAGE } from "../common-components/constant";
import StarIcon from '/src/assets/ui-icons/star.png'

function ResturantCard() {
  return (
    <StyledResturantCard>
      <div className="resturant-image">
        <img alt="resturant image" src={RESTURANT_IMAGE} />
      </div>
      <div className="resturant-info">
        <div className="resturant-name">
          <h3>Call Me Chow</h3>
        </div>
        <div className="resturant-tags">
          <p>Chinese, Pan-Asian</p>
        </div>
        <div className="resturant-ratings-and-info">
          <StyledTag>
            <img src={StarIcon} />
            <p>4.5</p>
          </StyledTag>
          |
          <div className="eta">
            30 MINS
          </div>
        </div>
        <div className="resturant-additional-info"></div>
      </div>
    </StyledResturantCard>
  );
}

export default ResturantCard;
