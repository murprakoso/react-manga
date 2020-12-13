import React from 'react'
import { Link } from 'react-router-dom'

export default function ButtonGenre(props) {

    const { genre_name } = props;
    const endpoint = genre_name.replace(/ /g, "-").toLowerCase();

    return (
        <div className="col-lg-3 col-sm-4 col-6 btn__genre">
            <Link to={"/genres/" + endpoint} className="btn btn-outline-secondary btn-block">
                {genre_name ? genre_name : 'genre'}
            </Link>
        </div>
    )
}
