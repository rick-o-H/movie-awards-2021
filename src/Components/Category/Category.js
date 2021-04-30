import './Category.scss';
import React, {useState} from 'react';
import NomineeList from '../Nominee/NomineeList';


const Category = ({ category }) => {
  const [winner, setWinner] = useState({id: null});

  return (
    <div className='category'>
      <header>{category.title}</header>
      <NomineeList nominees={category.items} winner={winner} setWinner={setWinner}/>
    </div>
  )
}

export default Category;