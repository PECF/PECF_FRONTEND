import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { getUserDetails } from "../../stores/actions/userAction";

const Profile = ({ history }) => {
  const dispatch = useDispatch();
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated === false) {
      history.push("/user/login");
    }
  }, [history, isAuthenticated]);

  useEffect(() => {
    dispatch(getUserDetails());
  }, [dispatch, getUserDetails]);

  return (
    <>
      <>
        <Box>
          <Box>
            <h1>My Profile</h1>
            <img src={user.avatar.url} alt={user.name} />
            <Link to="/user/me/update">Edit Profile</Link>
          </Box>
          <Box>
            <Box>
              <h4>Full Name</h4>
              <p>{user.name}</p>
            </Box>
            <Box>
              <h4>Email</h4>
              <p>{user.email}</p>
            </Box>
            <Box>
              <h4>Joined On</h4>
              <p>{String(user.createdAt).substr(0, 10)}</p>
            </Box>

            <Box>
              <Link to="/orders">My Orders</Link>
              <Link to="/password/update">Change Password</Link>
            </Box>
          </Box>
        </Box>
      </>
    </>
  );
};

export default Profile;
