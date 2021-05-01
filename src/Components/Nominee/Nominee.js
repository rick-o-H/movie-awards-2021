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