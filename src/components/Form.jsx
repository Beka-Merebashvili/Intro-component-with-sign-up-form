import { useState } from "react";
import errorImg from "../assets/icon-error.svg";
import styled from "styled-components";
import {FormContainer } from "../styled-components/Container.styled" ;

export default function Form() {
  const [username , setUsername] = useState("") ;
  const [emptyUsername , setEmptyUsername] = useState(false); 
  const firstNameRegex = /^[A-Za-z]+$/;


  const [lastname , setLastname] = useState("") ;
  const [emptyLastname , setEmptyLastname] = useState(false);


  const [email , setEmail] = useState("") ;
  const [emailInvaild , setEmailInvaild] = useState(false);
  const emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const [paswword , setPassword] = useState("") ;
  const [emptyPassword , setEmptyPassowrd] = useState(false);

  const [lessThen4 , setLessThen4] = useState(false);

   const[lessThen4Lastname, setLessThen4Lastname] = useState(false);
   const[lessThen4Password, setLessThen4Password] = useState(false);


  return (
    <FormContainer>
      <div className="price">
        <p className="priceText">
          <span  >Try it free 7 days</span> then $20/mo.
          thereafter
        </p>
      </div>
      <StyledForm username={username} emptyUsername={emptyUsername} lastname={lastname} emptyLastname={emptyLastname} email={email} emailInvaild={emailInvaild} paswword={paswword} emptyPassword={emptyPassword} lessThen4={lessThen4} lessThen4Lastname={lessThen4Lastname} lessThen4Password={lessThen4Password}>
        <div className="inputContainer">
          <input className="usernameInput" type="text" placeholder="First Name" value={username} onChange={(event) => {
            if (firstNameRegex.test(event.target.value)|| event.target.value == "") {
              setUsername(event.target.value) ;
            }
          }}/>
          {emptyUsername && <p className="errorText">First Name cannot be empty</p>}
          {lessThen4 && <p className="errorText">First Name must contain at least 4 characters</p>}
         { <img  style={emptyUsername || lessThen4 ? {...styles.errorIcon} : styles.none}  src={errorImg}  />}
        </div>

        <div className="inputContainer"> 
          <input className="lastnameInput" type="text" placeholder="Last Name" value={lastname} onChange={(event) => {
            if (firstNameRegex.test(event.target.value)|| event.target.value == "") {
              setLastname(event.target.value) ;
            }
          }} />
           {emptyLastname && <p className="errorText">Last Name cannot be empty</p>}
           {lessThen4Lastname && <p className="errorText">Last Name must contain at least 4 characters</p>}
           { <img  style={emptyLastname || lessThen4Lastname ? {...styles.errorIcon} : styles.none}  src={errorImg}  />}
        </div>

        <div className="inputContainer">
          <input className="emailInput" type="text" placeholder="Email Address" onChange={(event) => {
            setEmail(event.target.value);
          }}/>
           {emailInvaild && <p className="errorText">Looks like this is not an email</p>}
         {emailInvaild && <img style={styles.errorIcon} src={errorImg} />}
        </div>

        <div className="inputContainer">
          <input className="passwordInput" type="password" placeholder="Password" onChange={(event) => {
            setPassword(event.target.value);
          }}/>
           {emptyPassword && <p className="errorText">Password cannot be empty</p>}
           {lessThen4Password && <p className="errorText">
            Password must contain at least 6 characters</p>}
           { <img  style={emptyPassword || lessThen4Password ? {...styles.errorIcon} : styles.none}  src={errorImg}  />}
        </div>

        <button style={styles.button} onClick={(event) => {
          if(username == "") {
            setEmptyUsername(true) ;
          }
          else {
            setEmptyUsername(false);
          }

          if (lastname == "") {
            setEmptyLastname(true) ;
          }
          else {
            setEmptyLastname(false) ;
          }
          if(emailRegex.test(email)) {
            setEmailInvaild(false) ;
          }
          else {
            setEmailInvaild(true) ;
          }
          if (paswword == "") {
            setEmptyPassowrd(true) ;
          }
          else {
            setEmptyPassowrd(false) ;
          }

          if (username.length > 0 && username.length < 4) {
            setLessThen4(true) ;
          }
          else {
            setLessThen4(false) ;
          }
          if (lastname.length > 0 && lastname.length < 4) {
            setLessThen4Lastname(true) ;
          }
          else {
            setLessThen4Lastname(false) ;
          }
          if (paswword.length > 0 && paswword.length < 6) {
            setLessThen4Password(true) ;
          }
          else {
            setLessThen4Password(false) ;
          }
          if(username == "" || lastname == "" || !emailRegex.test(email) || paswword == "" ||(username.length > 0 && username.length < 4) || (lastname.length > 0 && lastname.length < 4) || (paswword.length > 0 && paswword.length < 6) ) {
            event.preventDefault();
          }
        }}>CLAIM YOUR FREE TRIAL</button>
        <p style={styles.conditions}>
          By clicking the button, you are agreeing to our{" "}
          <span style={styles.span2}>Terms and Services</span>
        </p>
        </StyledForm>
      </FormContainer>
  );
}



const StyledForm = styled.form`
width: 328px;
height: 442px;
background: #ffffff;
box-shadow: 0px 8px 0px rgba(0, 0, 0, 0.14688) ;
border-radius: 10px;
margin-bottom: 68px;
padding-top: 24px;
display: flex;
flex-direction: column;
align-items: center;
gap: 18px;
.inputContainer {
  position: relative;
}
input {
  width: 280px ;
    height: 56px ;
    padding-left: 20px;
    outline: none ;
    font-size: 14px ;
    font-weight: 600 ;
    color: #3D3B48 ;
    letter-spacing: 0.25px ;
    &::placeholder{
      opacity: 0.75;
    }
}
.usernameInput {
      border: ${(props) => (props.username || props.emptyUsername || props.lessThen4) ? "2px solid #FF7979" : '1px solid #DEDEDE'};
    }
 .lastnameInput {
  border: ${(props) => (props.lastname || props.emptyLastname || props.lessThen4Lastname) ? "2px solid #FF7979" : '1px solid #DEDEDE'};
 }
 .emailInput {
  border: ${(props) => props.emailInvaild   ? "2px solid #FF7979" : '1px solid #DEDEDE'};
 }
 .passwordInput {
  border: ${(props) => (props.paswword || props.emptyPassword || props.lessThen4Password) ? "2px solid #FF7979" : '1px solid #DEDEDE'};
 }
 .errorText {
  font-size : 11px ;
    font-weight : 500 ;
    font-style : italic ;
    color: #FF7979;
    position : absolute ;
    bottom : -13px ;
    right : 0;
 }
 .errorIcon {
  position : absolute ;
    top : 14px ;
    right : 16px ;
 }
 .none {
  display: none;
 }
`

const styles = {
  // flex: {
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
  //   marginTop: "64px",
  // },
  // price: {
  //   background: "#5E54A4",
  //   width: "328px",
  //   height: "88px",
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   boxShadow: " 0px 8px 0px rgba(0, 0, 0, 0.14688)",
  //   borderRadius: "10px",
  //   marginBottom: "24px",
  // },
  // text: {
  //   fontSize: "15px",
  //   fontWeight: "500px",
  //   lineHeight: "26px",
  //   width: "194px",
  //   color: "#FFFFFF",
  //   textAlign: "center",
  // },
  // span: {
  //   fontWeight: "700",
  // },
  // form: {
  //   width: "328px",
  //   height: "442px",
  //   background: "#FFFFFF",
  //   boxShadow: "0px 8px 0px rgba(0, 0, 0, 0.14688)",
  //   borderRadius: "10px",
  //   marginBottom: "68px",
  //   paddingTop: "24px",
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
  //   gap: "18px",
  // },
  // inputParent : {
  //   position : "relative" ,
  // } ,
  // input: {
  //   width: "280px",
  //   height: "56px",
  //   border: " 1px solid #DEDEDE",
  //   paddingLeft: "20px",
  //   outline: "none",
  //   fontSize: "14px",
  //   fontWeight: "600",
  //   color: "#3D3B48",
  //   letterSpacing: "0.25px",
  // },
  // inputerror : {
  //   border: "2px solid #FF7979",
  // } ,
  // errorText : {
  //   fontSize : "11px" ,
  //   fontWeight : "500" ,
  //   fontStyle : "italic" ,
  //   color: "#FF7979",
  //   position : "absolute" ,
  //   bottom : "-13px" ,
  //   right : "0" ,
  // } ,
  errorIcon : {
    position : "absolute" ,
    top : "14px" ,
    right : " 16px"
  } ,
  none : {
    display : "none" ,
  } ,
  button: {
    width: "280px",
    height: "56px",
    background: "#38CC8B",
    fontSize: "15px",
    fontWeight: "600",
    color: "#FFFFFF",
    boxShadow: "inset 0px -4px 0px rgba(0, 0, 0, 0.0908818)",
    borderRadius: "5px",
    border: "none",
    letterSpacing: "1px",
  },
  conditions: {
    fontSize: "11px",
    lineHeight: "21px",
    fontWeight: "500",
    color: "#BAB7D4",
    width: "220px",
    textAlign: "center",
  },
  span2: {
    fontWeight: "700",
    color: "#ff7979",
  },
};


if (window.innerWidth >= 1440) {
  styles.flex = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  } ,
  styles.price = {
    background: "#5E54A4",
    width: "540px",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: " 0px 8px 0px rgba(0, 0, 0, 0.14688)",
    borderRadius: "10px",
    marginBottom: "24px",
  }
  styles.text = {
    fontSize: "15px",
    fontWeight: "500px",
    lineHeight: "26px",
    width: "316px",
    color: "#FFFFFF",
    textAlign: "center",
  }
  styles.form = {
    width: "540px",
    height: "474px",
    background: "#FFFFFF",
    boxShadow: "0px 8px 0px rgba(0, 0, 0, 0.14688)",
    borderRadius: "10px",
    marginBottom: "68px",
    paddingTop: "40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
  }
  styles.input ={
    width: "460px",
    height: "56px",
    border: " 1px solid #DEDEDE",
    paddingLeft: "20px",
    outline: "none",
    fontSize: "14px",
    fontWeight: "600",
    color: "#3D3B48",
    letterSpacing: "0.25px",
  }
  styles.button ={
    width: "460px",
    height: "56px",
    background: "#38CC8B",
    fontSize: "15px",
    fontWeight: "600",
    color: "#FFFFFF",
    boxShadow: "inset 0px -4px 0px rgba(0, 0, 0, 0.0908818)",
    borderRadius: "5px",
    border: "none",
    letterSpacing: "1px",
  //   transition: "background 0.3s ease-in-out",  
  //  ":hover": {
  //   cursor : "pointer" ,
  //   backgroundColor: "red", }
  }
  styles.conditions ={
    fontSize: "11px",
    lineHeight: "21px",
    fontWeight: "500",
    color: "#BAB7D4",
    width: "368px",
    textAlign: "center",
  }

}

