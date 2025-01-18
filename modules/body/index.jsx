import React from "react";
import { StyledBody } from "./body.styles";
import ResturantCard from "./resturant-card";

function Body() {
  return (
    <StyledBody>
      <div className="search">
        <input></input>
        <button></button>
      </div>
      <div className="resturant-container">
        <ResturantCard />
      </div>
    </StyledBody>
  );
}

export default Body;
