import React from "react";
import Logo from "../../Images/Logo.avif";
import "../Header/Header.css";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg custom-dropdown">
        <div className="container-fluid navbar_container-ChildWrapper">
          <div className="navbar-brand logo-text">
            <span>Deepthi Mounika</span>
            <span>Fashion Apparel</span>
          </div>
          <div className="dropdown-apparel">
            <div className="" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ color: "white" }}
                  >
                    Apparel
                  </a>
                  <ul
                    className="dropdown-menu custom-dropdown"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a
                        className="dropdown-item"
                        href="sarees"
                        style={{ color: "white" }}
                      >
                        Sarees
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="topsandjeans"
                        style={{ color: "white" }}
                      >
                        Tops and Jeans
                      </a>
                    </li>
                   
                    <li>
                      <a
                        className="dropdown-item"
                        href="western"
                        style={{ color: "white" }}
                      >
                        Western Wear
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="kurti"
                        style={{ color: "white" }}
                      >
                        kurti
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
