import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "/images/logo.svg";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/recipes", label: "Recipes" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  useEffect(() => setIsOpen(false), [location.pathname]);

  return (
    <>
      <header className="header">
        <Link
          to="/"
          className="logo">
          <img
            src={logo}
            alt=""
          />
        </Link>
        <nav className="nav">
          <ul>
            {NAV.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to}>
                  <span>{label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <Link
          to="/recipes"
          className="button button--sm">
          Browse recipes
        </Link>
        <div className="navigation">
          <input
            type="checkbox"
            className="navigation__checkbox"
            id="navi-toggle"
            checked={isOpen}
            onChange={(e) => setIsOpen(e.target.checked)}
            hidden
          />
          <label
            htmlFor="navi-toggle"
            className="navigation__button"
            role="button"
            aria-controls="site-menu"
            aria-expanded="false"
            tabIndex={0}>
            <span
              className="navigation__icon"
              aria-hidden="true"></span>
            <span className="sr-only">Open menu</span>
          </label>
        </div>
      </header>
      <nav
        className="navigation__nav"
        id="site-menu"
        aria-label="Mobile menu">
        <ul className="navigation__list">
          {NAV.map(({ to, label }) => (
            <li
              key={to}
              className="navigation__item">
              <NavLink
                to={to}
                className="navigation__link">
                <span>{label}</span>
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink
              to="/recipes"
              className="button button--sm">
              <span>Browse recipes</span>
            </NavLink>
          </li>
        </ul>
        <label
          htmlFor="navi-toggle"
          className="navigation__close">
          <span className="sr-only">Close menu</span>
        </label>
      </nav>
    </>
  );
};

export default Header;
