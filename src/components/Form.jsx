import { useState } from "react";
import errorImg from "../assets/icon-error.svg";

export default function Form() {
  const [username , setUsername] = useState("") ;
  const [emptyUsername , setEmptyUsername] = useState(false); 

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

// console.log(emptyPassword);

  return (
    <div style={styles.flex}>
      <div style={styles.price}>
        <p style={styles.text}>
          <span style={styles.span}>Try it free 7 days</span> then $20/mo.
          thereafter
        </p>
      </div>
      <form style={styles.form}>
        <div style={styles.inputParent}>
          <input style={emptyUsername || lessThen4  ? {...styles.input , ...styles.inputerror} : styles.input} type="text" placeholder="First Name" onChange={(event) => {
            setUsername(event.target.value) ;
          }}/>
          {emptyUsername && <p style={styles.errorText}>First Name cannot be empty</p>}
          {lessThen4 && <p style={styles.errorText}>First Name must contain at least 4 characters</p>}
         { <img  style={emptyUsername || lessThen4 ? {...styles.errorIcon} : styles.none}  src={errorImg}  />}
        </div>

        <div style={styles.inputParent}> 
          <input style={emptyLastname  || lessThen4Lastname ?{...styles.input , ...styles.inputerror} : styles.input} type="text" placeholder="Last Name" onChange={(event) => {
            setLastname(event.target.value);
          }} />
           {emptyLastname && <p style={styles.errorText}>Last Name cannot be empty</p>}
           {lessThen4Lastname && <p style={styles.errorText}>Last Name must contain at least 4 characters</p>}
           { <img  style={emptyLastname || lessThen4Lastname ? {...styles.errorIcon} : styles.none}  src={errorImg}  />}
        </div>

        <div style={styles.inputParent}>
          <input style={emailInvaild ? {...styles.input , ...styles.inputerror} : styles.input} type="text" placeholder="Email Address" onChange={(event) => {
            setEmail(event.target.value);
          }}/>
           {emailInvaild && <p style={styles.errorText}>Looks like this is not an email</p>}
         {emailInvaild && <img style={styles.errorIcon} src={errorImg} />}
        </div>


        <div style={styles.inputParent}>
          <input style={emptyPassword || lessThen4Password ? {...styles.input , ...styles.inputerror} : styles.input} type="password" placeholder="Password" onChange={(event) => {
            setPassword(event.target.value);
          }}/>
           {emptyPassword && <p style={styles.errorText}>Password cannot be empty</p>}
           {lessThen4Password && <p style={styles.errorText}>
            Password must contain at least 6 characters</p>}
           { <img  style={emptyPassword || lessThen4Password ? {...styles.errorIcon} : styles.none}  src={errorImg}  />}
        </div>

        <button style={styles.button} onClick={(event) => {
          event.preventDefault();
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


        }}>CLAIM YOUR FREE TRIAL</button>
        <p style={styles.conditions}>
          By clicking the button, you are agreeing to our{" "}
          <span style={styles.span2}>Terms and Services</span>
        </p>
      </form>
    </div>
  );
}

const styles = {
  flex: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "64px",
  },
  price: {
    background: "#5E54A4",
    width: "328px",
    height: "88px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: " 0px 8px 0px rgba(0, 0, 0, 0.14688)",
    borderRadius: "10px",
    marginBottom: "24px",
  },
  text: {
    fontSize: "15px",
    fontWeight: "500px",
    lineHeight: "26px",
    width: "194px",
    color: "#FFFFFF",
    textAlign: "center",
  },
  span: {
    fontWeight: "700",
  },
  form: {
    width: "328px",
    height: "442px",
    background: "#FFFFFF",
    boxShadow: "0px 8px 0px rgba(0, 0, 0, 0.14688)",
    borderRadius: "10px",
    marginBottom: "68px",
    paddingTop: "24px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "18px",
  },
  inputParent : {
    position : "relative" ,
  } ,
  input: {
    width: "280px",
    height: "56px",
    border: " 1px solid #DEDEDE",
    paddingLeft: "20px",
    outline: "none",
    fontSize: "14px",
    fontWeight: "600",
    color: "#3D3B48",
    letterSpacing: "0.25px",
  },
  inputerror : {
    border: "2px solid #FF7979",
  } ,
  errorText : {
    fontSize : "11px" ,
    fontWeight : "500" ,
    fontStyle : "italic" ,
    color: "#FF7979",
    position : "absolute" ,
    bottom : "-13px" ,
    right : "0" ,
  } ,
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

