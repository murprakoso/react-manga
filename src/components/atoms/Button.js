import React from 'react'

const Button = ({ title, ...res }) => {

    return (
        <button {...res}>{title}</button>
    )
}

export default Button;