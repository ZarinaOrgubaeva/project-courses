import { NavLink} from "react-router-dom";
import styled from "styled-components";
export const Courses = () => {
 return (
    <HeaderStyled>
      <NavStyled>
        <ul>
          <li>
            <NavLink
              style={({ isActive }) => ({
                textDecoration: "none",
                color: isActive ? "black" : "white",
              })}
              to={"/courses/materials"}
            >
              {" "}
              Materials
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                textDecoration: "none",
                color: isActive ? "black" : "white",
              })}
              to={"/courses/students"}
            >
              {" "}
              Students
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                textDecoration: "none",
                color: isActive ? "black" : "white",
              })}
              to={"/courses/ratings"}
            >
              {" "}
              Ratings
            </NavLink>
          </li>
        </ul>
      </NavStyled>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  height: 5rem;
  background-color: blue;
  color: white;
`;
const NavStyled = styled.nav`
  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
  }
  li {
    margin-top: 1rem;
    font-size: 20px;
  }
`;
