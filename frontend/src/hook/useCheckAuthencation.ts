import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateAccessToken } from "../redux/userSlice";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
const useTokenValidation = () => {
  const [cookies, setCookie] = useCookies(["token"]);
  const token = cookies.token;
  const dispatch = useDispatch();

  useEffect(() => {
    const validateToken = () => {
      const token = cookies.token;
      const isTokenValid = validateTokenLogic(token);
      if (isTokenValid) {
        dispatch(updateAccessToken(token));
      }
    };

    validateToken();
  }, [token,dispatch]);

  return null;
};

// Custom function for token validation
const validateTokenLogic = (token: any) => {
  return token !== null && token !== undefined && token.trim() !== "";
};

export default useTokenValidation;
