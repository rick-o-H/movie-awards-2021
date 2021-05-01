import React, { useState, useEffect } from 'react';
import CategoryList from '../Category/CategoryList';
import BallotSubmission from './BallotSubmission';
import api from '../../Api/Api';

const Ballot = () => {
  const [ballotData, setBallotData] = useState([]);

  const [ballotResults, setBallotResults] = useState({});

  const updateBallot = (ballotSelection) => {
    setBallotResults({...ballotResults, ...ballotSelection});
  }

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
    <div>
      <h1>AWARDS 2021</h1>
      <CategoryList categories={ballotData} updateBallot={updateBallot}/>
      <BallotSubmission ballotResults={ballotResults}/>
    </div>
  )
}

export default Ballot;
