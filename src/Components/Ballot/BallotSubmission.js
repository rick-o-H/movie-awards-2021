import "./BallotSubmission.scss";
import React, {useState} from 'react';
import BallotModal from './BallotModal';

const BallotSubmission = ({ballotResults}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <button className="submit-button" onClick={handleShow}>Submit Ballot</button>
      <BallotModal show={show} handleClose={handleClose} ballotResults={ballotResults}/>
    </div>
  )
}

export default BallotSubmission;