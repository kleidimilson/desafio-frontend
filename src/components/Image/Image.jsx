import React from 'react'
import logo from '../../images/photosnap.svg'
import './Image.css'

function Image({ url, desc}) {
    return (
        <div>
            <img src={logo} alt={desc}  />
        </div>
    )
}

export default Image