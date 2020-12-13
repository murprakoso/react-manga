import React from 'react'

const Link = ({ title, onClick }) => {
    return (
        <p className="link" onClick={onClick}>{title}</p>
    )
}

export default Link