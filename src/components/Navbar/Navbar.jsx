import React from "react";
import { Link } from "react-router-dom";
const Navbar = ({ user, handleSignout }) => {
  const loggedInNavbar = (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/" onClick={()=> handleSignout()}>Sign out</Link>
        </li>
      </ul>
    </nav>
  );

  const loggedOutNavbar = (
    <nav>
      <ul>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );

  return <div>{user ? loggedInNavbar : loggedOutNavbar}</div>;
};

export default Navbar;
