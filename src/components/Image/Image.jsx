import React from 'react'

import './Image.css'
import imagem from '../../images/photosnap.svg'


function Image({ logo, desc}) {
    return (
        <div>
          <img src={imagem} alt={desc}  />
        </div>
    )
}

export default Image