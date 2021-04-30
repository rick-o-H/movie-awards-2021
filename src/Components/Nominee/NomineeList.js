import React from 'react';
import Nominee from './Nominee';

const NomineeList = ({ nominees }) => (
  nominees.map((nominee) => (<Nominee nominee={nominee} key={nominee.id} />))
);

export default NomineeList;