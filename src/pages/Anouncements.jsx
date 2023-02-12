import styled from "styled-components";
import Button from "../components/UI/Button";
import { useNavigation } from "../hook/useNavigation";

export const Anouncements = () => {
  const {BtnGoToHandler}=useNavigation('/courses/students')
  return (
    <StyledDiv>
      <h2>Anouncements page</h2>
      <br/>
      <Button onClick={BtnGoToHandler}>GO to Students page</Button>
    </StyledDiv>
  );
};
const StyledDiv= styled.div`
  margin-top: 5rem;
  text-align: center;
`