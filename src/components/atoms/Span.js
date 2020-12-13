import React from 'react'

const Span = ({ title, ...rest }) => {

    return (
        <span className="genre__names mr-2" {...rest}>{title}</span>
    )
}

export default Span;
