import React from 'react';
import Category from './Category';

const CategoryList = ({ categories }) => (
  categories.map((category) => (<Category category={category} key={category.id} />))
);

export default CategoryList;