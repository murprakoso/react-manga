import React from 'react'
import { Link } from 'react-router-dom'

export default function ChapterList(props) {

    const { title, slug } = props;

    return (
        // <div className="list-group">
        //     <Link to={"/chapter/" + slug} className="list-group-item">{title}</Link>
        // </div>
        <tr>
            <th scope="row" className="col-12">
                <Link to={'/chapter/' + slug}>{title}</Link>
            </th>
        </tr>
    )
}
