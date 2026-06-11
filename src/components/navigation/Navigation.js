import "./Navigation.css";

export const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation-list">
        <li><a href="#lessons">Lessons</a></li>
        <li><a href="#chords">Chords</a></li>
        <li><a href="#strums">Strums</a></li>
        <li><a href="#songs">Songs</a></li>
        <li><a href="/fretboard">Fretboard</a></li>
        <li><a href="#about">About Us</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;