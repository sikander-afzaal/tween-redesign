import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [headerToggle, setHeaderToggle] = useState(false);
  return (
    <div className="header-cont">
      <header>
        <Link to={"/dashboard"}>
          <img src="/assets/logo-header.png" alt="" />
        </Link>
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
              href="https://pancakeswap.finance/swap?outputCurrency=0x83Ed28Dc512265C2CE1d4f971c8BA6Ec6c8c67b0"
              target={"blank"}
            >
              PancakeSwap
            </a>
            <a
              onClick={() => setHeaderToggle(false)}
              className="nav-link"
              href="https://tweet-to-earn.gitbook.io/tweetn"
              target={"blank"}
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
