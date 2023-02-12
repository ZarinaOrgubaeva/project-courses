import {useParams, NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import { Courses } from "./Courses";
export const MaterialsDetails = () => {
  const params = useParams();
  return (
    <>
      <Courses />
      <Container>
        <h4>Material Details Page:</h4>
        <h4>Material {params.id}</h4>
      </Container>
      <TabHandler>
        <ul>
          <li>
            <NavLink
              style={({ isActive }) => ({
                textDecoration: "none",
                color: isActive ? "black" : "white",
              })}
              to={"details/submitted"}
            >
              Submitted
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                textDecoration: "none",
                color: isActive ? "black" : "white",
              })}
              to={"details/waiting"}
            >
              Waiting
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                textDecoration: "none",
                color: isActive ? "black" : "white",
              })}
              to={"details/late"}
            >
              Late
            </NavLink>
          </li>
        </ul>
      </TabHandler>
     <Outlet/>
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
const TabHandler = styled.div`
  width: 30rem;
  height: 3rem;
  background-color: #23b6aa;
  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    font-size: 1rem;
  }
  li {
    margin-top: 0.5rem;
  }
`;