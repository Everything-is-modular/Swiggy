import { base, primary, secondary } from "./constant";

const mapColor = {
    'base': base,
    'primary': primary,
    'secondary': secondary
}

export const getHexColor = (key, color) => {
    return mapColor[key][color]
}