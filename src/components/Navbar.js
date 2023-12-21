import React from "react";
import classes from "./Navbar.module.css";
import { ImMobile } from "react-icons/im";
import { MdOutlineEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className={classes.navbar}>
        <header>
          <div className={classes["contact-info"]}>
            <p>
              <span className={classes["contact-icon"]}>
                <ImMobile size={14} />
              </span>
              <span>+91 12345 67890</span>
            </p>
            <p>
              <span className={classes["contact-icon"]}>
                <MdOutlineEmail size={14} />
              </span>
              <span>info@company.com</span>
            </p>
          </div>
        </header>
        <div className={classes["main-nav"]}>
          <nav>
            <div className={classes.logo}>
              <a href="/">LOGO</a>
            </div>
            <ul className={classes["nav-links"]}>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  ABOUT US
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  SERVICES
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  TESTIMONIALS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  BLOGS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
