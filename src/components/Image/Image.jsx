import React from 'react'

import './Image.css'



function Image({ logo, desc}) {
    return (
        <div>
          <img src={logo} alt={desc}  />
        </div>
    )
}

export default Image