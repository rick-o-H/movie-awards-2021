import React, { useState, useEffect } from 'react';
import CategoryList from '../Category/CategoryList';
import BallotSubmission from './BallotSubmission';
import api from '../../Api/Api';

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
    <div>
      <h1>AWARDS 2021</h1>
      <CategoryList categories={ballotData}/>
      <BallotSubmission />
    </div>
  )
}

export default Ballot;
