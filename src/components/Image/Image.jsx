import React from 'react'

import './Image.css'
import image from '../../images/photosnap.svg'

function Image({ logo, desc}) {
    return (
        <div>
          <img src={image} alt={desc}  />
        </div>
    )
}

export default Image