import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedUserDetails,
  updateAccessToken,
  updateUserDetails,
} from "../redux/userSlice";
import { getProfile } from "../api/auth/auth";
import { useCookies } from "react-cookie";

const useFetchUserDetails = () => {
  const userDetails = useSelector(selectedUserDetails);
  const dispatch = useDispatch();
  const [cookies] = useCookies(["token"]);

  useEffect(() => {
    const token = cookies.token;
    if (token && !userDetails.id) {
      const fetchUserDetails = async () => {
        try {
          const response = await getProfile(token);
          const userDetails = response.data.data;
          dispatch(updateUserDetails(userDetails));
        } catch (error) {
          console.log("Error fetching user details:", error);
        }
      };
      fetchUserDetails();
    }
  }, [cookies.token, userDetails.id, dispatch]);

  return userDetails;
};

export default useFetchUserDetails;
