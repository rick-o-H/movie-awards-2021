import React from 'react';

const Nominee = ({ nominee, winner, setWinner }) => {
  const handleSelection = () => {
    setWinner(nominee);
  }
  return (
    <div className={nominee.id === winner.id ? 'selected-nominee' : 'nominee'} onClick={() => {handleSelection()}}>
      <p>{nominee.title}</p>
      <img src={nominee.photoUrL} className="avatar" alt="Movie"></img>
    </div>
  )
}

export default Nominee;