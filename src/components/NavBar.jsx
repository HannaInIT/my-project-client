import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useContext } from "react";                     // <== IMPORT 
import { AuthContext } from "../context/auth.context";  // <== IMPORT
 
function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user } = useContext(AuthContext);   // <== ADD

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
 
  
  //  Update the rendering logic to display different content 
  //  depending on whether the user is logged in or not
  return (
    <nav>
    <Link to="/">
      <button>Home</button>
    </Link>
 
     <Link to="/cars">
      <button>Cars</button>
    </Link> 

    {isLoggedIn && (
      <>
        <Link to="/addcar">
          <button>Add your car</button>
        </Link>

        <button onClick={toggleMenu}>My details</button>

        {isMenuOpen && (
          <div className="dropdown-menu">
            <Link to="/mycars">
              <button>My cars</button>
            </Link>

            <Link to="/myreservations">
              <button>My reservations</button>
            </Link>
          </div>
        )}

        <button>Logout</button>
      </>
    )}

    {!isLoggedIn && (
      <>
        <Link to="/signup"><button>Sign Up</button></Link>
        <Link to="/login"><button>Login</button></Link>
      </>
    )}
  </nav>
);
}
 
export default Navbar;