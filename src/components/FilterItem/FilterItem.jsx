import React from 'react';
import './FilterItem.css'
const FilterItem = ({item, _callback}) => {

    const removeFilter = () => {
        _callback(item)
    }
  return(
         <span id='filterItem' onClick={()=>removeFilter()}>{item}</span>
  )
}

export default FilterItem;