import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import "./Navigation.css";
import greenStroke from "./green-stroke.png";

export const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation-list">
        <li><HashLink smooth to="/#about">About Us</HashLink></li>
        <li><Link to="/lessons">Lessons</Link></li>
        <li><Link to="/strums">Strums</Link></li>
        <li><Link to="/songs">Songs</Link></li>
        <li><Link to="/chords">Chords</Link></li>
        <li className="fretboard-link">
          <Link to="/fretboard" className="fretboard-highlight">Fretboard</Link>
          <img src={greenStroke}  alt="green stroke" className="green-stroke" />
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;