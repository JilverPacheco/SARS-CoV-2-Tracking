import { createGlobalStyle } from "styled-components";
import OswaldLight from "../fonts/Oswald/Oswald-Light.ttf";
import OswaldRegular from "../fonts/Oswald/Oswald-Regular.ttf";
import OswaldBold from "../fonts/Oswald/Oswald-Bold.ttf";

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'OswaldLight';
    src: url(${OswaldLight});
    font-weight: normal;
    font-style: normal;
  }
@font-face {
    font-family: 'OswaldRegular';
    src: url(${OswaldRegular});
    font-weight: normal;
    font-style: normal;
  }
@font-face {
    font-family: 'OswaldBold';
    src: url(${OswaldBold});
    font-weight: normal;
    font-style: normal;
  }
body{
  background-color: #f0f2f5;
    padding:0px;
    margin:0px;
}
*, *:after, *:before{
    font-family: OswaldLight;
    padding:0px;
    margin:0px;
}
`;
