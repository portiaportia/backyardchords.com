import { useState } from "react";
import LessonModel from "./LessonModel";
import Video from "./Video";

import "./css/Lesson.css";


const Lesson = ({
    className,
    code,
    number,
    title,
    duration,
    image,
    backgroundImage,
    numberBackground,
    titleStroke,
    artworkStyle,
    chords
}) => {

    const [playing, setPlaying] = useState(false);

    const closeModel = () => {
        setPlaying(false);
    }

    return (

        <article className={`video-card ${className || ""}`}>

            <div className="video-card__media" onClick={() => setPlaying(true)}>

                {!(playing && chords.length === 0) &&(

                    <>

                        <div className="video-card__number">

                            <img
                                className="video-card__number-background"
                                src={numberBackground}
                                alt=""
                                aria-hidden="true"
                            />

                            <span className="video-card__number-text">
                                {number}
                            </span>

                        </div>


                        {backgroundImage && (

                            <img
                                className="video-card__background"
                                src={backgroundImage}
                                alt=""
                                aria-hidden="true"
                                
                            />

                        )}


                        {image ? (

                            <img
                                className="video-card__artwork"
                                src={image}
                                alt=""
                                aria-hidden="true"
                                style={artworkStyle}
                            />

                        ) : (

                            <div className="video-card__artwork-placeholder"></div>

                        )}
                    </>

                )}


                {playing ? (
                    chords.length === 0 ? (
                        <Video 
                            title={title}
                            code={code}
                            />
                        ) : (
                            <LessonModel
                            key={number}
                                className="lesson"
                                number={number}
                                title={title}
                                duration={duration}
                                code={code}
                                image={image}
                                chords={chords}
                                closeModel ={closeModel}/>
                        )
                    ) : (
                    <></>
                    )}
                                

            </div>


            <div className="video-card__footer">

                <div className="video-card__title-area">

                    <h2 className="video-card__title">
                        {title}
                    </h2>


                    {titleStroke && (

                        <img
                            className="video-card__title-stroke"
                            src={titleStroke}
                            alt=""
                            aria-hidden="true"
                        />

                    )}

                </div>


                <div className="video-card__duration">

                    <span className="video-card__clock"></span>

                    <span>
                        {duration}
                    </span>

                </div>

            </div>

        </article>

    );

};


export default Lesson;