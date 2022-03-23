import { withRouter } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const ProfilePage = ({ history }) => {
  const userInfo = useAuth();

  const logoutHandler = () => {
    localStorage.removeItem("auth token");
    window.location.reload();
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <p> Welcome {userInfo.name}</p>
      <p>Your email adress is: {userInfo.email}</p>
      {userInfo ? <button onClick={logoutHandler}>Logout</button> : null}
    </div>
  );
};

export default withRouter(ProfilePage);
