import React from 'react'

import './Image.css'

function Image({logo, desc}) {
    console.log(logo)
    return (
        <div>
          <img src={logo} alt={desc}  />
        </div>
    )
}

export default Image