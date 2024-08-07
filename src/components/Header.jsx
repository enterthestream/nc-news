import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <h1>NC News</h1>
      <nav className="navigation">
        <Link to="/">{"Frontpage"}</Link>
        <Link>Topics</Link>
        <Link>Logged In User</Link>
      </nav>
    </div>
  );
}
