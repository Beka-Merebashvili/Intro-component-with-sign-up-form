import { useState } from "react";
import bgImige from "./assets/bg-intro-mobile.png";
import bgDesktopImg from "./assets/bg-intro-desktop.png" ;
import "./App.css";
import Heading from "./components/Heading";
import Form from "./components/Form";

function App() {
  return (
    <div style={styles.flex}>
      <Heading />
      <Form />
    </div>
  );
}

export default App;

const styles = {
   
  flex : {
    display : "flex" ,
    flexDirection : "column" ,
    alignItems: "center" ,
    backgroundImage: `url(${bgImige})`,
    backgroundSize : "cover" ,
    backgroundColor: "#FF7979",
    paddingTop: 88 ,
  }
};

if (window.innerWidth >= 1440) {
  styles.flex = {
    height : "100vh" ,
    display : "flex" ,
    flexDirection: "row",
    justifyContent : "center" ,
    backgroundImage: `url(${bgDesktopImg})`,
    backgroundSize : "cover" ,
    backgroundColor: "#FF7979",
    paddingTop: "77px" ,
  }
}
