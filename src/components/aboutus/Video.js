import "./css/Video.css";

const Video = () => {
    return (
        <iframe
            id="intro-video"
            src="https://www.youtube.com/embed/DqhPZP1auHo?si=rI3vPyTE4phOeEWm" 
            title="Backyard Chords Intro" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen></iframe>
    );
};

export default Video;