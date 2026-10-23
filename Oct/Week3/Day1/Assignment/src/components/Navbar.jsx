import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/service">Services</NavLink>
        <NavLink to="/contact">Contact</NavLink>

        <NavLink to="/profile/101?name=Elina&age=23&course=MCA&city=Bhubaneswar">
          Profile
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
