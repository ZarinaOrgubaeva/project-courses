import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Courses } from "./Courses";
export const StudentsDetails = () => {
 const params=useParams()
  return (
    <>
    <Courses/>
     <Container>
      <h4>Student Details Page:</h4>
      <h4>Student Name {params.id}</h4>
    </Container>
    </>
   
  );
};
const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 30rem;
  height: 6rem;
  margin-top: 1rem;
`;
