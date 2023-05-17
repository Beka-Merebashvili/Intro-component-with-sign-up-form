import { createGlobalStyle } from "styled-components";
import bgImige from "../assets/bg-intro-mobile.png";
import bgDesktopImg from "../assets/bg-intro-desktop.png" ;

const Globalstyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    text-decoration: none;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}
body {
    background-color: #FF7979 ;
    background-image: url(${bgImige}) ;

    @media only screen and (min-width: 1440px) {
    background-image: url(${bgDesktopImg}) ;
  }
}
` ;


export default Globalstyles ;