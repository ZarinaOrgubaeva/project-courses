import styled from "styled-components";

const Button = ({ children, onClick, id }) => {
  return (
    <ButtonStyled onClick={onClick} id={id}>
      {children}
    </ButtonStyled>
  );
};
export default Button;
const ButtonStyled = styled.button`
  color: white;
  padding: 0.3rem;
  border-radius: 5px;
  border: none;
  background-color: #459785da;
`;
