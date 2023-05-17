import {SyledContainer} from "../styled-components/Container.styled" ;


export default function Heading() {
  return (
    <SyledContainer> 
      <h1>Learn to code by watching others</h1>
      <p className="text">
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.
      </p>
      </SyledContainer>
  );
}


  // flex: {
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
  // },
  // headging1: {
  //   fontSize: 28,
  //   fontWeight: 700,
  //   color : " #FFFFFF" ,
  //   width: 328,
  //   textAlign: "center",
  //   letterSpacing: "-0.29px"
  // },
  // text: {
  //   fontSize: 16,
  //   fontWeight: 500,
  //   lineHeight: "26px",
  //   width: 278, 
  //   color : " #FFFFFF" ,
  //   textAlign: "center",
  //   marginTop: "16px" ,
  // },



// if (window.innerWidth >= 1440) {
//   styles.flex = {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "start",
//     marginTop : "180px" ,
//     marginRight : "45px",
//   } ,
//   styles.headging1 = {
//     fontSize: "50px",
//     fontWeight: 700,
//     color : " #FFFFFF" ,
//     width: "525px",
//     textAlign: "start",
//     letterSpacing: "-0.52px"
//   }
//   styles.text = {
//     fontSize: 16,
//     fontWeight: 500,
//     lineHeight: "26px",
//     width: "500px", 
//     color : " #FFFFFF" ,
//     textAlign: "start",
//     marginTop: "16px" ,
//   }
// }