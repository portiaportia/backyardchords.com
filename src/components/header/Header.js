import "./Header.css";
import Navigation from "../navigation/Navigation";

const Header = () => {
    return (
        <header className="header">
            <div className="container header-container">
                <div className="logo">
                <a href="/">
                    <span className="logo-backyard">BACKYARD</span>
                    <span className="logo-chords">CHORDS</span>
                </a>
                </div>

                <Navigation />
            </div>
        </header>
    )
};

export default Header;