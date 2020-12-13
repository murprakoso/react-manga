import React from 'react'
import { Link } from 'react-router-dom'

export default function Card(props) {

    // descructering
    const { title, thumb, type, update_on, endpoint, chapter } = props;

    const badge = type === 'Manga' ? 'badge-danger' : type === 'Manhua' ? 'badge-success' : 'badge-info';

    return (
        <div className="col-lg-3 col-sm-4 col-6 portfolio-item">
            <div className="card h-100">
                <Link to={"/manga/detail/" + endpoint}>
                    <img className="card-img-top" src={thumb ? thumb : 'http://placehold.it/700x400'} alt="CardImage" />
                </Link>
                <div className="card-body">
                    <span className={'badge mr-2 ' + badge}>{type}</span>
                    <small>Terakhir diupdate: {update_on}</small><br />
                    <strong className="card-title font-weight-bold">
                        <Link to={"/manga/detail/" + endpoint} className="text-dark">{title}</Link>
                    </strong>
                    <p className="card-text text-secondary">{chapter}</p>
                </div>
            </div>
        </div>
    )
}
