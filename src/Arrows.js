import React from 'react'
import './Arrows.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

function Arrows() {
    return (
        <div className='arrowContainer'>

            <div className='arrow1'><FontAwesomeIcon icon={faArrowUp} size="xs" color="blue" style={{ height: "35px", marginLeft: "2px" }} />
            </div>

        </div>
    )
}

export default Arrows