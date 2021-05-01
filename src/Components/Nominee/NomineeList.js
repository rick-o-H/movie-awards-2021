import React from 'react';
import Nominee from './Nominee';

const NomineeList = ({ nominees, updateBallot, winner, setWinner, categoryID }) => (
  nominees.map((nominee) => (<Nominee nominee={nominee} key={nominee.id} updateBallot={updateBallot} winner={winner} setWinner={setWinner} categoryID={categoryID} />))
);

export default NomineeList;