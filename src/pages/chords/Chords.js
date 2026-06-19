import "./Chords.css";
import ChordCollections from "../../components/chord-collections/ChordCollections";
import Chord from "../../components/chord/Chord";
import campfirekids from "./images/campfire-kids.png";

const Chords = () => {
    return (
        <section className="chords-page page">
            <div className="container">

                <div className="chords-header">
                    <div className="page-copy">
                        <span className="page-kicker">
                            Chords
                        </span>

                        <h1 className="page-title">
                            Learn Guitar Chords
                        </h1>

                        <p className="fretboard-text">
                            Chords are the building blocks of songs.
                        </p>
                    </div>
                    <div>
                        <img src={campfirekids} alt="Kids Playing Guitar at Campfire" />
                    </div>
                </div>

                <ChordCollections />

                <section className="campfire-chords chord-list">
                    <h2 className="section-title">
                        Campfire Chords
                    </h2>

                    <div className="campfire-chord-grid chord-board-grid">
                        <Chord
                            title="C"
                            frets={[-1,3,2,0,1,0]}
                        />
                        
                        <Chord
                            title="G"
                            frets={[3,2,0,0,0,3]}
                        />

                        <Chord
                            title="D"
                            frets={[-1,-1,0,2,3,2]}
                        />

                        <Chord
                            title="A"
                            frets={[-1,0,1,1,1,0]}
                        />

                        <Chord
                            title="A Minor"
                            frets={[-1,0,2,2,1,0]}
                        />

                        <Chord
                            title="E"
                            frets={[0,2,2,1,0,0]}
                        />

                        <Chord
                            title="E Minor"
                            frets={[0,2,2,0,0,0]}
                        />
                    </div>
                </section>

            </div>
        </section>
    );
};

export default Chords;