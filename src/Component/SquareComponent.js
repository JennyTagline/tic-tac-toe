import React from 'react'

const SquareComponent = (props) => {

    return (
        <div>
            <span className="square" onClick={props.onClick}>{props.state}</span>
        </div>
    )
}

export default SquareComponent
