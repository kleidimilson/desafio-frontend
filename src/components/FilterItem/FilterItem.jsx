import React from 'react';
import './FilterItem.css'
import iconClose from '../../../images/close.png'
const FilterItem = ({item, _callback}) => {

    const removeFilter = () => {
        _callback(item)
    }
  return(
         
         <div id='filterItem' onClick={()=>removeFilter()}>
            <span id='itemFilter'>{item}</span>
            <div id='closeButton'>
              <img id="iconClose" src={iconClose}/>
            </div>
         </div>
  )
}

export default FilterItem;