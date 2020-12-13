import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

export default function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link to="/" className="navbar-brand">MANGAP</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/popular" className="nav-link">Populer</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/recommended" className="nav-link">Rekomendasi</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/genres" className="nav-link">Genre</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link to="#" className="nav-link dropdown-toggle" id="navbarDropdown" data-toggle="dropdown">List</Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to="/" className="dropdown-item">Manga</Link>
                                <Link to="/" className="dropdown-item">Manhua</Link>
                                <Link to="/" className="dropdown-item">Manhwa</Link>
                            </div>
                        </li>
                    </ul>

                    <Search />
                </div>
            </div>
        </nav>
    )
}
