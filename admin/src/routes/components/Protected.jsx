import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import PropTypes from "prop-types";
import { selectLoggedInUser } from "src/redux/action/AuthSlice";

export const Protected = ({ children }) => {
  const loggedInUser = useSelector(selectLoggedInUser);

  console.log("Inside Protected:", loggedInUser);

  if (loggedInUser?.isVerified) {
    return children;
  }

  return <Navigate to="sign-in" replace />;
};

Protected.propTypes = {
  children: PropTypes.node.isRequired,
};
