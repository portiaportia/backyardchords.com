import "./Lessons.css";

import partsOfGuitar from "./images/guitar.png";
import guitarHead from "./images/guitar-head.png";
import holding from "./images/holding.png";
import leftHand from "./images/left-hand.png";
import rightHand from "./images/right-hand.png";

import clock from "./images/clock.png";
import lessonStar from "./images/lesson-star.png";
import barChart from "./images/bar-chart.png";
import blueStrokeLesson from "./images/blue-stroke-lesson.png";

import numberBackground from "./images/number-background.png";

import blueHighlight1 from "./images/blue-highlight1.png";
import blueHighlight2 from "./images/blue-highlight2.png";
import blueHighlight3 from "./images/blue-highlight3.png";
import blueHighlight4 from "./images/blue-highlight4.png";

import greenHighlight1 from "./images/green-highlight1.png";
import greenHighlight2 from "./images/green-highlight2.png";
import greenHighlight3 from "./images/green-highlight3.png";
import greenHighlight4 from "./images/green-highlight4.png";

import Video from "../../components/video/Video";


const backgroundHighlights = [
    blueHighlight1,
    greenHighlight1,
    blueHighlight2,
    greenHighlight2,
    greenHighlight3,
    blueHighlight3,
    greenHighlight4,
    blueHighlight4,
];


const lessons = [
    {
        number: "01",
        title: "Parts of the Guitar",
        duration: "5:20",
        code: "Y4fpsQrmw84",
        image: partsOfGuitar,
        backgroundImage: backgroundHighlights[0],
    },
    {
        number: "02",
        title: "Tuning Your Guitar",
        duration: "4:15",
        code: "Y4fpsQrmw84",
        image: guitarHead,
        backgroundImage: backgroundHighlights[1],
    },
    {
        number: "03",
        title: "Holding Your Guitar",
        duration: "3:45",
        code: "Y4fpsQrmw84",
        image: holding,
        backgroundImage: backgroundHighlights[2],
    },
    {
        number: "04",
        title: "Left Hand Basics",
        duration: "6:10",
        code: "Y4fpsQrmw84",
        image: leftHand,
        backgroundImage: backgroundHighlights[3],
    },
    {
        number: "05",
        title: "Right Hand Basics",
        duration: "4:30",
        code: "Y4fpsQrmw84",
        image: rightHand,
        backgroundImage: backgroundHighlights[4],
    },
    {
        number: "06",
        title: "First Chords: E, A, D",
        duration: "7:35",
        code: "Y4fpsQrmw84",
        image: partsOfGuitar,
        backgroundImage: backgroundHighlights[5],
    },
    {
        number: "07",
        title: "Changing Chords",
        duration: "6:45",
        code: "Y4fpsQrmw84",
        image: partsOfGuitar,
        backgroundImage: backgroundHighlights[6],
    },
    {
        number: "08",
        title: "Next Steps & Practice Tips",
        duration: "4:50",
        code: "Y4fpsQrmw84",
        image: partsOfGuitar,
        backgroundImage: backgroundHighlights[7],
    },
];


const Lessons = () => {

    return (

        <section className="lessons-page page">

            <div className="container">

                <section className="lessons-hero">

                    <span className="page-kicker">
                        Lessons
                    </span>


                    <div className="lessons-heading-row">

                        <div className="lessons-heading">

                            <h1 className="page-title lessons-title">
                                Let's Learn Together
                            </h1>

                        </div>


                        <div className="lesson-highlights">

                            <div className="lesson-highlight">

                                <img
                                    className="lesson-highlight__image lesson-highlight__image--clock"
                                    src={clock}
                                    alt=""
                                    aria-hidden="true"
                                />

                                <p>
                                    5–20
                                    <br />
                                    Minutes
                                </p>

                            </div>


                            <div className="lesson-highlight">

                                <img
                                    className="lesson-highlight__image lesson-highlight__image--bars"
                                    src={barChart}
                                    alt=""
                                    aria-hidden="true"
                                />

                                <p>
                                    Beginner
                                    <br />
                                    Friendly
                                </p>

                            </div>


                            <div className="lesson-highlight">

                                <img
                                    className="lesson-highlight__image lesson-highlight__image--star"
                                    src={lessonStar}
                                    alt=""
                                    aria-hidden="true"
                                />

                                <p>
                                    Perfect For
                                    <br />
                                    First Timers
                                </p>

                            </div>

                        </div>

                    </div>

                </section>


                <div className="lessons">

                    {lessons.map((lesson) => (

                        <Video
                            key={lesson.number}
                            className="lesson"
                            number={lesson.number}
                            title={lesson.title}
                            duration={lesson.duration}
                            code={lesson.code}
                            image={lesson.image}
                            backgroundImage={lesson.backgroundImage}
                            numberBackground={numberBackground}
                            titleStroke={blueStrokeLesson}
                        />

                    ))}

                </div>


                <div className="lessons-coming-soon">

                    <span className="coming-soon-lines">
                        ///
                    </span>

                    <p>
                        New lessons coming soon!
                    </p>

                    <span className="coming-soon-star">
                        ★
                    </span>

                </div>

            </div>

        </section>

    );

};


export default Lessons;