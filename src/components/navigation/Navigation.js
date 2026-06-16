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
        <li><a href="/chords">Chords</a></li>
        <li className="fretboard-link">
          <a href="/fretboard" class="fretboard-highlight">Fretboard</a>
          <img src={greenStroke}  alt="green stroke" className="green-stroke" />
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;