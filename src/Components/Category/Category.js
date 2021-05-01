import './Category.scss';
import React, {useState} from 'react';
import NomineeList from '../Nominee/NomineeList';


const Category = ({ category, updateBallot }) => {
  const [winner, setWinner] = useState({id: null});

  return (
    <div className='category'>
      <header>{category.title}</header>
      <NomineeList nominees={category.items} updateBallot={updateBallot} winner={winner} setWinner={setWinner} categoryID={category.id}/>
    </div>
  )
}

export default Category;