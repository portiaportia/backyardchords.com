import Video from "./Video";
import "./css/LessonModel.css";
import Chord from "../../components/chord/Chord";

export default function LessonModel({
  title,
  code,
  chords,
  closeModel,
}) {
  return (
    <div className="modal-overlay">
      <div className="modal">

        <button
          className="modal-close"
          onClick={(e) => {
            e.stopPropagation();
            closeModel();
          }}
          aria-label="Close modal"
        >
          ×
        </button>

        <h2>{title}</h2>

        <iframe
            className="video_model"
            src={`https://www.youtube.com/embed/${code}?autoplay=1&rel=0`}
            title={title}
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            />

        <div className="modal-chords">
          {chords.map((chord) => (
              <Chord
                key={chord.title}
                title={chord.title}
                frets={chord.frets}
                background={chord.background}
              />
            ))}
        </div>

      </div>
    </div>
  );
}