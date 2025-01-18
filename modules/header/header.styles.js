import styled from "styled-components";
import { getHexColor } from "../common-components/helper";

export const StyledHeader = styled.div`
    font-family: Inter;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${getHexColor('primary', 'c00')};
    padding: 12px 24px;
    .logo-container {
        .logo {
            width: 60px;
        }
    }
    .nav-items {
        ul {
            padding: 0px;
            margin: 0px;
            list-style: none;
            display: flex;
            align-items: center;
            gap: 8px;
            cursor: pointer;
            li {
                padding: 8px 24px;
                color: ${getHexColor('primary', 'c05')};
                &:hover {
                    background-color: ${getHexColor('secondary', 'c00')};
                }
            }
        }
    }
`