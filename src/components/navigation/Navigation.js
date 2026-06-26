import { NavLink, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Navigation.css";
import greenStroke from "./green-stroke.png";

export const Navigation = () => {
  const location = useLocation();

  const isAboutActive = location.pathname === "/" && location.hash === "#about";

  const navItems = [
    { to: "/lessons", label: "Lessons" },
    { to: "/strums", label: "Strums" },
    { to: "/songs", label: "Songs" },
    { to: "/chords", label: "Chords" },
    { to: "/fretboard", label: "Fretboard" },
  ];

  return (
    <nav className="navigation">
      <ul className="navigation-list">
        <li className="nav-link-wrapper">
          <HashLink smooth to="/#about">
            <span className={isAboutActive ? "active-link" : ""}>
              About Us
            </span>

            {isAboutActive && (
              <img
                src={greenStroke}
                alt="green stroke"
                className="green-stroke"
              />
            )}
          </HashLink>
        </li>

        {navItems.map((item) => (
          <li key={item.to} className="nav-link-wrapper">
            <NavLink to={item.to}>
              {({ isActive }) => (
                <>
                  <span className={isActive ? "active-link" : ""}>
                    {item.label}
                  </span>

                  {isActive && (
                    <img
                      src={greenStroke}
                      alt="green stroke"
                      className="green-stroke"
                    />
                  )}
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navigation;