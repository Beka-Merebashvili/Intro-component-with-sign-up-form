import styled from "styled-components" ;

const SyledContainer = styled.div `
display: flex;
flex-direction: column;
align-items: center;
h1 {
    font-size: 28px;
    font-weight: 700;
    color: #ffffff;
    width: 328px;
    text-align: center;
    letter-spacing: -0.29px;
}
.text {
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
    width: 278px;
    color: #ffffff;
    text-align: center;
    margin-top: 16px;
}

/* styles for desktop */

@media only screen and (min-width: 1440px) {
    align-items: start;
    margin-right: 45px;
h1 {
    font-size: 50px;
    width: 525px;
    text-align: start;
    letter-spacing: -0.52px;
}
.text {
    width: 500px;
    text-align: start;
}
}
`

const FormContainer = styled(SyledContainer)`
margin-top: 64px;
.price {
    background: #5E54A4;
    width: 328px;
    height: 88px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow:  0px 8px 0px rgba(0, 0, 0, 0.14688) ;
    border-radius: 10px;
    margin-bottom: 24px;
}
.priceText {
    font-size: 15px;
    font-weight: 500;
    line-height: 26px;
    width: 194px;
    color: #ffffff;
    text-align: center;
}
span {
    font-weight: 700;
}

/* styles for desktop */

@media only screen and (min-width: 1440px) {
    .price {
        width: 540px;
        height: 60px;
    }
    .priceText {
        width: 316px;
    }
}
`


export {SyledContainer , FormContainer } ;