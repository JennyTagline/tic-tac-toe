import React from 'react'

const Button = ({ text, ...rest }) => {
    return (
        <div>
            <button {...rest}>
                {text}
            </button>
        </div>
    )
}

export default Button
