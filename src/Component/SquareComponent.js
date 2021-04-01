import React from 'react'

const SquareComponent = (props) => {
    const classes = props.className ? `${props.className} square` : `square`
    return (
        <div>
            <span className={classes} onClick={props.onClick}>{props.state}</span>
        </div>
    )
}

export default SquareComponent
