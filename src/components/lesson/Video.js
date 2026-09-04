import { useState } from "react";

import "./css/Video.css";


const Video = ({
    code,
    title,
}) => {

    const [playing, setPlaying] = useState(true);


    return (
        <iframe
            className="video-card__iframe"
            src={`https://www.youtube.com/embed/${code}?autoplay=1&rel=0`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            />
    )
};


export default Video;