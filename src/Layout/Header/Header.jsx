import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [headerToggle, setHeaderToggle] = useState(false);
  return (
    <div className="header-cont">
      <header>
        <img src="/assets/logo-header.png" alt="" />
        <div className="right-header">
          <div
            className={`overlay ${headerToggle ? "open-overlay" : ""}`}
            onClick={() => setHeaderToggle(false)}
          ></div>
          <nav className={`${headerToggle ? "open-header" : ""}`}>
            <FontAwesomeIcon
              onClick={() => setHeaderToggle(false)}
              icon={faXmark}
              className="header-toggle"
            />
            <NavLink
              onClick={() => setHeaderToggle(false)}
              end
              to={"/dashboard"}
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              Token
            </NavLink>
            <NavLink
              onClick={() => setHeaderToggle(false)}
              to={"/dashboard/keyboard"}
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              Keyboard NFT
            </NavLink>
            <NavLink
              onClick={() => setHeaderToggle(false)}
              to={"/dashboard/tweet"}
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              Tweet2arn
            </NavLink>
            <NavLink
              onClick={() => setHeaderToggle(false)}
              to={"/dashboard/promotion"}
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              Promotional Package
            </NavLink>
            <NavLink
              onClick={() => setHeaderToggle(false)}
              to={"/dashboard/tswap"}
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              TSwap
            </NavLink>
            <a
              onClick={() => setHeaderToggle(false)}
              className="nav-link"
              href="#"
            >
              PancakeSwap
            </a>
            <a
              onClick={() => setHeaderToggle(false)}
              className="nav-link"
              href="#"
            >
              Docs
            </a>
            <img src="/assets/settings.png" alt="" />
          </nav>
          <FontAwesomeIcon
            onClick={() => setHeaderToggle(true)}
            icon={faBars}
            className="header-toggle"
          />
        </div>
      </header>
    </div>
  );
};

export default Header;
