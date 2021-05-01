import React from 'react';
import Nominee from './Nominee';

const NomineeList = ({ nominees, updateBallot, winner, setWinner, categoryTitle }) => (
  nominees.map((nominee) => (<Nominee nominee={nominee} key={nominee.id} updateBallot={updateBallot} winner={winner} setWinner={setWinner} categoryTitle={categoryTitle} />))
);

export default NomineeList;