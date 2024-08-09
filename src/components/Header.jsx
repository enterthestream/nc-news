import { Link } from "react-router-dom";
import { LoggedInUserContext } from "../context/UserContext";
import { useContext } from "react";

export default function Header() {
  const {
    loggedInUser: { username, avatar_url },
  } = useContext(LoggedInUserContext);

  return (
    <>
      {" "}
      <div className="header">
        <h1>NC News</h1>
        <nav className="navigation">
          <Link to="/">{"Frontpage"}</Link>
          <Link to="/topics">{"Topics"}</Link>
          <Link className="logged-in-user">
            {`${username}`}{" "}
            <img
              src={avatar_url}
              alt={`${username}'s avatar`}
              className="avatar"
            />
          </Link>
        </nav>
      </div>
    </>
  );
}
