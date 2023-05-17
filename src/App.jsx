import Heading from "./components/Heading";
import Form from "./components/Form";
import styled from "styled-components";
import Globalstyles from "./styled-components/GlobalStyles";

function App() {
  return (
    <StyledDviV>
      <Globalstyles />
      <Heading />
      <Form />
    </StyledDviV>
  );
}

export default App;

const StyledDviV = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 88px;

  @media only screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: center;
    padding-top: 77px;
  }
`;
