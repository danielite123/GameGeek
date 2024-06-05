import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="header">
      <div className="navbar">
        <div className="nav-card">
          <div className="logo">
            <Link className="logo-link" to="/">
              GameGeek
            </Link>
          </div>
          <div className="middle">
            <Link className="link" to="/categories">
              Categories
            </Link>
            <Link className="link" to="/brands">
              Brands
            </Link>
            <Link className="link" to="/new">
              What&apos;s New
            </Link>
            <Link className="link" to="/sales">
              Sales
            </Link>
            <Link className="link" to="/help">
              Help
            </Link>
            <Link className="link" to="/about">
              About
            </Link>
          </div>
          <div className="bar">
            <Link to="/search">
              <img src="/assets/search.png" alt="" />
            </Link>
            <Link to="/">
              <img src="/assets/user.png" alt="" />
            </Link>
            <Link to="/">
              <img src="/assets/cart.svg" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
