import React from 'react';
import NomineeList from './NomineeList';


const Category = ({ category }) => {
  return (
    <div>
      <h5>{category.title}</h5>
      <NomineeList nominees={category.items}/>
    </div>
  )
}

export default Category;