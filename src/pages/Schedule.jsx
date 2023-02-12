import styled from "styled-components";
import Button from "../components/UI/Button";
import { useNavigation } from "../hook/useNavigation";
export const Schedule = () => {
  const {BtnGoToHandler}=useNavigation('/notifications')
    return (
      <StyledDiv>
        <h2> Schedule page</h2>
      <br/>
        <Button onClick={BtnGoToHandler}>Go to Notifications page</Button>
      </StyledDiv>
    );
  };
  const StyledDiv= styled.div`
  margin-top: 5rem;
  text-align: center;
`