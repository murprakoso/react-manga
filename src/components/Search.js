import React from 'react'
// import React, { useState } from 'react'

export default function Search() {

    // const [search, setSearch] = useState([]);

    return (
        <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
        </form>
    )
}
