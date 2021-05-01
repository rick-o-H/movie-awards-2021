import React from 'react';
import Category from './Category';

const CategoryList = ({ categories, updateBallot }) => (
  categories.map((category) => (<Category category={category} key={category.id} updateBallot={updateBallot} />))
);

export default CategoryList;