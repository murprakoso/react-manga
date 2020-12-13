import React from 'react'
import { Link } from 'react-router-dom'

export default function Subheading({ title, titleActive }) {
    return (
        <div>
            <h1 className="mt-4 mb-3">
                <small>{title}</small>
            </h1>
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active">{titleActive}</li>
            </ol>
        </div>
    )
}
