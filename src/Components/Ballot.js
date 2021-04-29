import React, { useState, useEffect } from 'react';
import CategoryList from './Ballot/CategoryList';
import BallotSubmission from './Ballot/BallotSubmission';
import api from '../Api/Api';

const Ballot = () => {
  const [ballotData, setBallotData] = useState([]);

  useEffect(() => {
    let mounted = true;
    api.getBallotData()
      .then(({items}) => {
        if (mounted) {
          setBallotData(items);
        }
      });
    return () => mounted = false;
  }, [])

  return (
    <div className='ballot'>
      <h1>AWARDS 2021</h1>
      <CategoryList ballots={ballotData}/>
      <BallotSubmission />
    </div>
  )
}

export default Ballot;