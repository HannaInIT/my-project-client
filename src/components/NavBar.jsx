import { useState } from 'react';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import 'bootstrap/dist/css/bootstrap.min.css'

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user } = useContext(AuthContext);

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  //  Update the rendering logic to display different content 
  //  depending on whether the user is logged in or not
  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/cars">Cars</a>
        </li>
        {isLoggedIn && (
          <>
            <Link to="/addcar" className="nav-link">Add your car</Link>

            <Link to="/auth/logout" className="nav-link">Logout</Link>

          </>
        )}
        <li className="nav-item">
          {!isLoggedIn && (
            <>
              <Link to="/signup"><button>Sign Up</button></Link>

              <Link to="/login"><button>Login</button></Link>
            </>
          )}
        </li>
      </ul>
    </div>
  </div>
</nav>
);
}

export default Navbar;