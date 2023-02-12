import { useNavigate } from "react-router-dom";
export const useNavigation = (initial) => {
  const navigate = useNavigate();
  const BtnGoToHandler = (event) => {
    event.preventDefault();
    navigate(initial || '/');
  };
  return {
    BtnGoToHandler,
  };
};
