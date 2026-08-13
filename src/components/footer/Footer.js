import "./Footer.css";
import Guitar from "./images/footer-guitar.png";

const Footer = () => {
    return (
        <div id="footer">
            <section className="container">
                <div id="footer-guitar-line">
                    <div>
                        <img id="footer-guitar" src={Guitar} alt="guitar" />
                    </div>
                    <div>
                        <p>Keep Practicing.</p>
                        <p id="footer-optional">You've got this!</p>
                    </div>
                </div>
                <p id="footer-copy">&copy; 2026 Backyard Chords.</p>
            </section>
        </div>
    )
};

export default Footer;