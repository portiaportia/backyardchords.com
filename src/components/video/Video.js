import { useState } from "react";

import "./Video.css";
import playButton from "./images/play-button.png";


const Video = ({
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
}) => {

    const [playing, setPlaying] = useState(false);


    return (

        <article className={`video-card ${className || ""}`}>

            <div className="video-card__media">

                {!playing && (

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


                        <button
                            className="video-card__play"
                            type="button"
                            aria-label={`Play ${title}`}
                            onClick={() => setPlaying(true)}
                        >

                            <img
                                className="video-card__play-image"
                                src={playButton}
                                alt=""
                                aria-hidden="true"
                            />

                        </button>

                    </>

                )}


                {playing && (

                    <iframe
                        className="video-card__iframe"
                        src={`https://www.youtube.com/embed/${code}?autoplay=1&rel=0`}
                        title={title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    >
                    </iframe>

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


export default Video;