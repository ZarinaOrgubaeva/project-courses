import { NavLink } from "react-router-dom";
import styled from "styled-components";
export const SideBar = () => {
  return (
    <Container>
      <h2>LOGO</h2>
      <ul>
        <li>
          <NavLink
            style={({ isActive }) => ({
              textDecoration: "none",
              backgroundColor: isActive ? "gray" : " ",
              color: isActive ? "black" : "blue",
              borderBottom: "1px solid gray",
            })}
            to="/courses"
          >
            Courses
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => ({
              textDecoration: "none",
              backgroundColor: isActive ? "gray" : " ",
              color: isActive ? "black" : "blue",
              borderBottom: "1px solid gray",
            })}
            to="/anouncements"
          >
            Anouncements
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => ({
              textDecoration: "none",
              backgroundColor: isActive ? "gray" : " ",
              color: isActive ? "black" : "blue",
              borderBottom: "1px solid gray",
            })}
            to="/notifications"
          >
            Notifications
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => ({
              textDecoration: "none",
              backgroundColor: isActive ? "gray" : " ",
              color: isActive ? "black" : "blue",
            })}
            to="/schedule"
          >
            Schedule
          </NavLink>
        </li>
      </ul>
    </Container>
  );
};

const Container = styled.div`
  background-color: #9b9696;
  display: flex;
  flex-direction: column;
  width: 12%;
  height: 40.5rem;
  position: absolute;
  top: 0%;
  h2 {
    color: blueviolet;
    margin-top: 2rem;
  }
  ul {
    list-style: none;
    background-color: white;
    margin-top: -5rem;
    width: 100%
  }
`;
