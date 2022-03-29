import { withRouter } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import styles from './profilePage.module.css'

const ProfilePage = ({ history }) => {
  const userInfo = useAuth();

  const logoutHandler = () => {
    localStorage.removeItem("auth token");
    window.location.reload();
  };

  return (
    <div className={styles.profileContainer}>
      <h1>Profile Page</h1>
      <p> Welcome {userInfo.name}</p>
      <p>Your email adress is: {userInfo.email}</p>
      {userInfo.isAdmin ? "You are an admin" : "You are not an admin"}
      {userInfo ? <button className={styles.logoutBtn} onClick={logoutHandler}>Logout</button> : null}
    </div>
  );
};

export default withRouter(ProfilePage);
