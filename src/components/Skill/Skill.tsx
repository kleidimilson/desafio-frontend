import React from 'react';

import './Skill.css'

const Skill = ({skill}) => {
    
  return (
       skill.map(item => (
           <button>{item}</button>
       ))
  )
}

export default Skill;