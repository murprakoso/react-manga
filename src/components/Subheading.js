import React from 'react'
import { Link } from 'react-router-dom'

export default function Subheading({ title, titleActive }) {
    return (
        <div>
            <h5 className="mt-4 mb-3">
                <strong className="subheading">{title}</strong>
            </h5>
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active">{titleActive}</li>
            </ol>
        </div>
    )
}
