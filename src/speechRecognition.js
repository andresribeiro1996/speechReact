import React from "react";
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool
};

const Dictaphone = ({
  transcript,
  resetTranscript,
  browserSupportsSpeechRecognition
}) => {
  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <React.Fragment>
        <div className="row">
        <div className="col-md-6 offset-md-3">
            <input
            type="text"
            name="title"
            className="form-control"
            value={transcript}
            />
        </div>
        
            <button 
                type="button"
                className="btn btn-primary"
                onClick={resetTranscript}
            >
                Reset
            </button>
        
        </div>

        <br />
    </React.Fragment>
  );
};

Dictaphone.propTypes = propTypes;

export default SpeechRecognition(Dictaphone);