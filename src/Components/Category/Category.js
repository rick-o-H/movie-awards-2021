import './Category.scss';
import React from 'react';
import NomineeList from '../Nominee/NomineeList';


const Category = ({ category }) => {
  return (
    <div className='category'>
      <header>{category.title}</header>
      <NomineeList nominees={category.items}/>
    </div>
  )
}

export default Category;