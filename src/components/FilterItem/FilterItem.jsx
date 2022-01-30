import React from 'react';
import './FilterItem.css'
import iconClose from 'https://firebasestorage.googleapis.com/v0/b/bdss-9e2e6.appspot.com/o/icon-remove.svg?alt=media&token=7a19a3c5-29e2-416c-8839-fc83a2899c90'
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