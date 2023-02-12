import { Courses } from "./Courses";
import styled from "styled-components";
export const Ratings = () => {
  return (
    <div>
      <Courses />
      <StyledH2>Ratings page</StyledH2>
    </div>
  );
};
const StyledH2= styled.h2`
text-align: center;
`