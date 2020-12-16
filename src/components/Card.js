import React from 'react'
import { Link } from 'react-router-dom'

export default function Card(props) {

    // descructering
    const { title, thumb, type, update_on, upload_on, endpoint, chapter } = props;

    const badge = type === 'Manga' ? 'badge-danger' : type === 'Manhua' ? 'badge-success' : 'badge-info';

    return (
        <div className="col-lg-3 col-sm-4 col-6 portfolio-item">
            <div className="card h-100">
                <Link to={"/detail/" + endpoint}>
                    <img className="card-img-top" src={thumb ? thumb : 'http://placehold.it/700x400'} alt="CardImage" />
                </Link>
                <div className="card-body p-2">
                    <span className={'badge mr-2 ' + badge}>{type}</span>
                    <small>{update_on ? 'Terakhir diupdate: ' + update_on : null || upload_on ? upload_on : null} </small><br />
                    <strong className="card-title font-weight-bold">
                        <Link to={"/detail/" + endpoint} className="text-dark">{title}</Link>
                    </strong>
                    <p className="card-text text-secondary">{chapter}</p>
                </div>
            </div>
        </div>
    )
}
