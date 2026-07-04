import "./css/Video.css";

const Video = () => {
    return (
        <iframe
            id="intro-video"
            src="https://www.youtube.com/embed/K0qIVGHHHsk?si=WJZsjvlou05hadMl" 
            title="Backyard Chords Intro" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen></iframe>
    );
};

export default Video;