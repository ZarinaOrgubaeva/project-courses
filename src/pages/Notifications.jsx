import styled from "styled-components";
import Button from "../components/UI/Button";
import { useNavigation } from "../hook/useNavigation";
export const Notifications = () => {
  const {BtnGoToHandler}=useNavigation('/courses/materials')
    return (
      <StyledDiv>
        <h2>Notifications page</h2>
        <br/>
        <Button onClick={BtnGoToHandler}>Go to Materials page</Button>
      </StyledDiv>
    );
  };
  const StyledDiv= styled.div`
  margin-top: 5rem;
  text-align: center;
`