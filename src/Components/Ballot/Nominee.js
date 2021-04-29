import React from 'react';


const Nominee = ({ nominee }) => {
  return (
    <div>
      <p>{nominee.title}</p>
      <img src={nominee.photoUrL} alt="Movie"></img>
    </div>
  )
}

export default Nominee;