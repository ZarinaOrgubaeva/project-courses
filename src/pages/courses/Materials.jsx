import styled from "styled-components";
import Button from "../../components/UI/Button";
import { Courses } from "./Courses";
import { Link, useSearchParams } from "react-router-dom";
export const Materials = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParamsHandler = (event) => {
    event.preventDefault();
    searchParams.set("addNewMaterial", true);
    setSearchParams(searchParams);
  };
  const closeModalHandler = () => {
    searchParams.delete("addNewMaterial");
    setSearchParams(searchParams);
  };
  return (
    <Container>
      <Courses />
      <Button id="modalBtn" onClick={searchParamsHandler}>
        Add new material
      </Button>
      {searchParams.has("addNewMaterial") ? (
        <ModalHandler>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Suscipit facere, dolore qui iusto minima vero. Officiis laboriosam qui magnam, 
             iure dignissimos quaerat quas aspernatur,
             odit iste dolores inventore nam quisquam!</p>
          <Button onClick={closeModalHandler}>Close Modal</Button>
        </ModalHandler>
      ) : null}

      <Card>
        <h4>Material 1</h4>
        <Link to={"/courses/materials/1"}>
        <Button>Details</Button>
        </Link>
      </Card>
      <Card>
        <h4>Material 2</h4>
        <Link to={"/courses/materials/2"}>
        <Button>Details</Button>
        </Link>
      </Card>
    </Container>
  );
};
const Container = styled.div`
  #modalBtn {
    background-color: orange;
    color: white;
    padding: 0.4rem;
    border-radius: 5px;
    border: none;
    margin-left: 60%;
    margin-top: 5%;
  }
`;
const Card = styled.div`
  display: flex;
  background-color: white;
  width: 30rem;
  height: 3rem;
  margin-top: 1rem;
`;
const ModalHandler = styled.div`
  position: fixed; 
  z-index: 1; 
  left: 40%;
  top: 30%;
  width: 400px;
  height: 200px;
  background-color: pink;
`;
