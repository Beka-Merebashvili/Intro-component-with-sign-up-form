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

   console.log(username );
   console.log(emptyUsername);
   console.log(lessThen4);


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
         {<img  className={emptyUsername || lessThen4 ? "errorIcon" : 'none'}  src={errorImg}  />}
        </div>

        <div className="inputContainer"> 
          <input className="lastnameInput" type="text" placeholder="Last Name" value={lastname} onChange={(event) => {
            if (firstNameRegex.test(event.target.value)|| event.target.value == "") {
              setLastname(event.target.value) ;
            }
          }} />
           {emptyLastname && <p className="errorText">Last Name cannot be empty</p>}
           {lessThen4Lastname && <p className="errorText">Last Name must contain at least 4 characters</p>}
           { <img  className={emptyLastname || lessThen4Lastname ? "errorIcon" : 'none'}  src={errorImg}  />}
        </div>

        <div className="inputContainer">
          <input className="emailInput" type="text" placeholder="Email Address" onChange={(event) => {
            setEmail(event.target.value);
          }}/>
           {emailInvaild && <p className="errorText">Looks like this is not an email</p>}
         {emailInvaild && <img className="errorIcon" src={errorImg} />}
        </div>

        <div className="inputContainer">
          <input className="passwordInput" type="password" placeholder="Password" onChange={(event) => {
            setPassword(event.target.value);
          }}/>
           {emptyPassword && <p className="errorText">Password cannot be empty</p>}
           {lessThen4Password && <p className="errorText">
            Password must contain at least 6 characters</p>}
           { <img  className={emptyPassword || lessThen4Password ? "errorIcon" : 'none'}  src={errorImg}  />}
        </div>

        <button  onClick={(event) => {
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
        <p className="conditions">
          By clicking the button, you are agreeing to our{" "}
          <span>Terms and Services</span>
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
      border: ${(props) => (props.emptyUsername || props.lessThen4) ? "2px solid #FF7979" : "1px solid #DEDEDE"};
    }
 .lastnameInput {
  border: ${(props) => ( props.emptyLastname || props.lessThen4Lastname) ? "2px solid #FF7979" : "1px solid #DEDEDE"};
 }
 .emailInput {
  border: ${(props) => props.emailInvaild   ? "2px solid #FF7979" : "1px solid #DEDEDE"};
 }
 .passwordInput {
  border: ${(props) => (props.emptyPassword || props.lessThen4Password) ? "2px solid #FF7979" : "1px solid #DEDEDE"};
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
 button {
    width: 280px;
    height:56px;
    background: #38CC8B ;
    font-size: 15px ;
    font-weight: 600;
    color: #FFFFFF ;
    box-shadow: inset 0px -4px 0px rgba(0, 0, 0, 0.0908818) ;
    border-radius: 5px ;
    border: none;
    letter-spacing: 1px ;
 }
 .conditions {
    font-size: 11px ;
    line-height: 21px;
    font-weight: 500;
    color: #BAB7D4 ;
    width: 220px ;
    text-align: center ;
  }
  .conditions span {
    font-weight: 700 ;
    color: #ff7979 ;
  }

  /* styles for desktop */

  @media only screen and (min-width: 1440px) {
    width: 540px ;
    height: 474px ;
    padding-top: 40px ;
    gap: 20px ;
  input {
    width: 460px ;
    height: 56px ;
  }
  button {
    width: 460px ;
  }
  .conditions {
    width: 368px ;
  }
}
`


