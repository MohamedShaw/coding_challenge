import { TextStyle } from "react-native";
import { fonts } from "../Theme/fonts";

export const getFontFamily = ({ fontWeight }: Pick<TextStyle, 'fontWeight'>): string => {
  switch (fontWeight) {
    case 'bold': return fonts.bold;
    default: return fonts.normal;
  }
};