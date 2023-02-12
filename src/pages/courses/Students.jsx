import { Courses } from "./Courses";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/UI/Button";
export const Students = () => {
  return (
    <div>
      <Courses />
      <Card>
        <h4>Student Name 1</h4>
        <Link to={"/courses/students/1"}>
        <Button>Details</Button>
        </Link>
      </Card>
      <Card>
        <h4>Student Name 2</h4>
        <Link to={"/courses/students/2"}>
        <Button>Details</Button>
        </Link>
      </Card>
    </div>
  );
};
const Card = styled.div`
  display: flex;
  background-color: white;
  width: 30rem;
  height: 3rem;
  margin-top: 1rem;
`;