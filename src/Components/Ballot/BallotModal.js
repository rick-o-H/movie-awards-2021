import "./BallotSubmission.scss";
import React from "react";

const BallotModal = ({show, handleClose, ballotResults }) => {

  return (
    show ?
    <div className="modal">
      <div className="modal-container">
        <div className="modal-content">
          <div className="modal-header">
            <span className="modal-close" onClick={() => handleClose()}>&times;</span>
            <h1>Results</h1>
          </div>
          <div className="modal-body">
            {Object.keys(ballotResults).map(key => {
              return <div>
                <h2>{key}</h2>
              <p>{ballotResults[key].title}</p>
              <img src={ballotResults[key].photoUrL} className="avatar" alt="Movie"></img>
              </div>
            })}
          </div>
        </div>
      </div>
    </div>
    : null
  );
};

export default BallotModal;