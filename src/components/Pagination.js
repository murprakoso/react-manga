import React from 'react'
import { Link } from 'react-router-dom'

export default function Pagination() {
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className="page-item">
                    <Link to="/" className="page-link">Prev</Link>
                </li>
                <li className="page-item">
                    <Link to="/" className="page-link">1</Link>
                </li>
                <li className="page-item">
                    <Link to="/" className="page-link">2</Link>
                </li>
                <li className="page-item">
                    <Link to="/" className="page-link">3</Link>
                </li>
                <li className="page-item">
                    <Link to="/" className="page-link">Next</Link>
                </li>
            </ul>
        </nav>
    )
}
