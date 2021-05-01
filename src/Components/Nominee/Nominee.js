import React from 'react';

const Nominee = ({ nominee, updateBallot, winner, setWinner, categoryID }) => {
  const handleSelection = () => {
    setWinner(nominee);
    const newBallot = {};
    newBallot[categoryID] = nominee;
    updateBallot(newBallot)
  }
  return (
    nominee.id === winner.id ?
      <div className='selected-nominee'>
      <p>{nominee.title}</p>
      <img src={nominee.photoUrL} className="avatar" alt="Movie"></img>
      <div></div>
      <button disabled className="select-button">Select</button>
      </div>
      :
      <div className='nominee'>
        <p>{nominee.title}</p>
        <img src={nominee.photoUrL} className="avatar" alt="Movie"></img>
        <div> </div>
        <button className="select-button" onClick={() => {handleSelection()}}>Select</button>
      </div>

  )
}

export default Nominee;