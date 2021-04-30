import React from 'react';

const Nominee = ({ nominee, winner, setWinner }) => {
  const handleSelection = () => {
    setWinner(nominee);
  }
  return (
    nominee.id === winner.id ?
      <div className='selected-nominee'>
      <p>{nominee.title}</p>
      <img src={nominee.photoUrL} className="avatar" alt="Movie"></img>
      <div></div>
      <button disabled>Select Nominee</button>
      </div>
      :
      <div className='nominee'>
        <p>{nominee.title}</p>
        <img src={nominee.photoUrL} className="avatar" alt="Movie"></img>
        <div></div>
        <button onClick={() => {handleSelection()}}>Select Nominee</button>
      </div>

  )
}

export default Nominee;