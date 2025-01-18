import styled from "styled-components";
import { getHexColor } from "../common-components/helper";

export const StyledBody = styled.div`
  .resturant-container {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
  }
`;

export const StyledResturantCard = styled.div`
  width: 220px;
  height: 300px;
  border: 1px solid ${getHexColor("base", "c01")};
  border-radius: 8px;
  background-color: ${getHexColor("base", "c00")};
  cursor: pointer;
  &:hover {
        box-shadow: 0px 0px 10px -3px ${getHexColor("base", "c02")};;
  }
  .resturant-image {
    width: 100%;
    img {
      width: 100%;
      border-radius: 8px 8px 0px 0px;
    }
  }
  .resturant-info {
    padding: 4px 8px;
    .resturant-name {
      margin-bottom: 4px;
      h3 {
        font-size: 18px;
        color: ${getHexColor("base", "c08")};
      }
    }
    .resturant-tags {
      margin-bottom: 16px;
      p {
        color: ${getHexColor("base", "c05")};
        font-size: 12px;
      }
    }
    .resturant-ratings-and-info {
      display: flex;
      gap: 8px;
      align-items: center;
      img {
        width: 12px;
      }
      p {
        font-size: 12px;
      }
    }
  }
`;

export const StyledTag = styled.div`
  background-color: #7fff00;
  padding: 4px 8px;
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 4px;
  border-radius: 4px;
`;
