import React from 'react';

import './Skill.css'

const Skill = ({skill, filter}) => {

  function handleClick(skill){
    console.log(skill)
    filter(skill)
} 
  return (
       skill.map(item => (
           <button onClick={()=>handleClick(item)}>{item}</button>
       ))
  )
}

export default Skill;