import React from 'react';
import Nominee from './Nominee';

const NomineeList = ({ nominees, winner, setWinner }) => (
  nominees.map((nominee) => (<Nominee nominee={nominee} key={nominee.id} winner={winner} setWinner={setWinner} />))
);

export default NomineeList;