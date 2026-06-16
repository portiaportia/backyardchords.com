import { Link } from "react-router-dom";
import "./Navigation.css";
import greenStroke from "./green-stroke.png";

export const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation-list">
        {/*<li><a href="#lessons">Lessons</a></li> */}
        {/*<li><a href="#strums">Strums</a></li>*/}
        {/*<li><a href="#songs">Songs</a></li> */}
        <li><a href="#about">About Us</a></li>
        <li><Link to="/chords">Chords</Link></li>
        <li className="fretboard-link">
          <Link to="/fretboard" class="fretboard-highlight">Fretboard</Link>
          <img src={greenStroke}  alt="green stroke" className="green-stroke" />
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;